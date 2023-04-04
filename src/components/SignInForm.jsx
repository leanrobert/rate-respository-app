import { TouchableWithoutFeedback, View } from "react-native"
import FormikTextInput from "./FormikTextInput"
import Text from "./Text"

const styles = {
  btnContainer: {
    display: "flex",
    marginVertical: 15,
    marginHorizontal: 15,
    backgroundColor: '#0366d6',
    borderRadius: 5,
  },
  signInBtn: {
    padding: 15,
    alignSelf: "center",
  },
}

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <View style={styles.btnContainer}>
        <TouchableWithoutFeedback onPress={onSubmit}>
        <Text color="textLight" fontWeight="bold" style={styles.signInBtn}>
          Sign in
        </Text>
      </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

export default SignInForm