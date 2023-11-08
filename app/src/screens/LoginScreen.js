import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';



export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.1.13:8080/api/login', {
                email: email,
                senha: password,
            });

            if (response.status === 200) {
                console.log('Login bem-sucedido');
                navigation.navigate('Periodo');
            } else {
                alert('Nome de usuário ou senha incorreto.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <Header />

            <View style={styles.card}>
                <View style={styles.view}>
                    <Text style={styles.label}>
                        Usuário
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />

                </View>

                <View style={styles.view}>
                    <Text style={styles.label}>
                        Senha
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <CustomButton title="Entrar" onPress={handleLogin} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeAreaView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    card: {
        justifyContent: 'center',
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#E1E1E1',
        padding: 5,
        width: '70%',
        borderRadius: 20,
    },

    view: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },

    label: {
        width: '100%', // Ajuste o tamanho conforme necessário
        fontSize: 23,
        alignItems: 'flex-start',
        marginLeft: 30,
        fontWeight: 'bold',
    },

    input: {
        width: '100%', // Ajuste o tamanho conforme necessário
        marginVertical: 3,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
});
