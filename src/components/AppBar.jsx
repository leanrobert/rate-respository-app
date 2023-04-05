import { ScrollView, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';
import Text from "./Text";
import { Link } from "react-router-native";

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
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.textContainer}>Repositories</Text>
        </Link>
        <Link to='/signin'>
          <Text style={styles.textContainer}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  )
}

export default AppBar