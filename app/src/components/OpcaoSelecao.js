import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function RadioButton(props) {
  const { label, value, selectedValue, onValueChange } = props;
  const isSelected = selectedValue === value;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            { borderColor: selectedValue === value ? '#0C5AA5' : '#777' },
          ]}
          onPress={() => onValueChange(value)}
        >
          {selectedValue === value && (
            <Text style={[styles.innerCircle, styles.selectedInnerCircle]} />
          )}
        </TouchableOpacity>
        <Text style={[styles.select, isSelected && styles.selectedText]}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  label: {
    flex: 1,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButton: {
    width: 25,
    height: 25,
    borderRadius: 35,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  selectedInnerCircle: {
    backgroundColor: '#0C5AA5',
  },
  select: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  selectedText: {
    color: '#0C5AA5',
  },
});

export default RadioButton;
