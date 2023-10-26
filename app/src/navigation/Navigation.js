import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import PeriodoScreen from '../screens/Periodo';
import CheckListScreen from '../screens/CheckList';
import Piso2CasaQuimica from '../screens/screensCheckListLocal/Piso2CasaQuimica/AbasPiso2CasaQuimica';
import Piso3CasaQuimica from '../screens/screensCheckListLocal/Piso3CasaQuimica/AbasPiso3CasaQuimica';
import AreaFluor from '../screens/screensCheckListLocal/AreaFluor/AbasAreaFluor'
import DosadoresCloro from '../screens/screensCheckListLocal/AreaDosadoresDeCloro/AbasDosadoresCloro';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Periodo" component={PeriodoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CheckList" component={CheckListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Piso2CasaQuimica" component={Piso2CasaQuimica} options={{ headerShown: false }} />
        <Stack.Screen name="Piso3CasaQuimica" component={Piso3CasaQuimica} options={{ headerShown: false }} />
        <Stack.Screen name="AreaFluor" component={AreaFluor} options={{ headerShown: false }} />
        <Stack.Screen name="DosadoresCloro" component={DosadoresCloro} options={{ headerShown: false }} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
        {/* Adicione outras telas principais conforme necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
