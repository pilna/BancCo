import { Image, Text, View } from 'react-native';

import { ButtonFactory } from '../button/button.factory';
import CircleStatus from '../../../assets/circle-status.svg'
import Close from '../../../assets/close.svg'
import {DegradationModal} from "../degradation-modal";
import React from 'react'
import { styles } from './pav-modal.style';
import {useDegradation} from "../../hooks/useDegradation";
import { usePavStatus } from '../../hooks/usePavStatus';
import {usePinIcon} from "../../hooks/usePinIcon";

const PavModal = ({ item, onClose, onSetDestination }) => {
  const buttonFactory = new ButtonFactory();
  const { pavIsOpen } = usePavStatus();
  const itemIsOpen = pavIsOpen(item);
  const { selectedDegradation, selectDegradation } = useDegradation();
  console.log('item', item);
  const { getPinIcon } = usePinIcon();
  return (
    <View style={styles.modalContainer}>
      {!selectedDegradation && (
        <View 
          style={styles.closeContainer}
          onTouchEnd={onClose}
        >
          <Close width={20} height={20} fill="#000" />
        </View>
      )
      }
      <View style={styles.pavModelContainer}>
        <Text style={styles.pavModalTitle}>
          {item.garbageType ? `point d'apport ${item.garbageType}` : item.description}
        </Text>
        
        <View style={styles.pavModalInformationContainer}>
          <Image
              source={
                getPinIcon(item.description)}
              style={{
                width: 100,
                height: 100,
              }}/>
          
          
            <View style={styles.pavModalRightSideInformation}>
              {item.openHours && (
                <View style={styles.pavModalRow}>
                  <View>
                    <Text>{item.defective ? "Défectueux" : item.openHours}</Text>
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
              )}

            <View style={styles.pavModalRow} >
              <View style={{ width: "45%" }}>
                {!item.defective ? (
                    buttonFactory.createTextButton(
                        "Dégradation",
                        () => selectDegradation(item),
                        "red"
                    )
                ) : (
                    <View style={{ display: "none" }} />
                )}
              </View>

              <View style={{ width: "45%" }}>
                {buttonFactory.createTextButton(
                  "Itinéraire",
                  () => {
                    onSetDestination({
                      latitude: item.coordinate.lattitude,
                      longitude: item.coordinate.longitude
                    })
                    onClose()
                  },
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