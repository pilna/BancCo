import React, { useEffect, useState } from 'react'

import MapView from 'react-native-maps'
// import DataService from '../../services/data-service'
import { MobileLayout } from '../../layout'
import { Text } from 'react-native'

const ExplorePage = ({ navigation }) => {

  /** 
  const [suggestions, setSuggestions] = useState([])
  const [voiries, setVoiries] = useState([])
  const [pav, setPav] = useState([])

  useEffect(() => {
    DataService.getFeatureAsList(DataService.features.suggestions)
      .then((data) => {
        setSuggestions(data)
      });
    DataService.getFeatureAsList(DataService.features.voiries)
      .then((data) => {
        setVoiries(data)
      });
    DataService.getFeatureAsList(DataService.features.pav)
      .then((data) => {
        setPav(data)
      });
  }, [])
  
  console.log("suggestions", suggestions)
  console.log("voiries", voiries)
  console.log("pav", pav)
  */

  return (
    <MobileLayout navigation={navigation}>
      <MapView 
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </MobileLayout>
  )
}

export default ExplorePage