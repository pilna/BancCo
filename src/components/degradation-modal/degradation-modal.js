import React, { useState } from "react";
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput} from "react-native";
import Close from "../../../assets/close.svg";
import {ButtonFactory} from "../button";
import { styles } from './degradation-modal.style';
import { useDegradation } from "./degradation.logic";
import {routes} from "../../router";
const DegradationModal = ( item, onClose) => {
    const {
        Degradation,
        NatureDegradation,
        setDegradation,
        setNatureDegradation,
        onDegradation
        //manque des infos
    } = useDegradation();

    const buttonFactory = new ButtonFactory();

    return (
        <View style={styles.modalContainer}>
            <View
                style={styles.closeContainer}
                onTouchEnd={onClose}
            >
                <Close width={20} height={20} fill="#000" />
            </View>
            <View style={styles.pavModelContainer}>
                <Text style={styles.pavModalTitle}>Dégradation {item.garbageType}</Text>

                <Image style={{
                    backgroundColor: "red",
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                }} />
                <Text style={styles.loginInputLabel}>
                    Localisation
                </Text>

                <Text style={styles.pavModalStreet}>{ item.streetName }</Text>
                <Text style={styles.loginInputLabel}>
                    Nature des dégradations
                </Text>
                <TextInput
                    style={styles.degInputBox}
                    onChangeText={setNatureDegradation}
                    value={NatureDegradation}
                    placeholder="Détails"
                />
                <Text style={styles.loginInputLabel}>
                    Mobilier touché
                </Text>
                <TextInput
                    style={styles.degInputBox}
                    onChangeText={setDegradation}
                    value={Degradation}
                    placeholder="Détails"
                />

            </View>
            {buttonFactory.createSubmitButton(
                "Valider",
                () => {
                    onDegradation();
                }
            )}
        </View>
    );
};


export default DegradationModal;