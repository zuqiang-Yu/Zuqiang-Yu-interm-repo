# Preventing Unnecessary Renders with useCallback #23

## What problem does useCallback solve?

useCallback solve the re-render problem, when the child component is a very big data table, in this situation will reduce the website performance and UX
reduce unnecessary re-render in the website.

## How does useCallback work differently from useMemo?

useCallback use for function, useMemo use for result.

## When would useCallback not be useful?

If the child component re-render need a bit little time, usually do not use useCallback.
