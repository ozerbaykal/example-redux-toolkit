import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import FloatActionButton from '../../components/ui/floatActionButton';
import {ADDNEWUSER} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import {getUser} from '../../store/actions/userActions';
import RemoteUserCard from '../../components/users/remoteUserCard';
import themeColors from '../../themes/themeColors';

const RemoteUsers = () => {
  const navigation = useNavigation();
  const {users, pending} = useSelector(store => store.users);
  //console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <View style={defaultSreenStyle.container}>
      {pending ? (
        <ActivityIndicator size={'large'} color={themeColors.BLACK} />
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text style={defaultSreenStyle.flatlistEmtyText}>
              Henüz Bir kullanıcı Eklenmedi
            </Text>
          }
          data={users}
          renderItem={({item}) => <RemoteUserCard user={item} />}
        />
      )}

      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};

export default RemoteUsers;
