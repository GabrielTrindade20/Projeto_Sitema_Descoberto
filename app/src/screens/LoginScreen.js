import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';


export default function LoginScreen({ navigation }) {
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
                navigation.navigate('Data');
            } else {
                alert('Nome de usuário ou senha incorreto.');
            }
        } catch (error) {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%', // Ajuste o tamanho conforme necessário
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});
