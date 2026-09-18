# Performance Optimization in React Native

## What are the most common performance issues in React Native?

The most frequent issues are rendering large lists without virtualisation — using a plain `ScrollView` instead of `FlatList` causes every item to be mounted at once, exhausting memory on long datasets.
Unnecessary re-renders are another common culprit, where a parent state change causes every child component to re-render even when their props have not changed.
Heavy computation or new object and function references created inside the render function also degrade performance, as does excessive communication between the JavaScript thread and the UI thread, which causes animations and gestures to stutter.

## How do useMemo and useCallback improve performance?

`useMemo` caches the result of an expensive calculation and only recomputes it when its listed dependencies change, preventing that work from running on every render. `useCallback` caches a function reference so that the same function object is passed to child components across renders — without it, a new function is created each render, which React treats as a changed prop and triggers an unnecessary re-render in the child. Both hooks trade a small amount of memory for reduced computation, so they are most valuable when applied to genuinely expensive operations or components wrapped in `React.memo`, rather than used indiscriminately.

## What tools can you use to measure and monitor app performance?

During development, the **React DevTools Profiler** records component render timings and highlights which components re-render and why, making it the primary tool for diagnosing unnecessary renders. **Flipper** provides a native debugging interface with panels for network requests, layout inspection, and crash logs. Expo's built-in **Performance Monitor** (accessible from the dev menu) shows real-time frame rate and JavaScript thread usage. For production monitoring, **Sentry** captures crashes, slow transactions, and performance traces from real users, giving visibility into issues that only appear at scale.
