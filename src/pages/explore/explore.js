import * as Location from 'expo-location';

import { FilterModal, PavModal } from '../../components';
import { Image, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import React, {useEffect, useMemo, useState} from 'react'

import { ButtonFactory } from '../../components/button/button.factory';
import MapViewDirections from "react-native-maps-directions";
import { MobileLayout } from '../../layout'
import defectiveContainerIcon from '../../../assets/defective-container.png'
import { useFiler } from '../../hooks/useFilter';
import { usePav } from '../../hooks/usePav';
import { usePavStatus } from '../../hooks/usePavStatus';
import { usePinIcon } from '../../hooks/usePinIcon';
import { useSelectedPav } from '../../hooks/useSelectedPav';
import { useToggle } from '../../hooks/useToggle';
import { useVoiries } from '../../hooks/useVoiries';

const ExplorePage = ({ navigation }) => {
  const buttonFactory = new ButtonFactory();
  const { pav } = usePav();
  const { voiries } = useVoiries();
  const { selectedPav, selectPav } = useSelectedPav();
  const { getPinIcon } = usePinIcon();
  const { pavIsOpen } = usePavStatus();
  const { filterValues } = useFiler();
  const [showFilterModal, setShowFilterModal] = useToggle(true);

  const pavMarkers = useMemo(() => (
    <>
      {pav && pav.map((item, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: item.coordinate.lattitude,
            longitude: item.coordinate.longitude,
          }}
          onPress={() => {
            selectPav(item);
          }}
        >
          <Image 
            source={ pavIsOpen(item) && !item.defective ? (
                getPinIcon(item.garbageType)
              ) : (
                defectiveContainerIcon
              )
            }
            style={{
              width: 20,
              height: 20,
            }}
          />
        </Marker>
      ))}
    </>
  ), [pav, selectPav, getPinIcon, pavIsOpen]);

  const voiriesMarkers = useMemo(() => (
    <>
      {voiries && voiries.map((item, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: item.coordinate.lattitude,
            longitude: item.coordinate.longitude,
          }}
          onPress={() => {
            console.log(item)
          }}
        >
          <Image
            source={!item.defective ? (
              getPinIcon(item.description)
              ) : (
                defectiveContainerIcon
              )}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </Marker>
      ))}
    </>
  ), [voiries]);

    /** 

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }


    let moche1;
    let moche2;
    if(location == null){
        moche1 = 45.521563;
        moche2 = 1.9086066;
    }else {
        moche1 = location.coords.latitude;
        moche2 = location.coords.longitude;
    }

    const origin = {
        latitude: moche1,
        longitude: moche2,
    };
    const destination = {
        latitude: 47.9027336,
        longitude: 1.9086066,};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBlhYWOi17iTeIgISCWBxtCTjdufXscqdM';
    */

    return (
    <MobileLayout navigation={navigation}>
      {!showFilterModal && (
        <View style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          zIndex: 2
        }}>
          {buttonFactory.createGlobButton(
            () => setShowFilterModal(true)
          )}
        </View>
      )}
      
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
        {voiriesMarkers}
      </MapView>

      {selectedPav && (
        <PavModal 
          item={selectedPav} 
          onClose={() => selectPav(null)}
        />
      )}
      {showFilterModal && (
        <FilterModal
          filterValues={filterValues}
          onApplyFilter={(filters) => console.log(filters)}
          onClose={() => setShowFilterModal(false)}
        />
      )}
    </MobileLayout>
  )
}

export default ExplorePage