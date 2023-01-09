import * as Location from 'expo-location';

import {Alert, Button, Image, ImageBackground, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react'

import {ButtonFactory} from "../../components";
import MobileLayout from '../../layout/mobile/mobile.layout';
import {styles} from "../profile/profile.style";
import {useSugestion} from "./promoted-trail.logic";

const PromotedTrailPage = ({ navigation, credentials }) => {
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

  const {
      pourquoi,
      setPourquoi,
      position,
      setPosition,
      onSuggestion,
      lattitude,
      longitude,
      setLattitude,
      setLongitude,
  } = useSugestion();
  const buttonFactory = new ButtonFactory();

  return (
    <MobileLayout credentials={credentials} navigation={navigation}>
      <View style={styles.profilePageContainer}>
        <ImageBackground source={require ('../../../assets/background.png')} style={styles.backgroundImage} >
          <View style={styles.topContentContainer}>
            <Text style={{
                ...styles.colorizedText,
                ...styles.profileTitle

            }}>
                Suggestion
            </Text>



            <View style={styles.profileInputContainer}>
              <Text style={styles.profileInputLabel}>Position  </Text>
              
              <View style={styles.back}>
                <Button
                    onPress={() => {
                        console.log(location)
                        console.log("latitude: " + location.coords.latitude)
                        console.log("longitude: " + location.coords.longitude)
                        setPosition(location.coords)
                        setLattitude(location.coords.latitude)
                        console.log("lattitude: " + lattitude)
                        setLongitude(location.coords.longitude)
                    }}
                    value={position}
                    color={'#000000'}
                    title="Actual position"
                />
              </View>
              
              <Text style={styles.profileInputLabel}>lattitude</Text>
              <View style={styles.back}>
                <TextInput
                  style={styles.loginInputBox}
                  placeholder="lattitude"
                  value={String(lattitude)}
                  onChangeText={setLattitude}
                />
              </View>

              <Text style={styles.profileInputLabel}>longitude</Text>
              <View style={styles.back}>
                <TextInput
                  style={styles.loginInputBox}
                  placeholder="longitude"
                  value={String(longitude)}
                  onChangeText={setLongitude}
                />
              </View>
              
              <Text style={styles.profileInputLabel}>Pourquoi</Text>
              
              <View style={styles.back}>
                <TextInput
                    style={styles.loginInputBox}
                    onChangeText={setPourquoi}
                    value={pourquoi}
                    placeholder="Détail"
                />
              </View>
            </View>
            
            {buttonFactory.createSubmitButton(
                "Valider",
                () => {
                    onSuggestion();
                    setLattitude("");
                    setLongitude("");
                    setPourquoi("");
                }
            )}
          </View>
        </ImageBackground>
      </View>
    </MobileLayout>
  )
}

export default PromotedTrailPage