import { Image, Text, View } from 'react-native'

import React from 'react'
import { styles } from './navigation-button.style'

const NavigationButton = ({ navigation, item }) => {
  console.log(item)
  return (
    <View 
      style={styles.buttonContainer}
      onTouchEnd={() => navigation.navigate(item.to)}
    >
      <Image 
        style={styles.buttonIcon}
        source={item.icon} 
      />
      <Text style={styles.buttonText}>
        {item.label}
      </Text>
    </View>
  )
}

export default NavigationButton