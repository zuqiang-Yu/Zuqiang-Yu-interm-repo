# Understanding React Native Components vs. React Components

## What are the key differences between `<View>` and `<div>`?

View is a React Native component that maps directly to a native platform container (UIView on iOS, android.view on Android), while div is an HTML element that only exists in the browser DOM. Unlike div, View cannot contain raw text directly — all text must be wrapped in a Text component.

## How does StyleSheet.create() improve performance compared to inline styles?

StyleSheet.create() sends styles to the native layer once at registration time and references them by ID, whereas inline style objects are re-created as new JavaScript objects on every render. This reduces bridge communication overhead and allows React Native to validate style properties at development time rather than at runtime.

## Why doesn’t React Native use className like React web?

className is a web-specific concept tied to CSS class selectors, which do not exist in React Native since there is no browser, no CSS engine, and no stylesheet cascade. React Native uses the style prop with JavaScript objects or StyleSheet references instead, which map directly to native platform styling APIs.
