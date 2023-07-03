import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return fontLoaded ? (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('./assets/bhlogowhite.png')} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="gray"
                style={styles.passwordIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
          <Text style={[styles.buttonText, { fontSize: 18 }]}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>Create an account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    bottom: 400,
    right: 150,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Gordita-Bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  inputContainer: {
    marginBottom: 10,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
  },
  label: {
    paddingHorizontal: 10,
    paddingTop: 8,
    fontFamily: 'Gordita-Regular',
    color: 'gray',
  },
  input: {
    paddingHorizontal: 10,
    paddingBottom: 8,
    fontFamily: 'Gordita-Bold',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 8,
    fontFamily: 'Gordita-Bold',
  },
  passwordIcon: {
    padding: 10,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Gordita-Bold',
  },
  loginButton: {
    backgroundColor: '#6658D3',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Gordita-Regular',
  },
  bottomSection: {
    alignItems: 'center',
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
  createAccountContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  createAccountText: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Gordita-Regular',
  },
});

export default LoginScreen;
