import React from 'react'
import { StatItem } from '../stat-item'
import { View } from 'react-native'
import { styles } from './stat-row.style'

const StatRow = ({ items }) => {
  return (
    <View style={styles.statRowContainer}>
      {items.map((item, index) => (
        <StatItem
          key={index}
          label={item.label}
          value={item.value}
        />
      ))}
    </View>
  )
}

export default StatRow