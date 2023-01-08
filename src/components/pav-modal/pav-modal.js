import { Image, Text, View } from 'react-native';

import { ButtonFactory } from '../button/button.factory';
import CircleStatus from '../../../assets/circle-status.svg'
import Close from '../../../assets/close.svg'
import React from 'react'
import { styles } from './pav-modal.style';
import { usePavStatus } from '../../hooks/usePavStatus';
import {useDegradation} from "../../hooks/useDegradation";
import {DegradationModal} from "../degradation-modal";

const PavModal = ({ item, onClose }) => {
  const buttonFactory = new ButtonFactory();
  const { pavIsOpen } = usePavStatus();
  const itemIsOpen = pavIsOpen(item);
  const { selectedDegradation, selectDegradation } = useDegradation();

  return (
    <View style={styles.modalContainer}>
      <View 
        style={styles.closeContainer}
        onTouchEnd={onClose}
      >
        <Close width={20} height={20} fill="#000" />
      </View>
      <View style={styles.pavModelContainer}>
        <Text style={styles.pavModalTitle}>Point d'apport {item.garbageType}</Text>
        
        <View style={styles.pavModalInformationContainer}>
          <Image style={{ 
            backgroundColor: "red",
            width: 100,
            height: 100,
            borderRadius: 10,
          }} />
          
          <View style={styles.pavModalRightSideInformation}>
            <View style={styles.pavModalRow}>
              <View>
                <Text>Distance</Text>
                <Text>30 m</Text>
              </View>

              <View style={styles.pavModalOpenStatusContainer}>
                <Text style={{
                  ...styles.pavModalTextStatus,
                  color: itemIsOpen ? "green" : "red"
                }}>
                  {itemIsOpen ? "Ouvert" : "Fermé"}
                </Text>
                <CircleStatus 
                  width={20} 
                  height={20} 
                  fill={ itemIsOpen ? "green" : "red"} 
                />
              </View>
            </View>

            <View style={styles.pavModalRow}>
              <View style={{ width: "45%" }}>
                {buttonFactory.createTextButton(
                  "Dégradation",
                  () => selectDegradation(item),
                  "red"
                )}
              </View>

              <View style={{ width: "45%" }}>
                {buttonFactory.createTextButton(
                  "Itinéraire",
                  () => console.log("Itinéraire"),
                  "blue"
                )}
              </View>

            </View>
          </View>
        </View>

        <Text style={styles.pavModalStreet}>{ item.streetName }</Text>
      </View>
      {selectedDegradation && (
          <DegradationModal
              item={selectedDegradation}
              onClose={() => selectDegradation(null)}
          />
      )}
    </View>

  )
}

export default PavModal