import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RadioButton({ options = [], selected, onChangeSelect }) {
  return (
    <View>
      {options.map((opt, index) => (
        <TouchableOpacity
          key={opt}
          onPress={() => {
            onChangeSelect(opt); // Chame a função onChangeSelect com a opção selecionada
          }}
          style={styles.optContainer}
        >
          <View style={styles.outlineCircle}>
            {selected === opt && <View style={styles.innerCircle} />}
          </View>
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  optContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outlineCircle: {
    width: 20,
    height: 20,
    borderRadius: 35,
    borderColor: '#777',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: '#444', // Mude para backgroundColor para preencher o círculo
  },
});
