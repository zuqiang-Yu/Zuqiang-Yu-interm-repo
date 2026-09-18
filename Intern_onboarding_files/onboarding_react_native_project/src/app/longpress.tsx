import { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

export default function LongPressExample() {
  const [pressed, setPressed] = useState(false);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const longPress = Gesture.LongPress()
    .minDuration(50)
    .onStart(() => {
      scale.value = withTiming(0.5, { duration: 150 });
      opacity.value = withTiming(0.6, { duration: 150 });
      runOnJS(setPressed)(true);
    })
    .onEnd(() => {
      scale.value = withTiming(1, { duration: 150 });
      opacity.value = withTiming(1, { duration: 150 });
      runOnJS(setPressed)(false);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={longPress}>
        <Animated.View
          style={[styles.box, pressed && styles.boxPressed, animatedStyle]}
        >
          <Text style={styles.text}>
            {pressed ? 'long pressing...' : 'long pressing me'}
          </Text>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  box: {
    backgroundColor: '#3b82f6',
    padding: 24,
    borderRadius: 12,
  },
  boxPressed: {
    backgroundColor: '#1d4ed8',
  },
  text: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
