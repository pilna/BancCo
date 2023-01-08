import React, { useState } from 'react'
import {FlatList, Image, Text, View} from 'react-native';

import Close from '../../../assets/close.svg'
import { styles } from './legende-modal.style';
import { useFiler } from '../../hooks/useFilter';
import { usePinIcon } from '../../hooks/usePinIcon';
import CheckBox from "expo-checkbox";
import defectiveContainerIcon from "../../../assets/defective-container.png";

const LegendeModal = ({filterValues, onClose}) => {

    const { getPinIcon } = usePinIcon();

    return (
        <View style={styles.modalContainer}>
            <View
                style={styles.closeContainer}
                onTouchEnd={onClose}
            >
                <Close width={20} height={20} fill="#000" />
            </View>
            <Text style={styles.legendeModalTitle}>Légende </Text>

            {filterValues.map((item, index) => (
                <View style={styles.legendeContainer} key={index}>
                    <Image
                        source={
                            getPinIcon(item)}
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                    <Text style={styles.legendeLabel}>{item}</Text>
                </View>
            ))}
        </View>
    )
}

export default LegendeModal