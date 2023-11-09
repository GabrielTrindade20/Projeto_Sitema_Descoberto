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
const LayoutGrid = ({ children }) => {
  return (
    <View style={styles.layoutGrid}>
      {children}
    </View>
  );
};

const LayoutGridRow = ({ children }) => {
  return (
    <View style={styles.layoutGridRow}>
      {children}
    </View>
  );
};
const LayoutGridCollumn = ({ children }) => {
  return (
    <View style={styles.layoutGridCollumn}>
      {children}
    </View>
  );
};
const LayoutGridContent = ({ children }) => {
  return (
    <View style={styles.layoutGridContent}>
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
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
    // Estilos para questionContainer específico
  },
  ChoseOptions: {
    width: '75%',
  },
  layoutGrid: {
    width: '100%',
    backgroundColor: '#fff7',
    padding: 5,
    marginBottom: 20,
  },
  layoutGridRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // Adicione mais estilos conforme necessário
  layoutGridCollumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  layoutGridContent: {
    flexDirection: 'column',
    width: '30%',
    marginTop: 10,
    marginBottom: 10,
  },
  // Adicione mais estilos conforme necessário
});

export {
  Conteiner,
  QuestionContainer,
  ChoseOptions,
  LayoutGrid,
  LayoutGridRow,
  LayoutGridCollumn,
  LayoutGridContent,
};
