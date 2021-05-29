import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Authentication from '../modules/Authentication';

const LoginView = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = new Authentication({ host: '' });
  const article = route.params.article;

  const authenticate = async () => {
    try {
      await auth.signIn(email, password);
      navigation.navigate('single article', { article: article });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text testID='login-header' style={styles.header}>
        Please log in to read this article
      </Text>
      <TextInput
        testID='email-input'
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        textContentType='emailAddress'
        placeholder='Email'></TextInput>
      <TextInput
        testID='password-input'
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        placeholder='Password'></TextInput>
      <TouchableOpacity
        style={styles.button}
        testID='login-submit'
        onPress={() => authenticate()}>
        <Text style={styles.buttonText}>Login</Text>
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
    color: 'white',
    marginBottom: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 20,
    color: 'white',
  },
  button: {
    padding: 15,
    backgroundColor: '#CEC269',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
