import {ScrollView, View} from 'react-native';
import React from 'react';
import defaultSreenStyle from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {ErrorMessage, Formik} from 'formik';
import {newUserSchema} from '../../utils/validationSchemas';

const AddNewUser = () => {
  return (
    <View style={defaultSreenStyle.container}>
      <Formik
        validationSchema={newUserSchema}
        initialValues={{
          name: '',
          surname: '',
          phoneNumber: null,
          age: '',
          email: '',
          gender: '',
        }}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <Input
              error={errors.name}
              onChangeText={handleChange('name')}
              onBLur={handleBlur('name')}
              values={values.name}
              title="Name"
              placeholder="Lütfen birisim giriniz"
            />
            <Input
              error={errors.surname}
              onChangeText={handleChange('surname')}
              onBLur={handleBlur('surname')}
              values={values.surname}
              title="Surname"
              placeholder="Lütfen Soy isim giriniz"
            />
            <Input
              error={errors.phoneNumber}
              keyboardType="phone-pad"
              onChangeText={handleChange('phoneNumber')}
              onBLur={handleBlur('phoneNumber')}
              values={values.phoneNumber}
              title="Phone Number"
              placeholder="Lütfen bir telefon giriniz"
            />
            <Input
              error={errors.email}
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBLur={handleBlur('email')}
              values={values.email}
              title="E-mail"
              placeholder="Lütfen bir email giriniz"
            />
            <Input
              error={errors.gender}
              onChangeText={handleChange('gender')}
              onBLur={handleBlur('gender')}
              values={values.gender}
              title="Gender"
              placeholder="Lütfen bir gender giriniz"
            />
            <Input
              error={errors.age}
              keyboardType="number-pad"
              onChangeText={handleChange('age')}
              onBLur={handleBlur('age')}
              values={values.age}
              title="Age"
              placeholder="Lütfen bir yaş giriniz"
            />
            <Button onPress={handleSubmit} title="Save" status="success" />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewUser;
