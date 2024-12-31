import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNEWUSER, USERS} from '../utils/routes';
import Users from '../screens/users';
import AddNewUser from '../screens/users/addNewUser';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={USERS} component={Users} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
