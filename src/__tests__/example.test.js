describe('Example', () => {
  it('works', () => {
    expect(1).toBe(1)
  })
})

import { Pressable, Text, TextInput, View } from "react-native";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { useState } from "react";

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  )
}

describe('Greeting', () => {
  it('renders a greeting message based on the name prop', () => {
    render(<Greeting name="Kalle" />);
    expect(screen.getByText('Hello Kalle!')).toBeDefined();
  })
})

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({ username, password });
  };

  return (
    <View>
      <View>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
        />
      </View>
      <View>
        <Pressable onPress={handleSubmit}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

describe('Form', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />)

    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle')
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password')
    fireEvent.press(screen.getByText('Submit'))

    expect(onSubmit).toHaveBeenCalledTimes(1)

    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'kalle',
      password: 'password'
    })
  })
})