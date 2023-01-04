import React from 'react'
import { StatItem } from './stat-item'
import { StatRow } from './stat-row'
import { View } from 'react-native'

const AllStats = () => {
  return (
    <View>
      <View>
        <StatItem
          label="Distance"
          value="4.62 km"
        />
        
        <StatRow 
          items={[
            {
              label: "Average Speed",
              value: "12,6 km/h"
            },
            {
              label: "Current Speed",
              value: "4,62 km/h"
            },
            {
              label: "Average Pace",
              value: "4:52 min/km"
            }
          ]}
        />

        <StatRow 
          items={[
            {
              label: "Moving Time",
              value: "02:00:00"
            },
            {
              label: "Recording Time",
              value: "02:30:00"
            },
            {
              label: "Total Time",
              value: "03:00:00"
            }
          ]}
        />
        
        <StatRow 
          items={[
            {
              label: "Elevation Loss",
              value: "122 m"
            },
            {
              label: "Current Elevation",
              value: "50 m"
            },
            {
              label: "Elevation Gain",
              value: "64 m"
            }
          ]}
        />
      </View>
    </View>
  )
}

export default AllStats