import { ButtonFactory } from '../../components/button'
import { MobileLayout } from '../../layout'
import React from 'react'
import StatsModal from '../../components/stats-modal/stats-modal'
import { Text } from 'react-native'

const RecordTrailPage = ({ navigation }) => {
  const buttonFactory = new ButtonFactory()
  
  return (
    <MobileLayout navigation={navigation}>
      <Text>Record Trail Page</Text>
      {buttonFactory.createGlobButton()}
      {buttonFactory.createCompassButton()}
      {buttonFactory.createPhotoButton()}
      {buttonFactory.createLiveTrackingButton()}
      {buttonFactory.createPauseTrackingButton()}
      <StatsModal />
    </MobileLayout>
  )
}

export default RecordTrailPage