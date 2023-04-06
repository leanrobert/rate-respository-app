import { StyleSheet, View } from "react-native"
import FormikTextInput from '../FormikTextInput'
import Button from '../Button'

const styles = StyleSheet.create({
  textInputContainer: {
    marginTop: 15,
  },
  btnContainer: {
    marginTop: 15,
  },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <View style={styles.textInputContainer}>
        <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      </View>
      <View style={styles.textInputContainer}>
        <FormikTextInput
          name="passwordConfirmation"
          placeholder="Password confirmation"
          secureTextEntry
        />
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={onSubmit}>Sign up</Button>
      </View>
    </View>
  )
}

export default SignUpForm