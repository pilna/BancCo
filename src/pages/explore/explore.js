import * as Location from 'expo-location';

import MapView, { Marker } from 'react-native-maps'
import React, {useEffect, useMemo, useState} from 'react'

import { Image } from 'react-native'
import MapViewDirections from "react-native-maps-directions";
import { MobileLayout } from '../../layout'
import { PavModal } from '../../components';
import defectiveContainerIcon from '../../../assets/defective-container.png'
import { usePav } from '../../hooks/usePav';
import { usePavStatus } from '../../hooks/usePavStatus';
import { usePinIcon } from '../../hooks/usePinIcon';
import { useSelectedPav } from '../../hooks/useSelectedPav';

const ExplorePage = ({ navigation }) => {
  const { loading, error, pav } = usePav();
  const { selectedPav, selectPav } = useSelectedPav();
  const { getPinIcon } = usePinIcon();
  const { pavIsOpen } = usePavStatus();
  const mapView = useMemo(() => (
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

        {/* <Marker coordinate={origin} />
        <Marker coordinate={destination} />
        <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
        /> */}

    </MapView>
  ), [pav])

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


    console.log("refresh")

    return (
    <MobileLayout navigation={navigation}>
      {mapView}

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