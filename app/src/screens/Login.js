import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios'; // Importe o Axios

const LoginScreen = ({ navigation }) => { // Certifique-se de que você está recebendo a prop "navigation"

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.9:8080/api/login', {
        email: email,
        senha: password,
      });

      if (response.status === 200) {
        console.log('Redirecionando para a tela de dados');
        navigation.navigate('Data');

      } else {
        // Exibir uma mensagem de erro para o usuário
        alert('Nome de usuário ou senha incorreto.');
      }
    } catch (error) {
      // Lida com erros de solicitação ou resposta do servidor
      console.error('Erro ao fazer login:', error.message);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

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

export default LoginScreen;
