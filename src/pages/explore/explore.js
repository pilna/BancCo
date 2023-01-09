import * as Location from 'expo-location';

import {DegradationModal, FilterModal, LegendeModal, PavModal} from '../../components';
import { Image, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import React, {useEffect, useMemo, useState} from 'react'

import { ButtonFactory } from '../../components/button/button.factory';
import CloseIcon from '../../../assets/close.svg'
import MapViewDirections from "react-native-maps-directions";
import { MobileLayout } from '../../layout'
import defectiveContainerIcon from '../../../assets/defective-container.png'
import redCross from '../../../assets/defective.png'
import { useFiler } from '../../hooks/useFilter';
import { usePav } from '../../hooks/usePav';
import { usePavStatus } from '../../hooks/usePavStatus';
import { usePinIcon } from '../../hooks/usePinIcon';
import { useSelectedPav } from '../../hooks/useSelectedPav';
import { useToggle } from '../../hooks/useToggle';
import { useVoiries } from '../../hooks/useVoiries';

const ExplorePage = ({ navigation, setCredentials, credentials }) => {
  const buttonFactory = new ButtonFactory();
  const { pav } = usePav();
  const { voiries } = useVoiries();
  const { selectedPav, selectPav } = useSelectedPav();

  const { getPinIcon } = usePinIcon();
  const { pavIsOpen } = usePavStatus();
  const { filter, filterPav, filterVoiries, setFilter, filterValues } = useFiler();
  const [showFilterModal, setShowFilterModal] = useToggle();
  const [showLegendeModal, setShowLegendeModal] = useToggle();

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

  const origin = {
      latitude: location && location.coords.latitude,
      longitude: location && location.coords.longitude,
  };

  console.log(origin)
  
  const [destination, setDestination] = useState(null)
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCjVedUfMGG38F9ToBDlxXa-Ze5ctrwLbA';

  const pavMarkers = useMemo(() => (
    <>
      {pav && filterPav(pav).map((item, index) => (
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
            source={ pavIsOpen(item) ? (
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
  ), [pav, selectPav, getPinIcon, pavIsOpen, filterPav]);

  const voiriesMarkers = useMemo(() => (
    <>
      {voiries && filterVoiries(voiries).map((item, index) => (
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
            source={!item.defective ? (
              getPinIcon(item.description)
              ) : (
                redCross
              )}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </Marker>
      ))}
    </>
  ), [voiries, getPinIcon, filterVoiries]);

  const getDistance = (origin, target) => {
    return Math.sqrt((origin.latitude - target.lattitude) ** 2 + (origin.longitude - target.longitude) ** 2);
  }

  const getNearestBanc = () => {
    if(origin.latitude === null || origin.longitude === null) {
      return null;
    }

    const banc = voiries.filter(item => item.description === "Banc public" && !item.defective);

    return banc.reduce((prev, curr) => {
      return getDistance(origin, prev) < getDistance(origin, curr) ? prev : curr;
    }) 
  }

  

    return (
    <MobileLayout credentials={credentials} navigation={navigation}>
      {!showFilterModal && !selectedPav && !showLegendeModal && (
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
      {!showFilterModal && !selectedPav && !showLegendeModal && (
          <View style={{
            position: 'absolute',
            bottom: 70,
            right: 10,
            zIndex: 2
          }}>
            {buttonFactory.createCompassButton(
                () => setShowLegendeModal(true)
            )}
          </View>
      )}

      {!showFilterModal && !selectedPav && !showLegendeModal && (
        <View style={{
            position: 'absolute',
            bottom: 130,
            right: 10,
            zIndex: 2
          }}>
          {buttonFactory.createBenchButton(
            () => {
              const banc = getNearestBanc();
              setDestination({
                latitude: banc.coordinate.lattitude,
                longitude: banc.coordinate.longitude
              })
            }
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
        {pavMarkers}
        {destination && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            strokeWidth={3}
            strokeColor="hotpink"
            mode="WALKING"
            apikey={GOOGLE_MAPS_APIKEY}
          />

        )}
      </MapView>


      {showLegendeModal && (
      <LegendeModal
          filterValues={filterValues}
        onClose={() => setShowLegendeModal(false)}/>)
      }
      {destination && (
        <View style={{
          position: 'absolute',
          top: 60,
          right: 10,
          zIndex: 2,
          backgroundColor: "#fff"
        }}
          onTouchEnd={
            () => setDestination(null)
          }
        >
          <CloseIcon width={24} height={24} />
        </View>
      )}

      {selectedPav && (
        <PavModal
          item={selectedPav} 
          onSetDestination={setDestination}
          onClose={() => selectPav(null)}
        />
      )}

      
      {showFilterModal && (
        <FilterModal
          currentFilter={filter}
          filterValues={filterValues}
          onApplyFilter={(filters) => setFilter(filters)}
          onClose={() => setShowFilterModal(false)}
        />
      )}
    </MobileLayout>
  )
}

export default ExplorePage