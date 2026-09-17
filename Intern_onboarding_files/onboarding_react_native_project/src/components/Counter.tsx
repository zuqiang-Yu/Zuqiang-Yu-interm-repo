import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';

function Counter({ style }: { style?: ViewStyle }) {
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Counter</Text>
      {/* inline style 用在这里 — 动态样式，根据 count 变色 */}
      <Text
        style={[
          styles.count,
          {
            color: count < 0 ? '#ef4444' : count === 0 ? '#6b7280' : '#22c55e',
          },
        ]}
      >
        {count}
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{ marginTop: 12, padding: 8 }}
        onPress={() => setCount(0)}
      >
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

// StyleSheet.create() 用在这里 — 固定的、可复用的样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  count: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3b82f6',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  resetText: {
    color: '#9ca3af',
    fontSize: 14,
  },
});

export default Counter;
