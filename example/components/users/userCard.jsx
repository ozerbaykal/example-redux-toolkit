import {Pressable, Text, View} from 'react-native';
import React from 'react';
import userCardStyle from '../../styles/userCardStyle';
import {compareName, getInitialNameSurname} from '../../utils/functions';
import {ArrowRight} from 'iconsax-react-native';
import themeColors from '../../themes/themeColors';

const UserCard = ({user}) => {
  const {container, avatarContainer, avatarTitle, nameContainer, name, icon} =
    userCardStyle;
  return (
    <Pressable style={container}>
      <View>
        <View style={avatarContainer}>
          <Text style={avatarTitle}>
            {getInitialNameSurname(user.name, user.surname)}
          </Text>
        </View>
      </View>

      <View style={nameContainer}>
        <Text style={name}>{compareName(user.name, user.surname)}</Text>
        <Text style={name}>{user.email}</Text>
      </View>
      <View style={icon}>
        <ArrowRight size={25} color={themeColors.GRAY} />
      </View>
    </Pressable>
  );
};

export default UserCard;
