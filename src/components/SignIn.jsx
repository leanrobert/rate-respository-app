import { Formik } from "formik"
import { StyleSheet, View } from "react-native";
import SignInForm from "./SignInForm";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#e1e4e8',
  },
});

const initialValues = {
  username: "",
  password: ""
}

const SignIn = () => {
  const onSubmit = values => console.log(values);

  return(
    <View style={styles.formContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default SignIn;