import MapView, { Marker } from 'react-native-maps'

import { Image } from 'react-native'
import MobileLayout from '../../layout/mobile/mobile.layout';
import React from 'react'
import ReparationModal from '../../components/reparation-modal/reparation-modal';
import defectiveIcon from '../../../assets/defective.png'
import suggestionIcon from '../../../assets/suggestion.png'
import { useDefective } from '../../hooks/useDefective';
import { usePav } from '../../hooks/usePav';
import { useSelectedPav } from '../../hooks/useSelectedPav';
import { useSuggestions } from '../../hooks/useSuggestions';

const AdminMapPage = ({ navigation }) => {
  const { suggestions } = useSuggestions();
  const { defectivesItem } = useDefective();
  const { selectPav, selectedPav } = useSelectedPav();

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
        showsUserLocation
        showsMyLocationButton
        showsCompass
        showsScale
        loadingEnabled
      >
        {suggestions.map(suggestion => (
          <Marker
            key={suggestion.id}
            coordinate={{
              latitude: suggestion.coordinate.lattitude,
              longitude: suggestion.coordinate.longitude,
            }}
            title={suggestion.description}
          >
            <Image
              source={suggestionIcon}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </Marker>
        ))}
        {defectivesItem.map((defective, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: defective.coordinate.lattitude,
              longitude: defective.coordinate.longitude,
            }}
            onPress={() => selectPav(defective)}
          >
            <Image
              source={defectiveIcon}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </Marker>
        ))}
      </MapView>

      {selectedPav && (
        <ReparationModal
          item={selectedPav}
          onClose={() => selectPav(null)}
        />
      )}
    </MobileLayout>
  )
}

export default AdminMapPage