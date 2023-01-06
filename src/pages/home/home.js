import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { BanccoService } from '../../services/bancco.service'
import axios from 'axios'
import { routes } from '../../router/routes'
import { styles } from './home.style'

const HomePage = ({ navigation }) => {

  useEffect(() => {
    BanccoService.getSuggestions()
    BanccoService.getVoiries()
    BanccoService.getPav()
  }, [])

  return (
    <View style={styles.homePageContainer}>
      <Text style={{
        ...styles.colorized,
        ...styles.title
      }}>
        Banc.co
      </Text>
      
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