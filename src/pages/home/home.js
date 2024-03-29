import {Image, Text, View} from 'react-native'

import React from 'react'
import logo from "../../../assets/bancco.png";
import { routes } from '../../router/routes'
import { styles } from './home.style'

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.homePageContainer}>
      <Image source={logo} style={{width: 200, height: 50 }}/>
      
      <Text style={styles.descriptionText}>
        We are millions of members exploring and
        sharing great outdoor trails of orleans
      </Text>

      <View>
        <Text style={styles.loginText}>
          Already a member? { }
          <Text 
            style={styles.colorized}
            onPress={() => navigation.navigate(routes.login)}
          >
            Log in
          </Text>
        </Text>

        <View style={styles.termOfUseContainer}>
          <Text 
            style={styles.createAccountText}
            onPress={() => navigation.navigate(routes.register)}
          >
            Create Account
          </Text>

          <Text style={styles.termOfUseText}>
            By continuing, you agree to Wkiloc’s { }
            <Text style={styles.colorized}>
              Terms of us { }
            </Text> 
            and { }
            <Text style={styles.colorized}>
              Privacy policy
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default HomePage