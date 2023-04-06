import { StyleSheet, View } from "react-native"
import { Formik } from "formik";
import SignUpForm from './SignUpForm'
import BodyText from '../BodyText'
import theme from "../../theme";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from '../../graphql/mutations'
import { useSignIn } from '../../hooks/useSignIn'
import { useNavigate } from "react-router-native";
import * as yup from "yup";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 15,
  },
  graphqlError: {
    marginTop: 10,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(1).max(30),
  password: yup.string().required("Password is required").min(5).max(50),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required("Password confirmation is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const SignUp = () => {
  const [signUp, { error }] = useMutation(SIGN_UP)
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signUp({
        variables: {
          user: {
            username,
            password
          }
        }
      })

      if (data?.createUser) {
        const { authorize } = await signIn({ username, password })
        if (authorize) {
          navigate('/')
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
      {error && (
        <BodyText style={styles.graphqlError} color="error">
          {error.message}
        </BodyText>
      )}
    </View>
  )
}

export default SignUp