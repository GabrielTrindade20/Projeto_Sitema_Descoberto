import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Piso2CasaQuimica from './Piso2CasaQuimica';
import Piso3CasaQuimica from './Piso3CasaQuimica';

const Tab = createMaterialTopTabNavigator();

export default function CheckListLocal() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Piso2CasaQuimica" component={Piso2CasaQuimica} />
      <Tab.Screen name="Piso3CasaQuimica" component={Piso3CasaQuimica} />
    </Tab.Navigator>
  );
}
