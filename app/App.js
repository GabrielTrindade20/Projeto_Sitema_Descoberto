import React from 'react';
import { Provider } from 'react-redux';
import store from '../app/src/store/store'; // Importe sua store aqui
import Navigation from './src/navigation/Navigation';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '40%',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});






