import { View, Text, StyleSheet } from 'react-native';

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is second page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
