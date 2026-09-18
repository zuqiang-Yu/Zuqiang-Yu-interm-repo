# Writing Unit and Integration Tests for React Native

## Why is testing important in React Native development?

React Native apps must run correctly across two platforms, multiple OS versions, and a wide range of screen sizes — a combination that makes exhaustive manual testing impractical as the codebase grows. Automated tests catch regressions immediately after each change, giving developers the confidence to refactor, add features, and ship updates without manually re-verifying every existing behaviour each time.

## How do you mock API calls in tests?

The standard approach is to use `jest.mock()` to replace the HTTP client — typically axios or fetch — with a controlled fake that returns predetermined data without making a real network request
This keeps tests fast and deterministic, removes any dependency on network availability or server state, and makes it straightforward to simulate error conditions such as timeouts or 500 responses that would be difficult to trigger reliably against a real API.

## What's the difference between unit and integration tests?

Unit tests isolate the smallest piece of logic — a single reducer, selector, or utility function — and verify that a given input always produces the expected output, with all external dependencies mocked out. Integration tests exercise how multiple parts of the system work together, such as a user tapping a button that dispatches a Redux action, triggers an API call, updates the store, and causes the UI to display new data — testing the full chain of interactions rather than each piece in isolation.
