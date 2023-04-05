import { Formik } from "formik"
import { StyleSheet, View } from "react-native";
import SignInForm from "./SignInForm";
import * as yup from 'yup';
import { useSignIn } from '../hooks/useSignIn';
import { useNavigate } from "react-router-native";

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

export const SignInContainer = ({ onSubmit, validationSchema }) => {
  return(
    <View style={styles.formContainer}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate()

  const onSubmit = async values => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password })
      console.log(data);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <SignInContainer onSubmit={onSubmit} validationSchema={validationSchema} />
  )
}

export default SignIn;