# Handling API Calls in React Native using Axios & Axios-Retry

## Why is Axios preferred over fetch in some cases?

Axios automatically parses JSON responses and throws an error for any non-2xx HTTP status code, whereas the native `fetch` API requires a manual `.json()` call and an explicit check of `response.ok` to detect HTTP errors. Axios also provides request and response interceptors out of the box, making it straightforward to add shared behaviour across all requests — such as attaching authentication tokens, logging errors, or redirecting on a 401 — without duplicating that logic in every call.

## How does Axios-Retry improve network reliability?

Mobile networks are inherently unstable, and a failed request can often be the result of a brief signal drop rather than a real server or application error. Axios-Retry automatically re-sends failed requests a configurable number of times with an optional delay between attempts, targeting specific failure conditions such as network errors or 5xx responses, so transient connectivity issues are resolved transparently without the user ever seeing an error message.

## How would you handle API failures gracefully in a React Native app?

A robust approach works at three levels: an Axios response interceptor catches errors globally to handle common cases like 401 unauthorized or 500 server errors in one place; each data-fetching call is wrapped in a `try/catch` that sets local `loading` and `error` state so the UI can show a meaningful message instead of crashing; and Axios-Retry is configured on requests where reliability matters most, so a retry button is only surfaced to the user when the automatic retries have genuinely been exhausted.
