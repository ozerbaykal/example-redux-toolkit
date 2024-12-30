import {Text, View} from 'react-native';
import React from 'react';
import floatActionButtonStyle from '../../styles/floatActionButtonStyle';

const FloatActionButton = () => {
  const {container} = floatActionButtonStyle;
  return (
    <View style={container}>
      <Text>Float buttton</Text>
    </View>
  );
};

export default FloatActionButton;
