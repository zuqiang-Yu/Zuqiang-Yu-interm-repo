# Handling Deep Linking and Routing

## What are the benefits of deep linking in mobile apps?

Deep linking allows a URL — in a push notification, email, SMS, or web page — to open a specific screen inside the app rather than dropping the user on the home screen and expecting them to navigate there manually. This dramatically improves the experience for time-sensitive flows such as password resets, order confirmations, and promotional offers, because the user lands exactly where the action is. From a product perspective, deep links increase conversion and retention by reducing the number of steps between an external trigger and the intended destination, and they enable cross-platform campaigns where the same URL works in a browser and in the native app.

## How does React Navigation handle deep linking?

React Navigation has built-in deep linking support configured through the `linking` prop on `NavigationContainer`. You provide a `prefixes` array listing your URL schemes (e.g. `myapp://`) and, optionally, your Universal Link or App Link domain, then a `config` object that maps URL path patterns to screen names:

```js
const linking = {
  prefixes: ['myapp://', 'https://myapp.com'],
  config: {
    screens: {
      Home: '',
      ProductDetail: 'product/:id',
      Profile: 'user/:username',
    },
  },
};

<NavigationContainer linking={linking}>...</NavigationContainer>;
```

When the operating system delivers a matching URL to the app, React Navigation parses the path, resolves it against the config, navigates to the correct screen, and passes any path parameters as `route.params` automatically. On iOS, the URL scheme must be registered in `Info.plist`; on Android, an intent filter is added to `AndroidManifest.xml`.

## What challenges might arise when implementing deep linking?

Platform configuration differs significantly: iOS requires entries in `Info.plist` for custom schemes and an Associated Domains entitlement backed by a server-hosted `apple-app-site-association` file for Universal Links, while Android needs intent filters in `AndroidManifest.xml` and a `assetlinks.json` file on the server for App Links. Keeping these in sync and correctly deployed is error-prone.

The app must also handle deep links received in two distinct states — a cold start (app not running, link opened it) and a warm resume (app was in the background) — and the navigation logic may differ between them. Authentication adds another layer: a link to a protected screen must redirect to login first and then continue to the intended destination after sign-in, which requires persisting the pending URL across the auth flow.

Finally, testing deep links requires explicitly triggering URLs from the terminal (`xcrun simctl openurl` on iOS, `adb shell am start` on Android), and coverage must include every combination of link type, app state, and authentication state to be reliable.
