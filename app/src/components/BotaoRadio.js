import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRadioOption } from '../actions/authActions';

export default function RadioButton({ options = [], selected, onChangeSelect }) {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.radio.selectedOption);

  return (
    <View style={styles.conteinerOpt}>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt}
          onPress={() => {
            dispatch(selectRadioOption(opt));
            onChangeSelect(opt);
          }}
          style={styles.optContainer}
        >
          <View style={styles.outlineCircle}>
            {selected === opt && <View style={[styles.innerCircle, selectedOption === opt && styles.selectedInnerCircle]} />}
          </View>
          <Text style={{ color: selectedOption === opt ? 'blue' : 'black' }}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  conteinerOpt: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
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
    marginRight: 5,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: 'transparent', // Mantenha transparent por padrão
  },
  selectedInnerCircle: {
    backgroundColor: 'blue', // Defina a cor de fundo quando a opção estiver selecionada
  },
});
