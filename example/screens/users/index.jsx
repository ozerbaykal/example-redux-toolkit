import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatActionButton from '../../components/ui/floatActionButton';

const Users = () => {
  const {users} = useSelector(store => store.users);

  return (
    <View style={defaultSreenStyle.container}>
      <FlatList
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />

      <FloatActionButton />
    </View>
  );
};

export default Users;
