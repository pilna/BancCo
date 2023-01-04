import { Image, View } from 'react-native'

import { AllStats } from './all-stats';
import React from 'react'
import StatsModalButton from './stats-modal-button/stats-modal-button';
import closeMenuIcon from '../../../assets/close-menu.svg'
import openMenuIcon from '../../../assets/open-menu.svg'
import { statsModalConfig } from './stats-modal.config';
import { styles } from './stats-modal.style';
import { useStatsModal } from './stats-modal.logic';
import { useToggle } from '../../hooks/useToggle';

const StatsModal = () => {
  const [isOpen, toggleOpen] = useToggle();
  const [currentSectionToggle, setCurrentSectionToggle] = useStatsModal();
  
  return (
    <View 
      style={styles.statsModalContainer} 
    >
      <View 
        style={styles.StatsModalContentContainer} 
        onTouchEnd={toggleOpen}
      >
        <Image 
          style={styles.statsModalArrowIcon}
          source={isOpen ? closeMenuIcon : openMenuIcon} 
        />
      </View>
      {currentSectionToggle.component}

      
      <View style={styles.navigationContainer}>
        {statsModalConfig.items.map((items, index) => (
          <StatsModalButton 
            key={index}
            label={items.name}
            isToggle={currentSectionToggle.name === items.name}
            onClick={() => setCurrentSectionToggle(items)}
          />
        ))}
      </View>
    </View>
  )
}

export default StatsModal