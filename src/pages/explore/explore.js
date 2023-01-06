import MapView from 'react-native-maps'
import { MobileLayout } from '../../layout'
import React from 'react'
import { useSuggestions } from '../../hooks/useSuggestions';

const ExplorePage = ({ navigation }) => {
  const { loading, error, suggestions } = useSuggestions();

  // console.log("suggestions", suggestions);

  return (
    <MobileLayout navigation={navigation}>
      <MapView 
        initialRegion={{
          latitude: 47.9027336,
          longitude: 1.9086066,
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