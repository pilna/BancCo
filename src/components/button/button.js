import { Image, Text, View } from 'react-native';

import React from 'react'
import { styles } from './button.styles';

const Button = ({ 
  icon, 
  label,
  iconColor,
  iconSize,
  labelColor,
  onClick,
  fontSize,
  fontWeight,
  backgroundColor,
  borderRadius,
  width = 50,
  labelOrientation = "lower",
  fullWidth = false
}) => {
  const labelBeforeImage = (
    label 
    && labelOrientation 
    && ( labelOrientation === "upper" 
    || labelOrientation === "left" )
  )

  const labelAfterImage = (
    label 
    && labelOrientation 
    && ( labelOrientation === "lower" 
    || labelOrientation === "right" )
  )

  const labelIsOnRow = (
    labelOrientation === "left"
    || labelOrientation === "right"
  )
  
  return (
    <View 
      onTouchEnd={onClick}
      style={{
        ...styles.buttonContainer,
        backgroundColor: backgroundColor || "#DEE1DF",
        justifyContent: labelIsOnRow ? "space-between" : "center",
        flexDirection: labelIsOnRow ? "row" : "column",
        width: fullWidth ? "100%" : width,
        borderRadius: borderRadius || 8,
      }}
    >
      {labelBeforeImage && (
        <Text 
          style={{
            ...styles.buttonText,
            color: labelColor,
            marginRight: labelIsOnRow ? 8 : 0,
          }}>
          {label}
        </Text>
      )}
      {icon}
      {labelAfterImage && (
        <Text 
          style={{
            ...styles.buttonText,
            color: labelColor,
            marginLeft: labelIsOnRow ? 8 : 0,
            fontSize: fontSize || 12,
            fontWeight: fontWeight || "normal",
          }}>
          {label}
        </Text>
      )}
    </View>
  )
}

export default Button