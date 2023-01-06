import MapView, { Marker } from 'react-native-maps'

import { MobileLayout } from '../../layout'
import { PavModal } from '../../components';
import React, {useEffect, useState} from 'react'
import { usePav } from '../../hooks/usePav';
import { useSelectedPav } from '../../hooks/useSelectedPav';
import MapViewDirections from "react-native-maps-directions";
import * as Location from 'expo-location';


const ExplorePage = ({ navigation }) => {
  const { loading, error, pav } = usePav();
  const { selectedPav, selectPav } = useSelectedPav();


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
    console.log("text", text)


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

          <Marker coordinate={origin} />
          <Marker coordinate={destination} />
          <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="hotpink"
          />

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