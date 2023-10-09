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

export default AppStack;
