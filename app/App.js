import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen'; // Corrija o caminho de importação

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






