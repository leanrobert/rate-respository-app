import { Formik } from "formik"
import { StyleSheet, View } from "react-native";
import SignInForm from "./SignInForm";
import * as yup from 'yup';

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
  },
});

const initialValues = {
  username: "",
  password: ""
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const SignIn = () => {
  const onSubmit = values => console.log(values);

  return(
    <View style={styles.formContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default SignIn;