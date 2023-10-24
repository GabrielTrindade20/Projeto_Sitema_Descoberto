import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function RadioButton(props) {
  const { label, value, selectedValue, onValueChange } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            { borderColor: selectedValue === value ? 'blue' : '#777' },
          ]}
          onPress={() => onValueChange(value)}
        >
          {selectedValue === value && (
            <View style={[styles.innerCircle, styles.selectedInnerCircle]} />
          )}
        </TouchableOpacity>
        <Text style={{ color: selectedValue === value ? 'blue' : 'black', fontSize: 20 }}>{value}</Text>
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
    width: 20,
    height: 20,
    borderRadius: 35,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  selectedInnerCircle: {
    backgroundColor: 'blue',
  },
});

export default RadioButton;
