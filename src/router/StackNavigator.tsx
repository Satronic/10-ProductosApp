import { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthConrtext';
import { ProtectedScreen } from '../screens/ProtectedScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {

  const { status } = useContext(AuthContext);

  console.log('Status in Stack: ', status);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'black'
        }
      }}
    >
      {
        status === 'authenticated'
          ? 
            <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
          :
          <>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
      }

    </Stack.Navigator>
  );
}