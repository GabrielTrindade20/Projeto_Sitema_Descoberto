import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';


import Header from '../components/Header';
import CustomButton from '../components/CustomButton';

// ...imports...

export default function PeriodoScreen({ navigation }) {
    const [data, setData] = useState('');
    const [turno, setTurno] = useState('');

    const handlePeriodo = async () => {
        try {
            const response = await axios.post('http://192.168.1.9:8080/api/periodo', {
                data: data,
                turno: turno,
            });

            if (response.status === 200) {
                console.log('Período criado com sucesso');
                navigation.navigate('CheckList');
            } else {
                alert('Erro ao criar o período.');
            }
        } catch (error) {
            console.error('Erro ao criar o período:', error.message);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />

            <View style={styles.card}>
                <View style={styles.view}>
                    <Text style={styles.label}>
                        Data
                    </Text>
                    <DatePicker
                        style={{ width: 500 }}
                        date={data} // Use o estado `data` aqui
                        mode="date"
                        format="DD/MM/YYYY" // Ajuste o formato de acordo com sua preferência
                        onDateChange={(date) => setData(date)}
                    />

                </View>

                <View style={styles.view}>
                    <Text style={styles.label}>
                        Turno
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ex. diurno"
                        value={turno}
                        onChangeText={(text) => setTurno(text)}
                    />
                </View>

                <CustomButton title="Entrar" onPress={handlePeriodo} />
            </View>
        </SafeAreaView>
    )
}

// Restante do código...


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E7E7E7',
        padding: 10,
        width: '70%',
        borderRadius: 20,
    },

    view: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },

    label: {
        width: '100%', // Ajuste o tamanho conforme necessário
        fontSize: 20,
        alignItems: 'flex-start',
        marginLeft: 30,
    },

    input: {
        width: '100%', // Ajuste o tamanho conforme necessário
        marginVertical: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
});
