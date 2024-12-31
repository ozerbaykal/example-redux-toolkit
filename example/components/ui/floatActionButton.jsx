import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import floatActionButtonStyle from '../../styles/floatActionButtonStyle';
import {Add} from 'iconsax-react-native';
import themeColors from '../../themes/themeColors';

const FloatActionButton = props => {
  const {container} = floatActionButtonStyle;
  return (
    <TouchableOpacity {...props} style={container}>
      <Add size={40} color={themeColors.WHİTE} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;
