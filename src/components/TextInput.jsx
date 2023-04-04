import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    marginTop: 15,
    marginHorizontal: 15,
    padding: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
}

export default TextInput;