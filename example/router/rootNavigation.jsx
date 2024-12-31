import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNEWUSER, USERDETAIL, USERS} from '../utils/routes';
import Users from '../screens/users';
import AddNewUser from '../screens/users/addNewUser';
import UserDetail from '../screens/users/userDetail';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={USERS} component={Users} />
      <Stack.Screen name={ADDNEWUSER} component={AddNewUser} />
      <Stack.Screen name={USERDETAIL} component={UserDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
