import MobileLayout from '../../layout/mobile/mobile.layout';
import React, {useEffect, useState} from 'react'
import {Alert, Button, Image, ImageBackground, Text, TextInput, View} from 'react-native';
import {styles} from "../profile/profile.style";
import {ButtonFactory} from "../../components";
import {useSugestion} from "./promoted-trail.logic";
import * as Location from 'expo-location';

const PromotedTrailPage = ({ navigation }) => {

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
        types,
        setTypes,
        position,
        setPosition,
        onSuggestion
    } = useSugestion();
    const buttonFactory = new ButtonFactory();

  return (

    <MobileLayout navigation={navigation}>
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
                                onPress={() => setPosition(location.coords)}
                                value={position}
                                color={'#000000'}
                                title="Actual position"
                            />
                            <Button
                                onPress={() => Alert.alert('Not link')}
                                color={'#000000'}
                                title="Chose position"
                            />
                        </View>

                        <Text style={styles.profileInputLabel}>Type  </Text>
                        <View style={styles.back}>

                            <TextInput
                                style={styles.loginInputBox}
                                onChangeText={setTypes}
                                value={types}
                                placeholder="Détail"
                            />

                        </View>

                        <Text style={styles.profileInputLabel}>Pourquoi </Text>
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
                            console.log("Valider");
                            onSuggestion();

                        }
                    )}

                </View>
            </ImageBackground>
        </View>
    </MobileLayout>
  )
}

export default PromotedTrailPage