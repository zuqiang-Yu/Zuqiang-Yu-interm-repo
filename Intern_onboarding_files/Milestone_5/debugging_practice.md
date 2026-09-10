# Practise React Debugging in a Test Repo

## What was the issue?

There were two bugs. The first was a state mutation bug where a component directly modified a prop object with `state.count = state.count + 1`, corrupting the parent's state in memory and causing the counter to jump by unexpected amounts instead of incrementing by 1. The second was a stale closure bug where `setInterval` inside `useEffect(fn, [])` captured the initial value of `count` (which was 0) forever, so the counter always executed `setCount(0 + 1)` and got permanently stuck at 1.

## What debugging method did you use?

For the mutation bug, I added a `console.log` to track the actual value of `state.count` after each update, which revealed that the value in memory was changing correctly but the UI was not reflecting the right number. For the stale closure bug, I observed that the counter incremented to 1 and then stopped despite the interval still ticking, and traced the issue back to `count` being used inside the callback without being listed as a dependency.

## How did you resolve the problem?

For the mutation bug, I removed the direct assignment and replaced it with `setState({ count: state.count + 1 })`, which properly notifies React of the change and triggers a re-render. For the stale closure bug, I replaced `setCount(count + 1)` with the functional updater form `setCount(prev => prev + 1)`, which receives the latest state value from React directly instead of relying on the stale closed-over variable.
