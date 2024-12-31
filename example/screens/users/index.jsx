import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

const Users = () => {
  const navigation = useNavigation();
  const {users} = useSelector(store => store.users);

  return (
    <View style={defaultSreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={defaultSreenStyle.flatlistEmtyText}>
            Henüz Bir kullanıcı Eklenmedi
          </Text>
        }
        data={users}
        renderItem={({item}) => <UserCard user={item} />}
      />

      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};

export default Users;
