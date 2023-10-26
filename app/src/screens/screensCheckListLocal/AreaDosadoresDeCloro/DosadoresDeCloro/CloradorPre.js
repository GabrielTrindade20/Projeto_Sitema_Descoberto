import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import OpcaoSelecao from './../../../../components/OpcaoSelecao'

export default function CloradorPos({ choices, setChoices }) {

    const iluminacaoArea = choices

    const setIluminacaoArea = (value) => {
        setChoices({ ...choices, iluminacaoArea: value });
    };


    return (
        <View style={styles.conteiner}>
            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Iluminação da área ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Iluminação da área ok?"
                    value="Sim"
                    selectedValue={iluminacaoArea}
                    onValueChange={(value) => setIluminacaoArea(value)}
                />
                <OpcaoSelecao
                    label="Iluminação da área ok?"
                    value="Não"
                    selectedValue={iluminacaoArea}
                    onValueChange={(value) => setIluminacaoArea(value)}
                />
            </View>
            {/* Repita o padrão para outras perguntas */}
        </View>
    );
}

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
    },
    Options: {
        width: '75%',
    },
    questionText: {
        fontSize: 20,
        flexDirection: 'row',
        // Estilos do texto da pergunta
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    radioButton: {
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
        // Estilos dos botões de rádio
    },
    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'transparent',
    },
    selectedInnerCircle: {
        backgroundColor: 'blue',
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
    },
    conteinerSituacao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    Situacaopicker: {
        backgroundColor: '#0C5AA5',
        width: '30%',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: -55,
    },
    // conteinerEquipamento: {
    //     flexDirection: 'column',
    // },
    conteinerPiker: {
        flexDirection: 'column',
        width: '30%',
        marginTop: 10,
        marginBottom: 10,
    },
    questionContainerPiker: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    picker: {
        backgroundColor: '#0C5AA5',
        width: '100%',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',

    },
    textInput: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#0005',
        padding: 10,
        fontSize: 16,
    },
    selectedOutlineCircle: {
        borderColor: 'blue', // Defina a cor da borda quando a opção estiver selecionada
    },
    conteinerObservacao: {
        width: '100%',
    },
    OptionsPias: {
        width: '100%',
        backgroundColor: '#fff7',
        padding: 5,
    },
    conteinerPias: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 5,
    },
    Pias: {
        marginTop: 10,
        marginBottom: -50,
        height: '80%',
        width: '30%',
        flexDirection: 'column',
        backgroundColor: '#D2D2D2',
        borderRadius: 5,
    },
});