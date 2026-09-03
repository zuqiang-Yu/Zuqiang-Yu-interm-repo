class OpenAILLM(BaseLLM):
    """
    OpenAI-backed LLM implementation that supports both standard chat
    and web search-augmented responses via streaming.
    """

    def __init__(self, config: LLMConfig):
        """
        Initialise the OpenAI client with the provided configuration.

        Args:
            config (LLMConfig): Contains api_key, base_url, model,
                                system_prompt, and use_web_search flag.
        """
        self.config = config
        # AsyncOpenAI is used throughout to avoid blocking the event loop
        # base_url allows pointing to alternative OpenAI-compatible endpoints
        self._client = AsyncOpenAI(
            api_key=config.api_key,
            base_url=config.base_url,
        )

    async def stream(self, text: str, history: list[dict]) -> AsyncIterator[str]:
        """
        Stream a response to the given text, using conversation history as context.

        Routes to web search or standard chat depending on config.use_web_search.
        Yields response text incrementally as chunks arrive.

        Args:
            text (str): The user's latest message.
            history (list[dict]): Previous messages in OpenAI message format.

        Yields:
            str: Text chunks as they stream in from the API.
        """
        if self.config.use_web_search:
            async for chunk in self._stream_with_search(text, history):
                yield chunk
        else:
            async for chunk in self._stream_chat(text, history):
                yield chunk

    async def _stream_chat(self, text: str, history: list[dict]) -> AsyncIterator[str]:
        """
        Stream a standard chat completion without web search.

        Builds the full message list (system prompt + history + new message)
        and streams the response token by token.

        Args:
            text (str): The user's latest message.
            history (list[dict]): Previous conversation messages.

        Yields:
            str: Content chunks from the streamed response.
        """
        messages = self.build_messages(text, history, self.config.system_prompt)
        response = await self._client.chat.completions.create(
            model=self.config.model,
            messages=messages,
            stream=True,
        )
        async for chunk in response:
            # Skip chunks with no content (e.g. role-only or finish_reason chunks)
            if chunk.choices and chunk.choices[0].delta.content:
                yield chunk.choices[0].delta.content

    async def _stream_with_search(self, text: str, history: list[dict]) -> AsyncIterator[str]:
        """
        Stream a response augmented with live web search results.

        Uses the OpenAI Responses API with the web_search_preview tool,
        which allows the model to query the web before generating a reply.
        Only output_text delta events are yielded — other event types
        (e.g. tool call events) are intentionally ignored.

        Args:
            text (str): The user's latest message.
            history (list[dict]): Previous conversation messages.

        Yields:
            str: Text chunks from the model's final response.
        """
        messages = [*history, {"role": "user", "content": text}]
        async with self._client.responses.stream(
            model=self.config.model,
            instructions=self.config.system_prompt,
            tools=[{"type": "web_search_preview"}],
            input=messages,
        ) as s:
            async for event in s:
                # Only yield actual text output — filter out search and metadata events
                if event.type == "response.output_text.delta":
                    yield event.delta