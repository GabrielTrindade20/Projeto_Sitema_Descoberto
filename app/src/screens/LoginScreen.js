import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios'

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.9:8080/api/login', {
        email: email,
        senha: password,
      });

      if (response.status === 200) {
        console.log('Login bem-sucedido');
        onLogin(); // Chame a função "onLogin" passada como prop

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
      <Text>Entre com seu e-mail e senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
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
}

<<<<<<< HEAD
<<<<<<< HEAD
export default AppStack;
=======
export default AppStack;
>>>>>>> b266c2b620630e54107b647eb2df261dd0be3f9c
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '40%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
>>>>>>> 87edbb7f6e1cbf6b48f2d36fadbaa0287e861bfc
