import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Recupera o nome do usuário armazenado no AsyncStorage
    const fetchUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          const { username } = JSON.parse(userData);
          setUsername(username);
        }
      } catch (error) {
        console.error('Erro ao recuperar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/imagens/Logo_Caesb.png')}
        style={styles.logoCaesb}
      />
      <Text style={styles.titulo}>SISTEMA DESCOBERTO</Text>
      <View style={styles.conteinerUsuario}>
        <Image
          source={require('../assets/imagens/Icone_usuario.png')}
          style={styles.logoUsuario}
        />
        <Text style={styles.userName}>{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0C5AA5',
    height: 50, // Altura do cabeçalho
    paddingHorizontal: 75,
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 999, // Define a camada do cabeçalho para aparecer acima dos demais conteúdos
  },
  logoCaesb: {
    width: 30, // Largura da imagem
    height: 30, // Altura da imagem
    marginLeft: 40,
  },
  logoUsuario: {
    width: 20, // Largura da imagem
    height: 20, // Altura da imagem
    marginRight: 10,
  },
  titulo: {
    fontSize: 20, // Tamanho da fonte do nome do aplicativo
    fontWeight: 'bold', // Peso da fonte
    color: '#fff', // Cor do texto
  },
  conteinerUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '15%',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 20, // Tamanho da fonte do nome do aplicativo
    fontWeight: '500', // Peso da fonte
    color: '#fff', // Cor do texto
  },
});

export default Header;
