import {Image, Text, TextInput, View} from 'react-native'

import { ButtonFactory } from '../../components/button/button.factory';
import React from 'react'
import { routes } from '../../router/routes';
import { styles } from './login.style';
import { useLogin } from './login.logic';
import logo from '../../../assets/bancco.png'

const LoginPage = ({ navigation }) => {
  const { 
    email, 
    password, 
    setEmail, 
    setPassword, 
    onLogin 
  } = useLogin();
  const buttonFactory = new ButtonFactory();
  
  return (
    <View style={styles.loginPageContainer}>
      <View style={styles.topContentContainer}>
        <Image source={logo} style={{width: 200, height: 50 }}/>
        
        <Text style={{
          ...styles.colorizedText,
          ...styles.loginTitle
        }}>
          Log In
        </Text>
        
        <View style={styles.loginInputContainer}>
          <Text style={styles.loginInputLabel}>
            E-mail or username
          </Text>
          
          <TextInput 
            onChangeText={setEmail}
            style={styles.loginInputBox} 
            value={email}
            placeholder="Your E-mail or username"
          />
        </View>

        <View style={styles.loginInputContainer}>
          <Text style={styles.loginInputLabel}>
            Password
          </Text>
          
          <TextInput 
            style={styles.loginInputBox} 
            onChangeText={setPassword}
            value={password}
            placeholder="Your Password"
            secureTextEntry
          />
        </View>
      </View>

      {buttonFactory.createSubmitButton(
        "Sign In",
        () => {
          onLogin();
          navigation.navigate(routes.explore);
        }
      )}
    </View>
  )
}

export default LoginPage