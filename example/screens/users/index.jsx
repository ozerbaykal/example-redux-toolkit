import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';

const Users = () => {
  const {title} = useSelector(store => store.users);

  return (
    <View style={defaultSreenStyle.container}>
      <Text>{title} </Text>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({});
