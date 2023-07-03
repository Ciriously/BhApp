import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Gordita-Regular': require('./assets/fonts/Gordita-Regular.ttf'),
        'Gordita-Bold': require('./assets/fonts/Gordita-Bold.ttf'),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  const handleLogin = () => {
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return fontLoaded ? (
    <View style={styles.container}>
      <Image source={require('./assets/bhlogowhite.png')} style={styles.logo} />

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.createAccountLink}>Create an account</Text>
      </TouchableOpacity>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Gordita-Bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: 'Gordita-Regular',
  },
  button: {
    width: '80%',
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Gordita-Bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  signupText: {
    fontSize: 14,
    marginRight: 5,
    fontFamily: 'Gordita-Regular',
  },
  signupLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'blue',
    fontFamily: 'Gordita-Bold',
  },
  createAccountLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'blue',
    fontFamily: 'Gordita-Bold',
  },
});

export default LoginScreen;
