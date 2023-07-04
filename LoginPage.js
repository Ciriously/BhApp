import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const LoginPage = () => {
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
      <Image source={require('./assets/bhlogowhite.png')} style={styles.logo} />

      <View style={styles.topSection}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email address</Text>
          <TextInput
            style={[styles.input, styles.transparentOutline, styles.emailInput]}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={[styles.passwordInputContainer, styles.transparentOutline]}>
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

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
          <Text style={[styles.buttonText, { fontSize: 18 }]}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <View style={styles.signupLine} />
          <Text style={styles.signupText}>or signup now</Text>
          <View style={styles.signupLine} />
        </View>

        <TouchableOpacity style={styles.createAccountContainer}>
          <Text style={[styles.createAccountText, { fontSize: 18 }]}>Create an account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomSection}>
        {/* Bottom section content */}
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontFamily: 'Gordita-Bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    paddingHorizontal: 0,
    paddingTop: 8,
    fontFamily: 'Gordita-Bold',
    color: 'gray',
    marginBottom: 5,
  },
  input: {
    paddingHorizontal: 10,
    paddingBottom: 8,
    fontFamily: 'Gordita-Bold',
    marginBottom: 10,
  },
  transparentOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  emailInput: {
    height: 50,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 8,
    fontFamily: 'Gordita-Bold',
    backgroundColor: 'transparent',
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
    fontFamily: 'Gordita-Bold',
    bottom: 10,
  },
  bottomSection: {
    alignItems: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signupLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  signupText: {
    fontSize: 14,
    marginHorizontal: 10,
    fontFamily: 'Gordita-Bold',
    color: 'gray',
  },
  createAccountContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Gordita-Regular',
  },
});

export default LoginPage;
