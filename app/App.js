import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack'; // Importe o componente AppStack
=======
import { NavigationContainer } from 'react-navigation/native';
import AppStack from './AppStack'; // Importe o componente AppStack
import LoginScreen from './src/screens/Login';
import Header from './src/components/Header';
>>>>>>> b266c2b620630e54107b647eb2df261dd0be3f9c

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


