import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import Navigation from './src/navigation/Navigation'; // Importe a navegação

export default function App() {
    return <Navigation />;
  }

  // return (
  //   <View style={styles.container}>
  //     {loggedIn ? (
  //       <Text>Você está logado! Redirecionar para a próxima tela aqui.</Text>

  //     ) : (
  //       <LoginScreen onLogin={handleLogin} />
  //     )}
  //   </View>
  // );
// }


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






