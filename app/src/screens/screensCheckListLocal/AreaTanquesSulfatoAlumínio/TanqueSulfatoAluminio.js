import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import OpcaoSelecao from '../../../components/OpcaoSelecao';
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';

export default function AreaTanqueSulfato({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaTanqueSulfato] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaTanqueSulfato(newText);
        updateObservacao(newText);
    }

    const { turbidimetroAguaRetorno,
        descargaSulfato,
        transferenciaSulfato,
    } = choices;

    const setTurbidimetroAguaRetorno = (value) => {
        setChoices({ ...choices, turbidimetroAguaRetorno: value });
    };

    const setDescargaSulfato = (value) => {
        setChoices({ ...choices, descargaSulfato: value });
    };

    const setTransferenciaSulfato = (value) => {
        setChoices({ ...choices, transferenciaSulfato: value });
    };

    return (
        <Conteiner style={styles.conteiner}>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style={styles.questionText}>Defeito no Turbidímetro de água de retorno</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Defeito no Turbidímetro de água de retorno"
                    value="Sim"
                    selectedValue={turbidimetroAguaRetorno}
                    onValueChange={(value) => setTurbidimetroAguaRetorno(value)}
                />
                <OpcaoSelecao
                    label="Defeito no Turbidímetro de água de retorno"
                    value="Não"
                    selectedValue={turbidimetroAguaRetorno}
                    onValueChange={(value) => setTurbidimetroAguaRetorno(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.conteinerSituacao}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style={styles.questionText}>Descarregamento de sulfato: </TextComponent>
                </ChoseOptions>
                <Picker
                    selectedValue={descargaSulfato}
                    onValueChange={(itemValue) => setChoices({ ...choices, descargaSulfato: itemValue })}
                    style={styles.Situacaopicker}
                >
                    <Picker.Item label="Equipamento:" />
                    <Picker.Item label="MB 6A" value="MB 6A" />
                    <Picker.Item label="MB 6B" value="MB 6B" />

                </Picker>
            </QuestionContainer>

            <QuestionContainer style={styles.conteinerSituacao}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style={styles.questionText}>Transferência de sulfato: </TextComponent>
                </ChoseOptions>
                <Picker
                    selectedValue={transferenciaSulfato}
                    onValueChange={(itemValue) => setChoices({ ...choices, transferenciaSulfato: itemValue })}
                    style={styles.Situacaopicker}
                >
                    <Picker.Item label="Equipamento:" />
                    <Picker.Item label="MB 6A" value="MB 6A" />
                    <Picker.Item label="MB 6B" value="MB 6B" />

                </Picker>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <Observacao value={text} onChange={handleObservacaoChange} />                
            </QuestionContainer>
            {/* Repita o padrão para outras perguntas */}
        </Conteiner>
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