import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Authentication from '../modules/Authentication';

const LoginView = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const auth = new Authentication(
{}
  );

  const authenticate = async () => {
    try {
      let response = await auth.signIn(email, password);
      debugger;
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please log in to read this article</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        textContentType='emailAddress'
        placeholder='Email'></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        placeholder='Password'></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => authenticate()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111518',
  },
  header: {
    fontSize: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
  },
  button: {
    padding: 15,
    backgroundColor: 'yellow',
    borderRadius: 15,
  },
});
