import React, { useState } from "react";
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image, TextInput} from "react-native";
import Close from "../../../assets/close.svg";
import {ButtonFactory} from "../button";
import { styles } from './degradation-modal.style';
import { useDegradation } from "./degradation.logic";
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
    console.log("item", item);
    console.log("item", item.streetName);
    console.log("item", item.item.id);


    return (
        <View style={styles.modalContainer}>
            <View
                style={styles.closeContainer}
                onTouchEnd={onClose}
            >
                <Close width={20} height={20} fill="#000" />
            </View>
            <View style={styles.degModelContainer}>
                <Text style={styles.degModalTitle}>Dégradation {item.item.garbageType}</Text>

                <Image style={{
                    backgroundColor: "red",
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                }} />
                <Text style={styles.degInputLabel}>
                    Localisation
                </Text>

                <Text style={styles.degModalStreet}>{ item.item.streetName }</Text>
                <Text style={styles.degInputLabel}>
                    Nature des dégradations
                </Text>
                <TextInput
                    style={styles.degInputBox}
                    onChangeText={setNatureDegradation}
                    value={NatureDegradation}
                    placeholder="Détails"
                />
                <Text style={styles.degInputLabel}>
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