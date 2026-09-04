# Making API Calls with Axios #16

## Why is it useful to create a reusable Axios instance?

Don't need to type whole url every times, reusable.

## How does intercepting requests help with authentication?

Request interceptors solve the problem of having to manually attach an authentication token to every single API call — instead, the interceptor runs automatically before every request and attaches the token from localStorage if it exists. This means authentication logic lives in one place, so if the token format changes or you need to add extra headers, you only update the interceptor rather than hunting down every API call in the codebase.

## What happens if an API request times out, and how can you handle it?

if an API request is timeout, it will interrupted the request and throw out an request error page.
