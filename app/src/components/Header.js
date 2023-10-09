import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../assets/imagens/Logo_Caesb.png')}
        style={styles.logo}
      />
      <Text style={styles.titulo}>SISTEMA DESCOBERTO</Text>

      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#007bff',
    height: 80, // Altura do cabeçalho
    paddingHorizontal: 10,
    width: '100%',  
  },
  logo: {
    alignItems: 'flex-start',
    width: 60, // Largura da imagem
    height: 60, // Altura da imagem
  },
  titulo: {
    fontSize: 25, // Tamanho da fonte do nome do aplicativo
    fontWeight: 'bold', // Peso da fonte
    color: '#fff', // Cor do texto
  },
});

export default Header;
