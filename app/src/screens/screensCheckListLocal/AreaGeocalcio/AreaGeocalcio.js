import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';


import OpcaoSelecao from '../../../components/OpcaoSelecao';
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';
import CustomButton from '../../../components/CustomButton';

export default function AreaGeocalcio({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaGeocalcio] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaGeocalcio(newText);
        updateObservacao(newText);
    }

    const {
        motor,
        modo,
        dosador,
        hz,
        vazamentoAgua,
        vazamentoSolucao,
        limpezaExterna,
    } = choices;


    const setMotor = (value) => {
        setChoices({ ...choices, motor: value });
    };

    const setVazamentoSolucao = (value) => {
        setChoices({ ...choices, vazamentoSolucao: value });
    };

    const setLimpezaExterna = (value) => {
        setChoices({ ...choices, limpezaExterna: value });
    };


    return (
        <Conteiner style={styles.conteiner}>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Há vazamento de água?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={vazamentoAgua}
                    onValueChange={(value) => setVazamentoAgua(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={vazamentoAgua}
                    onValueChange={(value) => setVazamentoAgua(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Há vazamento de solução?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={vazamentoSolucao}
                    onValueChange={(value) => setVazamentoSolucao(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={vazamentoSolucao}
                    onValueChange={(value) => setVazamentoSolucao(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Necessário limpeza externa próxima aos silos?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={limpezaExterna}
                    onValueChange={(value) => setLimpezaExterna(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={limpezaExterna}
                    onValueChange={(value) => setLimpezaExterna(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Motores em Uso</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="A"
                    selectedValue={motor}
                    onValueChange={(value) => setMotor(value)}
                />
                <OpcaoSelecao
                    value="B"
                    selectedValue={motor}
                    onValueChange={(value) => setMotor(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.conteinerSituacao}>
                <ChoseOptions style={styles.ChoseOptions}>
                    <TextComponent style='textQuestoes'>Modo: </TextComponent>
                </ChoseOptions>
                <Picker
                    selectedValue={modo}
                    onValueChange={(itemValue) => setChoices({ ...choices, modo: itemValue })}
                    style={styles.Situacaopicker}
                >
                    <Picker.Item label="Modo:" />
                    <Picker.Item label="Manual" value="Manual" />
                    <Picker.Item label="Automático" value="Automático" />

                </Picker>
            </QuestionContainer>

            <QuestionContainer style={styles.conteinerSituacao}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Dosador: </TextComponent>
                </ChoseOptions>
                <Picker
                    selectedValue={dosador}
                    onValueChange={(itemValue) => setChoices({ ...choices, dosador: itemValue })}
                    style={styles.Situacaopicker}
                >
                    <Picker.Item label="Dosador:" />
                    <Picker.Item label="Pré" value="Pré" />
                    <Picker.Item label="Pós" value="Pós" />

                </Picker>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Hz: </TextComponent>
                </ChoseOptions>
                <TextInput
                    style={styles.input}
                    placeholder="Hz"
                    value={hz}
                    onChangeText={(number) => setChoices(number)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <Observacao value={text} onChange={handleObservacaoChange} />
            </QuestionContainer>

        </Conteiner>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 18,
        color: 'black',
    },
    Situacaopicker: {
        backgroundColor: '#0C5AA5',
        width: '30%',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: -55,
    },
    input: {
        width: '30%',
        marginLeft: -50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    container: {
        flex: 1,
        padding: 10,
    },
    tabs: {
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        elevation: 3,

    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,

    },
    selectedTab: {
        borderRadius: 5,
        backgroundColor: '#0C5AA5',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedTabText: {
        color: '#FFFF',
    },
    content: {
        flex: 1,
    },
    textInput: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#0005',
        padding: 10,
        fontSize: 16,
    },
});