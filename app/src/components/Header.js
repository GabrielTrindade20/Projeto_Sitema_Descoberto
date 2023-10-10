import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require('../assets/imagens/Logo_Caesb.png')}
        style={styles.logo}
      />
      <Text style={styles.titulo}>SISTEMA DESCOBERTO</Text>

      <View />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#0C5AA5',
    height: 80, // Altura do cabeçalho
    paddingHorizontal: 50,
    width: '100%',
    marginBottom: 20,

  },
  logo: {
    alignItems: 'flex-start',
    width: 40, // Largura da imagem
    height: 40, // Altura da imagem
  },
  titulo: {
    fontSize: 25, // Tamanho da fonte do nome do aplicativo
    fontWeight: 'bold', // Peso da fonte
    color: '#fff', // Cor do texto
    paddingRight: 50,
  },
});

export default Header;
