import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Observacao = ({ onChange, value }) => {
  return (
    <View style={styles.conteinerObservacao}>
      <TextInput
        style={styles.textInput}
        multiline={true}
        numberOfLines={4}
        onChangeText={onChange}
        value={value}
        placeholder="Digite sua observação aqui"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteinerObservacao: {
    width: '100%',
  },
  textInput: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#0005',
    padding: 10,
    fontSize: 16,
  },
  // Outros estilos necessários
});

export default Observacao;

  