import {Image, Text, TextInput, View} from 'react-native'

import { BanccoService } from '../../services/bancco.service';
import { ButtonFactory } from '../../components/button/button.factory';
import React from 'react'
import logo from '../../../assets/bancco.png'
import { routes } from '../../router/routes';
import { styles } from './login.style';
import { useLogin } from './login.logic';

const LoginPage = ({ navigation, setCredentials }) => {
  const { 
    email, 
    password, 
    error,
    setError,
    setEmail, 
    setPassword, 
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
          {error && (
            <Text style={{ color: "red" }}>Invalid credentials</Text>
          )}
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

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "40%", marginRight: 10 }}>
          {buttonFactory.createSubmitButton(
            "Anonymous",
            () => {
              navigation.navigate(routes.explore);
            },
            "#000"
          )}
        </View>

        <View style={{ width: "40%", marginLeft: 10 }}>
          {buttonFactory.createSubmitButton(
            "Sign In",
            () => {
              BanccoService.isValidCredentials(
                email,
                password
              ).then(() => {
                setCredentials(email, password)
                navigation.navigate(routes.explore);
              })
              .catch(() => {
                setError(true)
                setEmail("")
                setPassword("")
              })
            }
          )}
        </View>
      </View>
    </View>
  )
}

export default LoginPage