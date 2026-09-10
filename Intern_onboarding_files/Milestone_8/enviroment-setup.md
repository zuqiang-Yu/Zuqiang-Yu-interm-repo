# Setting up a React Native Development Environment (Expo & Metro Server)

## What is the role of Metro in React Native development?

Metro is the JavaScript bundler for React Native, responsible for taking your JSX and JS files and packaging them into a format the mobile device can run. It runs a local server that the device connects to over Wi-Fi, and watches for file changes to push live updates instantly without needing to rebuild the whole app.

## How does Expo simplify React Native development?

Expo removes the need to set up Xcode or Android Studio by providing a managed environment that handles the native configuration for you. With the Expo Go app on your phone, you can scan a QR code and immediately preview your app on a real device, making it much faster to get started compared to a bare React Native setup.

## What issues did you encounter, and how did you resolve them?

A common issue is the phone and computer not being on the same Wi-Fi network, which prevents Expo Go from connecting to the Metro server — switching both to the same network fixes it. Another issue is port conflicts where Metro fails to start on its default port 8081, which can be resolved by running npx expo start --port 8082 to use a different port.
