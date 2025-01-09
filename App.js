import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={ styles.container }>
      <View style={[ styles.lightblueBg , styles.Box ]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[ styles.lightgreenBg, styles.Box ]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
    flexDirection: "row",
  },
  title: {
    fontSize: 30,
    color: "darkslateblue",
  },
  Box: {
    width: 100,
    height: 100,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderColor: "darkslateblue",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
});