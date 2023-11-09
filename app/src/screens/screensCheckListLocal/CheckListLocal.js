import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AbasPiso2CasaQuimica from './Piso2CasaQuimica/AbasPiso2CasaQuimica';
import AbasPiso3CasaQuimica from './Piso3CasaQuimica/AbasPiso3CasaQuimica';
import AbasAreaFluor from './AreaFluor/AbasAreaFluor';

const Tab = createMaterialTopTabNavigator();

export default function CheckListLocal() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AbasPiso2CasaQuimica" component={AbasPiso2CasaQuimica} />
      <Tab.Screen name="AbasPiso3CasaQuimica" component={AbasPiso3CasaQuimica} />
      <Tab.Screen name="AbasAreaFluor" component={AbasAreaFluor} />
    </Tab.Navigator>
  );
}
