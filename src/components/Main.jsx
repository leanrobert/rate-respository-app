import React from "react";
import { StyleSheet, View } from "react-native";
import { Navigate, Route, Routes } from "react-router-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";
import SignIn from "./SignIn";
import SingleRepository from "./SingleRepository";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background
  }
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/repository/:id" element={<SingleRepository />} exact />
        <Route path="/create-review" element={<CreateReview />} exact />
        <Route path="*" element={<Navigate to='/' redorect  />} exact />
      </Routes>
    </View>
  )
}

export default Main