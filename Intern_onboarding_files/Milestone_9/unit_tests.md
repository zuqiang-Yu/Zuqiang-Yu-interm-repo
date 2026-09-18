# Introduction to Unit Testing with Jest

## Why is automated testing important in software development?

Automated tests act as a safety net that continuously verifies existing functionality has not broken as the codebase grows and changes — something that becomes impossible to guarantee through manual testing alone as a project scales. They also give developers the confidence to refactor code or add new features quickly, because a failing test immediately pinpoints what regressed and where, rather than leaving bugs to be discovered in production.

## What did you find challenging when writing your first Jest test?

Because I familiar with backend developer, so I will try to found the functional test like boundary test, is the function work as I expected.
However, in react native unit test, it is a UI test, don't know how to do it and what should I test. Another thing is the format and syntax.

---

# Testing React Components with Jest & React Testing Library

## What are the benefits of using React Testing Library instead of testing implementation details?

React Testing Library encourages tests that interact with components the same way a real user would — querying elements by visible text, ARIA roles, or labels rather than internal state, method names, or component structure. This means tests remain valid through internal refactors: as long as the rendered output and behaviour stay the same, the tests pass, which reduces false failures and keeps the test suite focused on what actually matters to the user.

## What challenges did you encounter when simulating user interaction?

I think the biggest challenge is hard to locate the button/interaction correctly. Sometimes with same or similar button I need to simulate user click. using Test to locate the button usually locate two or more button then test failed.

---

# Mocking API Calls in Jest

## Why is it important to mock API calls in tests?

Mocking API calls keeps tests fast, deterministic, and isolated from external dependencies — a real network request can fail due to connectivity issues, server downtime, or changing data, all of which would cause test failures unrelated to the code being tested. Mocks also let you simulate specific scenarios that are hard to reproduce with a real API, such as network errors, timeouts, or edge-case response shapes, giving you full control over the conditions each test runs under.

## What are some common pitfalls when testing asynchronous code?

One of the most common pitfalls is making assertions before the async operation has resolved — forgetting to `await` a promise or omitting `waitFor` means the test checks the DOM or state too early and can pass falsely or miss the expected update entirely. Another frequent issue is not handling promise rejections properly, which can cause tests to silently fail or produce misleading error messages rather than clearly identifying what went wrong.
