import {ScrollView, View} from 'react-native';
import React from 'react';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {Formik} from 'formik';
import {newUserSchema} from '../../utils/validationSchemas';
import {useDispatch} from 'react-redux';
import {updatedUser} from '../../store/slice/userSlice';

const UpdateUser = ({route}) => {
  const {updateUser} = route.params;

  const dispatch = useDispatch();
  return (
    <View style={defaultSreenStyle.container}>
      <Formik
        validationSchema={newUserSchema}
        initialValues={{
          id: updateUser.id,
          name: updateUser.name,
          surname: updateUser.surname,
          phoneNumber: updateUser.phoneNumber,
          age: updateUser.age,
          email: updateUser.email,
          gender: updateUser.gender,
        }}
        onSubmit={values => {
          dispatch(updatedUser(values));
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              title="Name"
              placeholder="Lütfen bir isim giriniz"
            />
            <Input
              error={errors.surname}
              onChangeText={handleChange('surname')}
              onBlur={handleBlur('surname')}
              value={values.surname}
              title="Surname"
              placeholder="Lütfen Soy isim giriniz"
            />
            <Input
              error={errors.phoneNumber}
              keyboardType="phone-pad"
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              title="Phone Number"
              placeholder="Lütfen bir telefon giriniz"
            />
            <Input
              error={errors.email}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              title="E-mail"
              placeholder="Lütfen bir email giriniz"
            />
            <Input
              error={errors.gender}
              onChangeText={handleChange('gender')}
              onBlur={handleBlur('gender')}
              value={values.gender}
              title="Gender"
              placeholder="Lütfen bir gender giriniz"
            />
            <Input
              error={errors.age}
              keyboardType="number-pad"
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              value={values.age}
              title="Age"
              placeholder="Lütfen bir yaş giriniz"
            />
            <Button onPress={handleSubmit} title="Update" status="info" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default UpdateUser;