import { useEffect, useState } from 'react';

import { usePav } from './usePav';
import { useVoiries } from './useVoiries';

export const useDefective = () => {
  const { pav } = usePav();
  const { voiries } = useVoiries();
  const [defectivesItem, setDefectivesItem] = useState([]);

  const fetchDefectives = () => {
    const defectives_pav = pav.filter(item => item.defective === true);
    const defectives_voiries = voiries.filter(item => item.defective === true);
    setDefectivesItem([
      ...defectives_pav, 
      ...defectives_voiries
    ]);
  }

  const updateDefectiveItem= (itemId) => {
    const item = defectivesItem.find(item => item.id === itemId);
    item.defective = false;
    setDefectivesItem(defectivesItem.filter(item => item.defective === true));
  }

  useEffect(() => {
    fetchDefectives();
  }, [pav, voiries]);

  return {
    defectivesItem,
    updateDefectiveItem
  }
}