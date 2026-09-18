# Navigation in React Native using React Navigation

## What are the key differences between stack, tab, and drawer navigation?

Stack navigation works like a deck of cards — each new screen is pushed on top of the previous one, and the user navigates back by popping the top screen off the stack. It is best suited for flows with a clear linear hierarchy, such as a list leading to a detail page. Tab navigation places a persistent tab bar at the bottom (or top) of the screen, letting the user switch between independent sections of the app instantly without losing their place in each section. Drawer navigation slides a side menu in from the edge of the screen, typically used for apps with many top-level destinations or settings that do not need to be visible at all times.

## How does React Navigation handle screen transitions?

React Navigation manages transitions through its navigator components, which maintain a navigation state object describing which screens are mounted and in what order. When a navigation action is dispatched — such as `navigate`, `push`, or `goBack` — the navigator updates its state and triggers the appropriate animated transition (slide, fade, or modal lift) using React Native's `Animated` API or `react-native-reanimated` under the hood. Each screen remains mounted in the background by default so its state is preserved when the user returns to it.

## How would you implement deep linking in a React Native app?

Deep linking maps an incoming URL — either a universal link from a website or a custom scheme like `myapp://` — to a specific screen inside the app. In React Navigation you define a `linking` configuration object that maps URL path patterns to navigator route names, then pass it to the `NavigationContainer`. For Expo projects, you also register your URL scheme in `app.json` under the `scheme` field. Once configured, React Navigation intercepts the incoming URL on app launch or while the app is running and navigates directly to the matching screen, optionally passing route params extracted from the URL path or query string.
