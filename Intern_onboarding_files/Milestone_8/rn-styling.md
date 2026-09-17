# React Native Stylesheets vs CSS-in-JS

## Why does React Native use camelCase instead of traditional CSS properties?

React Native styles are written as JavaScript objects, and JavaScript does not allow hyphens in property names without bracket notation, so background-color becomes backgroundColor to follow standard JS conventions.

## What are the benefits of using StyleSheet.create() over inline styles?

StyleSheet.create() sends styles to the native layer once at registration time and references them by a numeric ID, reducing the overhead of passing JavaScript objects across the bridge on every render. It also validates style properties at development time, catching typos and unsupported properties before they cause runtime issues.

## How would you handle different screen sizes in React Native?

The primary approach is to use useWindowDimensions() to get the current screen width and height as reactive values, then conditionally adjust styles — for example switching flexDirection from 'column' to 'row' when the width exceeds a breakpoint. For fixed calculations like setting an element to 80% of screen width, Dimensions.get('window') provides a quick one-time measurement that works well for static layouts.
