import { Navigation } from '../../components'
import React from 'react'
import { View } from 'react-native'
import { styles } from './mobile.style';

const MobileLayout = ({ navigation, children }) => {
  return (
    <View style={styles.mobileLayoutContainer}>
      <View style={styles.mobileLayoutContent}>
        {children}
      </View>
      <View style={styles.mobileLayoutNavigation}>
        <Navigation navigation={navigation} />
      </View>
    </View>
  )
}

export default MobileLayout