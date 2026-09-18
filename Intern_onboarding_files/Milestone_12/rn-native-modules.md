# Using Native Modules and Bridging in React Native

## Why would you need to use native modules in a React Native app?

React Native's JavaScript layer can only access device capabilities that have already been wrapped by the framework or a community library, but some platform features have no existing JavaScript API — Bluetooth, NFC, custom camera pipelines, specialised hardware sensors, or a company's existing iOS and Android SDKs all fall into this category. Native modules let you write the platform-specific implementation in Swift, Objective-C, Kotlin, or Java and expose a JavaScript-callable interface, bridging the gap between what React Native provides out of the box and what the underlying platform can do.

## How does React Native communicate with native code?

In the traditional architecture, the JavaScript thread and the native thread run separately and exchange data over an asynchronous Bridge that serialises messages to JSON, sends them across thread boundaries, and deserialises them on the other side — introducing latency on every call. The new architecture replaces this with JSI (JavaScript Interface), a C++ layer that gives JavaScript a direct reference to native objects, enabling synchronous calls without serialisation overhead and significantly reducing the communication cost for performance-sensitive operations.

## What are some challenges of maintaining native bridges?

The primary challenge is that a native module requires three separate codebases to stay in sync — the JavaScript API, the iOS implementation, and the Android implementation — so any change to the interface must be applied consistently across all three, which multiplies the maintenance burden. React Native's own architecture upgrades can also break existing bridge code, requiring native-side updates every time the framework evolves. Debugging is more difficult too, since JavaScript errors and native crashes surface through different tools and require different expertise to diagnose, making it harder to trace a bug that spans the JS-to-native boundary.
