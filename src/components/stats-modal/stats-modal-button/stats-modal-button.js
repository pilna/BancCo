import { Text, View } from 'react-native'

import React from 'react'
import { styles } from './stats-modal-button.style'

const StatsModalButton = ({ 
  label,
  onClick,
  isToggle
}) => {
  return (
    <View 
      style={styles.StatsModalButtonContainer}
      onTouchEnd={onClick}
    >
      <Text style={styles.StatsModalText}>
        {label}
      </Text>
      <View style={isToggle && styles.StatsModalUnderline} />
    </View>
  )
}

export default StatsModalButton