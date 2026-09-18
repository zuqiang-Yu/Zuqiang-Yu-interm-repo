# Handling Gestures and Animations in React Native

## What are the differences between Animated and react-native-reanimated?

React Native's built-in `Animated` library runs most of its computation on the JavaScript thread, which means animations can stutter or drop frames when the JS thread is busy handling other work. `react-native-reanimated` moves animation logic directly onto the UI (native) thread using worklets, so animations remain smooth even when the JavaScript thread is under heavy load — making it the preferred choice for complex or performance-critical animations.

## How does react-native-gesture-handler improve gesture performance?

React Native's default touch system routes all gesture events through the JavaScript thread before they are acted on, introducing latency that becomes noticeable during fast or continuous interactions. `react-native-gesture-handler` processes gestures entirely on the native thread, eliminating that round-trip delay and producing faster, more reliable responses — especially for swipes, drags, and other continuous gestures.

## When would you use gestures instead of buttons in a UI?

Gestures are the right choice for continuous or spatial interactions where the user is directly manipulating content — swipe-to-delete, drag-to-reorder, pinch-to-zoom, and pull-to-refresh are all natural fits. Buttons are better suited to discrete, clearly-labelled actions such as form submission or navigation, where the user expects a single tap to trigger a defined outcome.

## Why is InteractionManager.runAfterInteractions necessary?

When a navigation transition or touch animation is in progress, running expensive JavaScript work at the same time — such as rendering a large list or fetching data — can compete for the JS thread and cause the animation to stutter. `InteractionManager.runAfterInteractions` defers that heavy work until all active animations and interactions have completed, keeping transitions smooth while still ensuring the work gets done immediately afterwards.
