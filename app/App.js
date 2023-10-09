<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen'; // Corrija o caminho de importação
>>>>>>> 87edbb7f6e1cbf6b48f2d36fadbaa0287e861bfc

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <Text>Você está logado! Redirecionar para a próxima tela aqui.</Text>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '40%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});






