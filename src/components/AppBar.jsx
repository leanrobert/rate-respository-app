import { Pressable, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
  },
  textContainer: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.textContainer}>Repositories</Text>
      </Pressable>
    </View>
  )
}

export default AppBar