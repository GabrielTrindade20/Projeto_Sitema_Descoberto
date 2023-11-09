import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { EvaporadorPos } from './EvaporadoresDeCloro/EvaporadorPos';
import { EvaporadorPre } from './EvaporadoresDeCloro/EvaporadorPre';
import { EvaporadorByPass } from './EvaporadoresDeCloro/EvaporadorByPass';

import OpcaoSelecao from './../../../components/OpcaoSelecao'
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';

export default function DosadoresCloro() {
    const [tabSelected, setTabSelected] = useState('EvaporadorByPass');
    const [text, setText] = useState("");

    const [exaustores, setExautores] = useState({
        exaustores: '',
    });
    const [carretas, setCarretas] = useState({
        carretas: '',
    });
    const [funcExautores, setFuncExautores] = useState({
        funcExautores: '',
    });

    const handleObservacaoChange = (newText) => {
        setText(newText);
    };

    const updateObservacao = (newText) => {
        handleObservacaoChange(newText);
    };

    const [choicesPos, setChoicesPos] = useState({
        situacao: '',
        modo: '',
        nivelAgua: '',
        pressaoCloro: '',
        correnteAnoidica: '',
        tempAgua: '',
    });

    const [choicesPre, setChoicesPre] = useState({
        situacao: '',
        modo: '',
        nivelAgua: '',
        pressaoCloro: '',
        correnteAnoidica: '',
        tempAgua: '',
    });

    const [choicesByPass, setChoicesByPass] = useState({
        situacao: '',
        modo: '',
        nivelAgua: '',
        pressaoCloro: '',
        correnteAnoidica: '',
        tempAgua: '',
    });

    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, tabSelected === 'EvaporadorByPass' && styles.selectedTab]}
                    onPress={() => setTabSelected('EvaporadorByPass')}
                >
                    <Text style={[styles.tabText, tabSelected === 'EvaporadorByPass' && styles.selectedTabText]}>Evaporador By Pass</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabSelected === 'EvaporadorPre' && styles.selectedTab]}
                    onPress={() => setTabSelected('EvaporadorPre')}
                >
                    <Text style={[styles.tabText, tabSelected === 'EvaporadorPre' && styles.selectedTabText]}>Evaporador Pré</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabSelected === 'EvaporadorPos' && styles.selectedTab]}
                    onPress={() => setTabSelected('EvaporadorPos')}
                >
                    <Text style={[styles.tabText, tabSelected === 'EvaporadorPos' && styles.selectedTabText]}>Evaporador Pós</Text>
                </TouchableOpacity>

                {/* Adicione outras abas conforme necessário */}
            </View>
            <ScrollView style={styles.content}>
                {tabSelected === 'EvaporadorByPass' && (
                    <EvaporadorByPass
                        choices={choicesByPass}
                        setChoices={setChoicesByPass}
                    />
                )}
                {tabSelected === 'EvaporadorPre' && (
                    <EvaporadorPre
                        choices={choicesPre}
                        setChoices={setChoicesPre}
                    />
                )}
                {tabSelected === 'EvaporadorPos' && (
                    <EvaporadorPos
                        choices={choicesPos}
                        setChoices={setChoicesPos}
                    />
                )}
                <QuestionContainer style={styles.questionContainer}>
                    <ChoseOptions style={styles.Options}>
                        <TextComponent style='textQuestoes'>Problemas com os Exaustores?</TextComponent>
                    </ChoseOptions>
                    <OpcaoSelecao
                        value="Sim"
                        selectedValue={funcExautores}
                        onValueChange={(value) => setFuncExautores(value)}
                    />
                    <OpcaoSelecao
                        value="Não"
                        selectedValue={funcExautores}
                        onValueChange={(value) => setFuncExautores(value)}
                    />
                </QuestionContainer>

                <QuestionContainer style={styles.conteinerSituacao}>
                    <ChoseOptions style={styles.Options}>
                        <TextComponent style='textQuestoes'>Operação dos Exaustores:</TextComponent>
                    </ChoseOptions>

                    <Picker
                        selectedValue={exaustores}
                        onValueChange={(itemValue) = setExautores}
                        style={styles.Situacaopicker}
                    >
                        <Picker.Item label="Modo:" />
                        <Picker.Item label="Manual" value="Manual" />
                        <Picker.Item label="Automático" value="Automático" />

                    </Picker>


                </QuestionContainer>

                <QuestionContainer style={styles.conteinerSituacao}>
                    <ChoseOptions style={styles.Options}>
                        <TextComponent style='textQuestoes'>Carretas: </TextComponent>
                    </ChoseOptions>
                    <Picker
                        selectedValue={carretas}
                        onValueChange={(itemValue) = setCarretas}
                        style={styles.Situacaopicker}
                    >
                        <Picker.Item label="Modo:" />
                        <Picker.Item label="Manual" value="Manual" />
                        <Picker.Item label="Automático" value="Automático" />

                    </Picker>
                </QuestionContainer>

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
    Situacaopicker: {
        backgroundColor: '#0C5AA5',
        width: '30%',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: -55,
    },
    pickerBooster: {
        backgroundColor: '#0C5AA5',
        width: '100%',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 50,
    },
});
