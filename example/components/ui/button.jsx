import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import themeColors from '../../themes/themeColors';
import buttonStyle from '../../styles/buttonStyle';

const Button = props => {
  const {title, status} = props;

  const setColor = () => {
    switch (status) {
      case 'success':
        return themeColors.GREEN;
      case 'warning':
        return themeColors.YELLOW;
      case 'info':
        return themeColors.RED;
      default:
        return themeColors.BLUE;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[buttonStyle.container, {backgroundColor: setColor()}]}>
      <Text style={buttonStyle.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
