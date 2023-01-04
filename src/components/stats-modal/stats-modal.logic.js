import { statsModalConfig } from './stats-modal.config';
import { useState } from 'react';

export const useStatsModal = () => {
  const [currentSectionToggle, setCurrentSectionToggle] = useState(statsModalConfig.items[0]);

  const setNewSectionToggle = (newSection) => {
    setCurrentSectionToggle(newSection);
  }

  return [currentSectionToggle, setNewSectionToggle];
}