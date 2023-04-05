import { ScrollView, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';
import Text from "./Text";
import { Link, useNavigate } from "react-router-native";
import { ME } from "../graphql/queries";
import { useApolloClient, useQuery } from "@apollo/client";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

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
  const { data } = useQuery(ME);
  const navigate = useNavigate();

  console.log(data);

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/signin')
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <Text style={styles.textContainer}>Repositories</Text>
        </Link>
        {data?.me ? (
          <Link to='/' onPress={logout}>
            <Text style={styles.textContainer}>Sign Out</Text>
          </Link>
        ) : (
          <Link to='/signin'>
            <Text style={styles.textContainer}>Sign In</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar