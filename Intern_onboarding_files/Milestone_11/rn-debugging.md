# Debugging React Native Apps (Flipper, Metro, and Console Logs)

## How does Metro help in debugging a React Native app?

Metro is React Native's JavaScript bundler and development server — it watches the project files for changes and instantly re-bundles and pushes updates to the connected device or simulator, enabling Fast Refresh to apply changes to individual components without resetting the app's state. The Metro terminal is also the primary output channel for `console.log` statements and JavaScript runtime errors, making it the first place to look when diagnosing crashes or unexpected behaviour during development.

## What debugging features does Flipper provide?

Flipper is Meta's desktop debugging platform for React Native and provides a set of specialised panels that go well beyond terminal logs: the Logs panel displays and filters `console.log` output with log levels; the Network panel shows every HTTP request and response including headers and bodies; the React DevTools panel lets you inspect the live component tree along with each component's props and state; and the Redux plugin visualises the action history and store state over time. Together these panels give a much richer picture of what the app is doing than scrolling through terminal output alone.

## How can you inspect network requests in React Native?

The most convenient option during development is Flipper's Network plugin, which intercepts and displays all requests and responses without any code changes. Alternatively, an Axios request and response interceptor can log every call to the Metro console, which works even without Flipper connected. The React Native dev menu (shake the device or press `m` in the terminal) also includes a Network Inspector on supported setups. For production, Sentry's performance monitoring captures network breadcrumbs from real users, providing visibility into API behaviour that only surfaces at scale.
