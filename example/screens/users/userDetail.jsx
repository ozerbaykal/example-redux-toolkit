import {ScrollView, Text, View} from 'react-native';
import React from 'react';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import {compareName, getInitialNameSurname} from '../../utils/functions';
import userCardStyle from '../../styles/userCardStyle';
import themeColors from '../../themes/themeColors';
import userDetailStyle from '../../styles/userDetailStyle';
import {Calendar, Call, Man, Sms, Woman} from 'iconsax-react-native';
import Button from '../../components/ui/button';

const UserDetail = ({route}) => {
  const {container, avatarContainer, avatarTitle, nameContainer, name, icon} =
    userCardStyle;
  const {user} = route.params;

  return (
    <View style={defaultSreenStyle.container}>
      <ScrollView>
        <View style={userDetailStyle.container}>
          <View style={userDetailStyle.avatarContainer}>
            <Text style={userDetailStyle.avatarTitle}>
              {getInitialNameSurname(user.name, user.surname)}
            </Text>
          </View>
          <Text style={userDetailStyle.nameTitle}>
            {compareName(user.name, user.surname)}
          </Text>
        </View>

        <View>
          <View style={userDetailStyle.emailContainer}>
            <Sms />
            <Text style={userDetailStyle.email}>{user.email}</Text>
          </View>
          <View style={userDetailStyle.emailContainer}>
            <Call />
            <Text style={userDetailStyle.email}>{user.phoneNumber}</Text>
          </View>
          <View style={userDetailStyle.emailContainer}>
            {user.gender === 'Male' ? <Man /> : <Woman />}
            <Text style={userDetailStyle.email}>{user.gender}</Text>
          </View>
          <View style={userDetailStyle.emailContainer}>
            <Calendar />
            <Text style={userDetailStyle.email}>{user.age}</Text>
          </View>
        </View>
        <View style={userDetailStyle.button}>
          <Button title="Delete" status="warning" />
          <Button title="Update User" status="info" />
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetail;
