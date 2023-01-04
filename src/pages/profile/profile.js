import { MobileLayout } from '../../layout'
import React from 'react'
import {Image, ImageBackground, Text, Button, View, Alert} from 'react-native'
import {styles} from './profile.style'
import {ButtonFactory} from "../../components";

const buttonFactory = new ButtonFactory();

const ProfilePage = ({ navigation }) => {
  return (
      <MobileLayout navigation={navigation}>
      <View style={styles.profilePageContainer}>
          <ImageBackground source={require ('../../../assets/background.png')} style={styles.backgroundImage} >

              <View style={styles.topContentContainer}>

                  <Text style={{
                  ...styles.colorizedText,
                  ...styles.profileTitle

                  }}>
                    Profile
                  </Text>

                  <Image source={require ('../../../assets/favicon.png')} style={styles.profileImage}/>


                      <View style={ styles.sugdeg}>
                          <View style={styles.sugdegflex}>
                              <Text>0</Text>
                          </View>
                          <View style={styles.sugdegflex}>
                              <Text>0</Text>
                          </View>
                      </View>
                      <View style={ styles.sugdeg}>
                          <View style={styles.sugdegflex}>
                              <Text>Dégradation</Text>
                          </View>
                          <View style={styles.sugdegflex}>
                              <Text>Suggestion</Text>
                          </View>
                      </View>


                  <View style={styles.profileInputContainer}>
                      <Text style={styles.profileInputLabel}>Statistique  </Text>
                  <View style={styles.back}>

                      <Button
                          onPress={() => Alert.alert('Not link')}
                          color={'#000000'}
                          title="Your Trails"
                      />
                      <Button
                          onPress={() => Alert.alert('Not link')}
                          color={'#000000'}
                          title="Saved trails"
                      />
                  </View>
                      <Text style={styles.profileInputLabel}>Lists </Text>
                      <View style={styles.back}>

                          <Button
                              onPress={() => Alert.alert('Not link')}
                              color={'#000000'}
                              title="Favorites"
                          />
                          <Button
                              onPress={() => Alert.alert('Not link')}
                              color={'#000000'}
                              title="Antalya"
                          />
                          <Button
                              onPress={() => Alert.alert('Not link')}
                              color={'#000000'}
                              title="Lycan Way"
                          />

                      </View>
                  </View>

              </View>
          </ImageBackground>
      </View>
      </MobileLayout>


  )
}


/*


const LoginPage = ({ navigation }) => {

  return (
    <View style={styles.loginPageContainer}>
      <View style={styles.topContentContainer}>
        <Text style={{
          ...styles.colorizedText,
          ...styles.loginTitle
        }}>
          Banc.co
        </Text>

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

export default LoginPage*/
export default ProfilePage