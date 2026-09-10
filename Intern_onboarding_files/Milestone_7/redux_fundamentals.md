# Introduction to Redux Toolkit

## When should you use Redux instead of useState?

Use Redux when multiple unrelated components need to share the same data and passing props through every level becomes unmanageable. If the state is only used within a single component or a small local subtree, useState is simpler and more than enough.

---

# Using Selectors in Redux Toolkit

## What are the benefits of using selectors instead of directly accessing state?

Selectors centralise the logic for reading state, so if the store structure changes you only need to update one place instead of hunting through every component. They also make components cleaner and easier to test, since the data-access logic is separated from the UI.
