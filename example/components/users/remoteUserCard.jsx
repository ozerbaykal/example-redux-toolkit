import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import userCardStyle from '../../styles/userCardStyle';
import {compareName, getInitialNameSurname} from '../../utils/functions';
import {ArrowRight} from 'iconsax-react-native';
import themeColors from '../../themes/themeColors';
import {useNavigation} from '@react-navigation/native';
import {USERDETAIL} from '../../utils/routes';

const RemoteUserCard = ({user}) => {
  const {
    container,
    avatarContainer,
    avatarTitle,
    nameContainer,
    name,
    icon,
    avatarImage,
  } = userCardStyle;
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAIL, {user: user})}
      style={container}>
      <View>
        {user?.picture?.medium ? (
          <Image source={{uri: user?.picture?.medium}} style={avatarImage} />
        ) : (
          <View style={avatarContainer}>
            <Text style={avatarTitle}>
              {getInitialNameSurname(user?.name?.first, user?.name?.last)}
            </Text>
          </View>
        )}
      </View>

      <View style={nameContainer}>
        <Text style={name}>
          {compareName(user?.name?.first, user?.name?.last)}
        </Text>
        <Text style={name}>{user?.email}</Text>
      </View>
      <View style={icon}>
        <ArrowRight size={25} color={themeColors.GRAY} />
      </View>
    </Pressable>
  );
};

export default RemoteUserCard;
