import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AbasPiso2CasaQuimica from './Piso2CasaQuimica/AbasPiso2CasaQuimica';
import AbasPiso3CasaQuimica from './Piso3CasaQuimica/AbasPiso3CasaQuimica';

const Tab = createMaterialTopTabNavigator();

export default function CheckListLocal() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AbasPiso2CasaQuimica" component={AbasPiso2CasaQuimica} />
      <Tab.Screen name="Piso3CasaQuimica" component={Piso3CasaQuimica} />
    </Tab.Navigator>
  );
}
