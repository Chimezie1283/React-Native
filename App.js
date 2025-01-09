import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title}>styleSheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  title: {
    fontSize: 30,
    color: "darkslateblue",
  },
});