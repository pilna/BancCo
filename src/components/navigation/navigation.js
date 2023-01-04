import { NavigationButton } from './navigation-button';
import React from 'react'
import { View } from 'react-native';
import { navigationConfig } from './navigation.config';
import { styles } from './navigation.style';

const Navigation = ({ navigation }) => {
  return (
    <View style={styles.navigationContainer}>
      {navigationConfig.items.map((item, index) => {
        return (
          <NavigationButton 
            key={index} 
            item={item}
            navigation={navigation}
          />
        )
      })}
    </View>
  )
}

export default Navigation;