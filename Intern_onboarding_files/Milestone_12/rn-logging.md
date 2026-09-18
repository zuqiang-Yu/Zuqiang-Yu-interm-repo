# Logging and Crash Reporting with Sentry

## Why is logging important in a production React Native app?

In production there is no terminal to watch and `console.log` output is invisible, so without structured logging a crash or bug is effectively undiagnosable — you only learn about it when a user complains, and even then you have no record of what state the app was in or which code path it took before the failure. Logging creates a durable trail of events that lets you reconstruct what happened after the fact, turning an opaque crash report into a reproducible sequence of actions and state changes.

## How does Sentry improve debugging and issue tracking?

Sentry automatically captures unhandled exceptions and crashes the moment they occur, attaching a full stack trace, device model, OS version, app version, and a breadcrumb trail of the user's recent actions — all without requiring the user to file a report. It surfaces issues proactively through alerts, shows how many users are affected, and links each error to the release that introduced it, which dramatically reduces the time between a problem appearing in production and a developer having enough context to fix it.

## What are best practices for handling and logging errors?

Initialise Sentry with `Sentry.init()` at the app entry point so all unhandled errors are captured globally from the start. Wrap critical UI sections in an `ErrorBoundary` component so a component crash degrades gracefully rather than taking down the entire app. For errors caught in `try/catch` blocks, call `Sentry.captureException()` explicitly so they are tracked even though they did not crash the app. Never log sensitive data such as passwords, tokens, or personal information. Apply severity levels — info, warning, and error — consistently so that high-priority issues stand out and are not buried in noise.
