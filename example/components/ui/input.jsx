import {Text, TextInput, View} from 'react-native';
import inputStyle from '../../styles/inputStyle';

const Input = props => {
  const {title} = props;
  return (
    <View style={inputStyle.container}>
      <Text style={inputStyle.title}>{title}</Text>
      <TextInput style={inputStyle.input} {...props} />
    </View>
  );
};

export default Input;
