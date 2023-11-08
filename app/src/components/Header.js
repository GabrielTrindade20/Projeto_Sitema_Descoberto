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
    justifyContent: 'space-around',
    backgroundColor: '#0C5AA5',
    height: 50, // Altura do cabeçalho
    paddingHorizontal: 50,
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 999, // Define a camada do cabeçalho para aparecer acima dos demais conteúdos
  },
  logo: {
    width: 30, // Largura da imagem
    height: 30, // Altura da imagem
  },
  titulo: {
    fontSize: 20, // Tamanho da fonte do nome do aplicativo
    fontWeight: 'bold', // Peso da fonte
    color: '#fff', // Cor do texto
  },
});

export default Header;
