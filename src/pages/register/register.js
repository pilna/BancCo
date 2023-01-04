import { Text, TextInput, View } from 'react-native'

import { ButtonFactory } from '../../components/button/button.factory';
import React from 'react'
import { routes } from "../../router/routes"
import { styles } from './register.style';
import { useRegister } from './register.logic';

const RegisterPage = ({ navigation }) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    onRegister
  } = useRegister();
  const buttonFactory = new ButtonFactory();
  
  return (
    <View style={styles.registerPageContainer}>
      <View style={styles.topContentContainer}>
        <Text style={{
          ...styles.colorizedText,
          ...styles.registerTitle
        }}>
          Banc.co
        </Text>

        <Text style={{
          ...styles.colorizedText,
          ...styles.registerTitle
        }}>
          Register
        </Text>

        <View style={styles.registerInputContainer}>
          <Text style={styles.registerInputLabel}>
            E-mail or username
          </Text>

          <TextInput 
            style={styles.registerInputBox}
            onChangeText={setEmail}
            value={email}
            placeholder="Your E-mail or username"
          />
        </View>

        <View style={styles.registerInputContainer}>
          <Text style={styles.registerInputLabel}>
            Password
          </Text>
          
          <TextInput
            style={styles.registerInputBox}
            onChangeText={setPassword}
            value={password}
            placeholder="Your Password"
            secureTextEntry
          />
        </View>
      </View>
      
      {buttonFactory.createSubmitButton(
        'Register',
        () => {
          onRegister();
          navigation.navigate(routes.login);
        }
      )}
    </View>
  )
}

export default RegisterPage