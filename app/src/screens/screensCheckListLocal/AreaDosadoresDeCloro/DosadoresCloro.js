import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';

import { CloradorPos } from './DosadoresDeCloro/CloradorPos';
import { CloradorPre } from './DosadoresDeCloro/CloradorPre';
import { CloradorByPass } from './DosadoresDeCloro/CloradorByPass';

import OpcaoSelecao from './../../../components/OpcaoSelecao'
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';

export default function DosadoresCloro() {
    const [tabSelected, setTabSelected] = useState('CloradorPos');
    const [text, setText] = useState("");

    const handleObservacaoChange = (newText) => {
        setText(newText);
    };

    const updateObservacao = (newText) => {
        handleObservacaoChange(newText);
    };

    const [choicesPos, setChoicesPos] = useState({
        situacao: '',
        modo: '',
        pressaoVacuo: '',
        dosagem: '',
        limpesaRotametro: '',
    });

    const [choicesPre, setChoicesPre] = useState({
        situacao: '',
        modo: '',
        pressaoVacuo: '',
        dosagem: '',
        limpesaRotametro: '',
    });

    const [choicesByPass, setChoicesByPass] = useState({
        situacao: '',
        modo: '',
        pressaoVacuo: '',
        dosagem: '',
        limpesaRotametro: '',
    });

    const setBombas = (value) => {
        setChoices({ ...choices, bombas: value });
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, tabSelected === 'CloradorPos' && styles.selectedTab]}
                    onPress={() => setTabSelected('CloradorPos')}
                >
                    <Text style={[styles.tabText, tabSelected === 'CloradorPos' && styles.selectedTabText]}>Clorador Pós</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabSelected === 'CloradorPre' && styles.selectedTab]}
                    onPress={() => setTabSelected('CloradorPre')}
                >
                    <Text style={[styles.tabText, tabSelected === 'CloradorPre' && styles.selectedTabText]}>Clorador Pré</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabSelected === 'CloradorByPass' && styles.selectedTab]}
                    onPress={() => setTabSelected('CloradorByPass')}
                >
                    <Text style={[styles.tabText, tabSelected === 'CloradorByPass' && styles.selectedTabText]}>Clorador By Pass</Text>
                </TouchableOpacity>

                {/* Adicione outras abas conforme necessário */}
            </View>
            <ScrollView style={styles.content}>
                {tabSelected === 'CloradorPos' && (
                    <CloradorPos
                        choices={choicesPos}
                        setChoices={setChoicesPos}
                    />
                )}
                {tabSelected === 'CloradorPre' && (
                    <CloradorPre
                        choices={choicesPre}
                        setChoices={setChoicesPre}
                    />
                )}
                {tabSelected === 'CloradorByPass' && (
                    <CloradorByPass
                        choices={choicesByPass}
                        setChoices={setChoicesByPass}
                    />
                )}

                <TextComponent style='textQuestoes'>Observações:</TextComponent>

                <QuestionContainer style={styles.questionContainer}>
                    <Observacao value={text} onChange={handleObservacaoChange} />
                </QuestionContainer>
                {/* ... Conteúdo comum ... */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
    input: {
        width: '30%',
        marginLeft: -50,
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
    textInput: {
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#0005',
        padding: 10,
        fontSize: 16,
    },
});
