import { Text, View } from 'react-native';

import { BanccoService } from '../../services/bancco.service';
import { ButtonFactory } from '../button/button.factory';
import Close from '../../../assets/close.svg'
import React from 'react'
import { styles } from './reparation-modal.style';

const ReparationModal = ({ item, onReparation, onClose }) => {
  const buttonFactory = new ButtonFactory();
  
  return (
    <View style={styles.modalContainer}>
      <View 
        style={styles.closeContainer}
        onTouchEnd={onClose}
      >
        <Close width={20} height={20} fill="#000" />
      </View>
        
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.garbageType ? `point d'apport ${item.garbageType}` : item.description}</Text>
          <Text style={styles.title}>{item.defectiveDescription}</Text>
        {buttonFactory.createSubmitButton(
          "Réparer", 
          () => {
            onReparation(item.id);
            BanccoService.postReperation(item.id);
            onClose();
          }
        )}
      </View>
    </View>
  )
}

export default ReparationModal