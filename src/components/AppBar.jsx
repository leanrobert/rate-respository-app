import { ScrollView, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';
import { ME } from "../graphql/queries";
import { useApolloClient, useQuery } from "@apollo/client";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";
import AppBarTab from './AppBarTab';
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBar,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link="/">Repositories</AppBarTab>
        {data?.me ? (
          <>
            <AppBarTab link="/create-review">Create a review</AppBarTab>
            <AppBarTab onPress={logout} link="/signin">Sign out</AppBarTab>
          </>
        ) : (
          <AppBarTab link="/signin">Sign in</AppBarTab>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar