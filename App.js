import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={ styles.container }>
      <View style={[ styles.lightblueBg , styles.Box, styles.boxShadow, styles.andriodShadow ]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[ styles.lightgreenBg, styles.Box, styles.boxShadow, styles.andriodShadow ]}>
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
  },
  title: {
    fontSize: 30,
    color: "darkslateblue",
  },
  Box: {
    width: 250,
    height: 250,
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
  boxShadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 6, 
      height: 6 
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  andriodShadow: {
    elevation: 10,
  },
});