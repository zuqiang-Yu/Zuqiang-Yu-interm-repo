class OpenAILLM(BaseLLM):
    def __init__(self, config: LLMConfig):
        self.config = config
        self._client = AsyncOpenAI(
            api_key=config.api_key,
            base_url=config.base_url,
        )

    async def stream(self, text: str, history: list[dict]) -> AsyncIterator[str]:
        if self.config.use_web_search:
            async for chunk in self._stream_with_search(text, history):
                yield chunk
        else:
            async for chunk in self._stream_chat(text, history):
                yield chunk

    async def _stream_chat(self, text: str, history: list[dict]) -> AsyncIterator[str]:
        messages = self.build_messages(text, history, self.config.system_prompt)
        response = await self._client.chat.completions.create(
            model=self.config.model,
            messages=messages,
            stream=True,
        )
        async for chunk in response:
            if chunk.choices and chunk.choices[0].delta.content:
                yield chunk.choices[0].delta.content

    async def _stream_with_search(self, text: str, history: list[dict]) -> AsyncIterator[str]:
        messages = [*history, {"role": "user", "content": text}]
        async with self._client.responses.stream(
            model=self.config.model,
            instructions=self.config.system_prompt,
            tools=[{"type": "web_search_preview"}],
            input=messages,
        ) as s:
            async for event in s:
                if event.type == "response.output_text.delta":
                    yield event.delta