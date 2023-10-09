import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/screens/Login';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Header />
        <LoginScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


