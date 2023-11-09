import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';



export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.1.13:8080/api/login', {
                email: email,
                senha: password,
            });

            if (response.status === 200) {
                const userData = {
                    token: response.data.token, // Salva o token de autenticação
                    username: response.data.login, // Salva o nome do usuário
                };

                // Armazena as informações do usuário no AsyncStorage
                await AsyncStorage.setItem('userData', JSON.stringify(userData));

                navigation.navigate('Periodo');
            } else {
                alert('Usuário ou senha incorretos.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.SafeAreaView}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/imagens/Logo_Caesb.png')}
                    style={styles.logoCaesb}
                />
                <Text style={styles.titulo}>SISTEMA DESCOBERTO</Text>
                <View />
            </View>

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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#0C5AA5',
        height: 50, // Altura do cabeçalho
        paddingHorizontal: 50,
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 999, // Define a camada do cabeçalho para aparecer acima dos demais conteúdos
      },
      logoCaesb: {
        width: 30, // Largura da imagem
        height: 30, // Altura da imagem
      },
      logoUsuario: {
        width: 20, // Largura da imagem
        height: 20, // Altura da imagem
      },
      titulo: {
        fontSize: 20, // Tamanho da fonte do nome do aplicativo
        fontWeight: 'bold', // Peso da fonte
        color: '#fff', // Cor do texto
      },
      conteinerUsuario: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '13%',
        justifyContent: 'space-between',
      },
      userName: {
        fontSize: 20, // Tamanho da fonte do nome do aplicativo
        fontWeight: '500', // Peso da fonte
        color: '#fff', // Cor do texto
      },
});
