import MapView, { Marker } from 'react-native-maps'

import { MobileLayout } from '../../layout'
import { PavModal } from '../../components';
import React from 'react'
import { usePav } from '../../hooks/usePav';
import { useSelectedPav } from '../../hooks/useSelectedPav';

const ExplorePage = ({ navigation }) => {
  const { loading, error, pav } = usePav();
  const { selectedPav, selectPav } = useSelectedPav();

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
      >
        {pav && pav.map((item, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: item.coordinate.lattitude,
              longitude: item.coordinate.longitude,
            }}
            pinColor="purple"
            onPress={() => {
              selectPav(item);
            }}
          />
        ))}
      </MapView>

      {selectedPav && (
        <PavModal 
          item={selectedPav} 
          onClose={() => selectPav(null)}
        />
      )}
    </MobileLayout>
  )
}

export default ExplorePage