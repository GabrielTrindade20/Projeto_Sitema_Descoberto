import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import OpcaoSelecao from '../../../components/OpcaoSelecao';
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';

export default function ClimaTempo({ choices, setChoices, updateObservacao }) {
    const [text, setTextoClimaTempo] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoClimaTempo(newText);
        updateObservacao(newText);
    }

    const { leituraPluviometrica,
        birutas,
    } = choices;

    const setLeituraPluviometrica = (value) => {
        setChoices({ ...choices, leituraPluviometrica: value });
    };

    const setBirutas = (value) => {
        setChoices({ ...choices, birutas: value });
    };

    return (
        <Conteiner style={styles.conteiner}>
            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Leitura pluviométrica</TextComponent>
                </ChoseOptions>
                <TextInput
                    style={styles.input}
                    placeholder="mm"
                    value={leituraPluviometrica}
                    onChangeText={(number) => setDosagem(number)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito nas Birutas?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={birutas}
                    onValueChange={(value) => setBirutas(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={birutas}
                    onValueChange={(value) => setBirutas(value)}
                />
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
});