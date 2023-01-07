import React, { useState } from 'react'
import { Text, View } from 'react-native';

import { ButtonFactory } from '../button/button.factory';
import CheckBox from "expo-checkbox";
import Close from '../../../assets/close.svg'
import { styles } from './filter-modal.style';

const FilterModal = ({ filterValues, onApplyFilter, onClose }) => {
  const buttonFactory = new ButtonFactory();
  const [filters, setFilter] = useState([]);

  const updateFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilter(filters.filter((item) => item !== filter));
    } else {
      setFilter([...filters, filter]);
    }
  }

  return (
    <View style={styles.modalContainer}>
      <View
        style={styles.closeContainer}
        onTouchEnd={onClose}
      >
        <Close width={20} height={20} fill="#000" />
      </View>
      {filterValues.map((item, index) => (
        <View style={styles.checkBoxContainer} key={index}>
          <CheckBox
            value={filters.includes(item)}
            onValueChange={() => updateFilter(item)}
          />
          <Text style={styles.filterLabel}>{item}</Text>
        </View>
      ))}
      {buttonFactory.createSubmitButton(
        "apply filter",
        () => {
          onApplyFilter(filters)
          onClose()
        }
      )}
    </View>
  )
}

export default FilterModal