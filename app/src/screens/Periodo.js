import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import RadioButton from '../components/BotaoRadio';

export default function PeriodoScreen({ navigation }) {
    const [data, setData] = useState(new Date());
    const [turno, setTurno] = useState('');
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const dispatch = useDispatch();

    const setDate = (event, date) => {
        if (event.type === 'set') {
            setData(date);
            setShow(false);
        }
    };

    const showMode = (modeToShow) => {
        setShow(true);
    };

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
                        Data:
                    </Text>

                    <View style={styles.containerData}>
                        <View style={styles.containerBotao}>
                            <Button title="Selecione a Data" onPress={() => showMode(true)} />
                            {show && (
                                <DateTimePicker
                                    display="spinner"
                                    mode="date"
                                    locale="pt-BR"
                                    toLocaleString="pt-BR"
                                    timeZoneName="America/Fortaleza"
                                    dateFormat="dayofweek day month"
                                    value={data}
                                    onChange={setDate}
                                />
                            )}
                        </View>

                        <Text style={styles.TextGrande}>Data Selecionada:</Text>

                        <View>
                            <Text style={styles.dataSelecionada}>{data.toLocaleString('pt-BR')}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.view}>
                    <Text style={styles.label}>Turno</Text>
                    <RadioButton
                        options={['Diurno', 'Noturno']}
                        selected={turno}
                        onChangeSelect={(opt) => setTurno(opt)}
                    />
                </View>

                <CustomButton title="Entrar" onPress={handlePeriodo} />
            </View>
        </SafeAreaView>
    )
}


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

    containerData: {
        width: '100%',
        borderRadius: 10, // Borda arredondada
        alignItems: 'center',

    },

    containerBotao: {
        borderRadius: 10, // Borda arredondada
        width: '100%',
    },

    dataSelecionada: {
        width: '100%',
        fontSize: 15,
        fontWeight: '600',

    },

    TextGrande: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: '700',
    },

    optConteiner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
