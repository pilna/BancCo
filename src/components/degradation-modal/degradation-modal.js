import { Image, Text, TextInput, View } from "react-native";

import { ButtonFactory } from "../button";
import Close from "../../../assets/close.svg";
import React from "react";
import { styles } from './degradation-modal.style';
import { useDegradation } from "./degradation.logic";
import {usePinIcon} from "../../hooks/usePinIcon";

const DegradationModal = ({ item, onClose }) => {
    const buttonFactory = new ButtonFactory();
    const { getPinIcon } = usePinIcon();

    const {
        NatureDegradation,
        setNatureDegradation,
        onDegradation
    } = useDegradation(item.id);

    return (
        <View style={styles.modalContainer}>
            <View
                style={styles.closeContainer}
                onTouchEnd={() => onClose()}
            >
                <Close width={20} height={20} fill="#000" />
            </View>
            <View style={styles.degModelContainer}>
                <Text style={styles.degModalTitle}>Dégradation {item.garbageType}</Text>

                <Image
                    source={
                        getPinIcon(item.description)}
                    style={{
                        width: 100,
                        height: 100,
                    }}/>
                <Text style={styles.degInputLabel}>
                    Localisation
                </Text>

                <Text style={styles.degModalStreet}>{ item.streetName }</Text>
                <Text style={styles.degInputLabel}>
                    Nature des dégradations
                </Text>
                <TextInput
                    style={styles.degInputBox}
                    onChangeText={setNatureDegradation}
                    value={NatureDegradation}
                    placeholder="Détails"
                />

            </View>
            {buttonFactory.createSubmitButton(
                "Valider",
                () => {
                    onDegradation()
                    onClose();
                }
            )}
        </View>
    );
};


export default DegradationModal;