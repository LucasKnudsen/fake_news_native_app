import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Authentication from '../modules/Authentication';

const LoginView = () => {
  const auth = new Authentication({
    host: '/auth/sign_in',
  });

  const authenticate = async () => {
    let response = await auth.signIn(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please log in to read this article</Text>
      <TextInput
        style={styles.input}
        textContentType='emailAddress'
        placeholder='Email'></TextInput>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder='Password'></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Authentication.signIn()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {},
  header: {},
  input: {},
  button: {},
});
