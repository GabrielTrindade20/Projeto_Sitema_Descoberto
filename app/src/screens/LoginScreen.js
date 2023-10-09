import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen'; // Importe sua tela de login
import Data from './Data'; // Importe sua tela de dados


const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Data" component={Data} />
      {/* Defina outras telas aqui */}
    </Stack.Navigator>
  );
}

<<<<<<< HEAD
export default AppStack;
=======
export default AppStack;
>>>>>>> b266c2b620630e54107b647eb2df261dd0be3f9c
