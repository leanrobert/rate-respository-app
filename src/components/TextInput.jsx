import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    borderColor: '#e1e4e8',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
  },
  errorTextInput: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    borderColor: '#d73a4a',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style];
  const errorTextInputStyle = [styles.errorTextInput, style];

  return <NativeTextInput style={error ? errorTextInputStyle : textInputStyle} {...props} />;
}

export default TextInput;