import { Text, StyleSheet, Dimensions } from 'react-native';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { useState } from 'react';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.3;

export default function SwipeExample() {
  const [status, setStatus] = useState('swiping me left or right');
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(1);

  const onSwipeLeft = () => setStatus('👈 swiping left！');
  const onSwipeRight = () => setStatus('👉 swiping right');
  const onReset = () => setStatus('wiping left or right');

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
      // 越滑越透明
      opacity.value = 1 - Math.abs(e.translationX) / SCREEN_WIDTH;
    })
    .onEnd((e) => {
      if (e.translationX > SWIPE_THRESHOLD) {
        // 滑右成功 — 飞出去
        translateX.value = withTiming(SCREEN_WIDTH, { duration: 200 }, () => {
          runOnJS(onSwipeRight)();
          // 飞回来
          translateX.value = 0;
          opacity.value = withTiming(1, { duration: 300 });
          runOnJS(onReset)();
        });
      } else if (e.translationX < -SWIPE_THRESHOLD) {
        // 滑左成功 — 飞出去
        translateX.value = withTiming(-SCREEN_WIDTH, { duration: 200 }, () => {
          runOnJS(onSwipeLeft)();
          // 飞回来
          translateX.value = 0;
          opacity.value = withTiming(1, { duration: 300 });
          runOnJS(onReset)();
        });
      } else {
        // 没滑够 — 弹回来
        translateX.value = withSpring(0);
        opacity.value = withTiming(1, { duration: 200 });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },

      { rotate: `${(translateX.value / SCREEN_WIDTH) * 15}deg` },
    ],
    opacity: opacity.value,
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.status}>{status}</Text>

      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.card, animatedStyle]}>
          <Text style={styles.cardText}>swiping me</Text>
          <Text style={styles.hint}>← left or right →</Text>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  },
  status: { fontSize: 18, marginBottom: 40, color: '#374151' },
  card: {
    width: 280,
    height: 180,
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  cardText: { color: 'white', fontSize: 32, fontWeight: 'bold' },
  hint: { color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 8 },
});
