import { MobileLayout } from '../../layout'
import React from 'react'
import { Text } from 'react-native'

const ProfilePage = ({ navigation }) => {
  return (
    <MobileLayout navigation={navigation}>
      <Text>Profile Page</Text>
    </MobileLayout>
  )
}

export default ProfilePage