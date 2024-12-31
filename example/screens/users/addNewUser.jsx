import {View} from 'react-native';
import React from 'react';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';

const AddNewUser = () => {
  return (
    <View style={defaultSreenStyle.container}>
      <Input title="Name" placeholder="Lütfen birisim giriniz" />
      <Input title="Surname" placeholder="Lütfen Soy isim giriniz" />
      <Input title="Phone Number" placeholder="Lütfen bir telefon giriniz" />
      <Input title="E-mail" placeholder="Lütfen bir email giriniz" />
      <Input title="Gender" placeholder="Lütfen bir gender giriniz" />
      <Input title="Age" placeholder="Lütfen bir yaş giriniz" />
      <Button title="Save" status="success" />
    </View>
  );
};

export default AddNewUser;
