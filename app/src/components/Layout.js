// Layout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';


const Conteiner = ({ children }) => {
  return (
    <View style={styles.conteiner}>
      {children}
    </View>
  );
};

const QuestionContainer = ({ children }) => {
  return (
    <View style={styles.questionContainer}>
      {children}
    </View>
  );
};
const ChoseOptions = ({ children }) => {
  return (
    <View style={styles.ChoseOptions}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'column',
    padding: 10,
    width: '100%',
  },
  questionContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    width: '100%',
    // Estilos para questionContainer específico
  },
  ChoseOptions: {
    width: '75%',
  },
  // Adicione mais estilos conforme necessário
});

export { Conteiner, QuestionContainer, ChoseOptions };
