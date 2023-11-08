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
                    <TextComponent style='textQuestoes'>Defeito no Turbidímetro de água de retorno</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={turbidimetroAguaRetorno}
                    onValueChange={(value) => setTurbidimetroAguaRetorno(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={turbidimetroAguaRetorno}
                    onValueChange={(value) => setTurbidimetroAguaRetorno(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.conteinerSituacao}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Descarregamento de sulfato: </TextComponent>
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
                    <TextComponent style='textQuestoes'>Transferência de sulfato: </TextComponent>
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
    
    Situacaopicker: {
        backgroundColor: '#0C5AA5',
        width: '30%',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: -55,
    },
});