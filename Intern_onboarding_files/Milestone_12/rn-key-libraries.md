# Understanding Key Libraries Used in Focus Bear

## What is the purpose of Redux-Persist, and why is it useful?

Redux keeps the app's global state in memory, so it is lost when the
app is closed. Redux-Persist saves the Redux store to local storage
(usually AsyncStorage) and loads it back ("rehydrates" it) when the app
starts. This is useful because the user stays logged in, their settings
are still there, and the app can show cached data straight away instead
of a blank screen while it waits for the network. You can also choose
which parts of the state to save with a whitelist or blacklist.

## How does `react-native-background-fetch` differ from a normal timer?

A normal timer like `setInterval` only runs while the app's JavaScript
is running, so it usually stops when the app goes to the background or
is closed. `react-native-background-fetch` asks the operating system to
wake the app up periodically to run a task, even when the app is in the
background, and on Android it can even run after the app is terminated.
The trade-off is that the OS decides the exact timing: the minimum
interval is about 15 minutes, and iOS may run it less often depending on
battery and how often the user opens the app. So it is good for tasks
like syncing data, but not for exact timing.

## Why does Focus Bear use Auth0 instead of handling authentication manually?

Authentication is easy to get wrong, and mistakes can leak user data.
Auth0 handles the difficult parts: storing passwords safely, issuing and
refreshing tokens, social logins (Google, Apple), multi-factor
authentication, and protection against attacks like brute-force login
attempts. Using Auth0 lets the team focus on Focus Bear's features
instead of building and maintaining a security system, and it follows
standards like OAuth 2.0 and OpenID Connect.

## How does PostHog help improve the user experience in Focus Bear?

PostHog records product analytics events, such as which screens users
open, which features they use, and where they stop in a flow. The team
can use funnels to see where users drop off (for example, during
onboarding) and fix those steps. PostHog also supports feature flags
and A/B tests, so a new feature can be released to a small group first
and measured before it goes to everyone.

## What's the difference between Sentry and PostHog, and when would you use each?

- **Sentry** is for **errors**: it captures crashes and exceptions with
  the stack trace, device information and the steps before the crash.
  I would use it to find and fix bugs, for example when the app crashes
  on a specific Android version.
- **PostHog** is for **behaviour**: it tracks what users do when the
  app is working. I would use it to answer product questions, for
  example "how many users finish setting up their first routine?"
  In short, Sentry tells you what is broken, and PostHog tells you how
  people use the app.

## How does `react-native-localize` work, and how does it interact with `i18next`?

`react-native-localize` reads the device's settings, such as the list
of preferred languages (`getLocales()`), the time zone and the number
format. Its `findBestLanguageTag()` function compares the device
languages with the languages the app supports and returns the best
match.

`i18next` does not know the device language by itself. So at startup,
the app gets the best language from `react-native-localize` and passes
it to `i18next` as `lng`, with English as the `fallbackLng`. If the
user changes the device language, the app can check again when it
comes back to the foreground and call `i18n.changeLanguage()`. In my
own project, I had hard-coded `lng: 'zh'`, and this is exactly the
library I would use to make it follow the device language.

## Which library would I replace with an alternative, and why?

I would replace `redux` + `redux-thunk` with **Redux Toolkit**. It is
the officially recommended way to write Redux today. It includes thunk
by default, reduces boilerplate with `createSlice` (actions and
reducers are written together), and uses Immer so state updates can be
written in a simpler way without mistakes. It still works with
`redux-persist`, so the migration could be done step by step, one slice
at a time.
