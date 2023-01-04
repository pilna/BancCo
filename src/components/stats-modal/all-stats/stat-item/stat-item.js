import { Text, View } from 'react-native'

import React from 'react'
import { styles } from './stat-item.style'

const StatItem = ({label, value}) => {
  return (
    <View style={styles.statItemContainer}>
      <Text style={styles.statItemLabel}>
        {label}
      </Text>
      <Text style={styles.statItemValue}>
        {value}
      </Text>
    </View>
  )
}

export default StatItem