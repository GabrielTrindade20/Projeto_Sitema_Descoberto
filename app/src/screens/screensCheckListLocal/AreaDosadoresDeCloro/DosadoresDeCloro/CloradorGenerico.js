import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import OpcaoSelecao from '../../../../components/OpcaoSelecao'
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../../components/Layout';
import TextComponent from '../../../../components/TextComponent';

export default function CloradorGenerico({
    choices,
    setChoices,
    title,
}) {


    const {
        situacao,
        modo,
        pressaoVacuo,
        dosagem,
        limpesaRotametro,
    } = choices;

    const setPressaoVacuo = (value) => {
        setChoices({ ...choices, pressaoVacuo: value });
    };

    const setDosagem = (value) => {
        setChoices({ ...choices, dosagem: value });
    };

    const setLimpesaRotametro = (value) => {
        setChoices({ ...choices, limpesaRotametro: value });
    };

    return (
        <Conteiner style={styles.conteiner}>
            <View style={styles.conteinerSituacao}>
                <ChoseOptions style={styles.ChoseOptions}>
                    <TextComponent style='textQuestoes'>Situação: </TextComponent>
                </ChoseOptions>
                <Picker
                    selectedValue={situacao}
                    onValueChange={(itemValue) =>
                        setChoices({ ...choices, situacao: itemValue })
                    }
                    style={styles.Situacaopicker}
                >
                    <Picker.Item label="Situação:" />
                    <Picker.Item label="Operando" value="Operando" />
                    <Picker.Item label="Desligado" value="Desligado" />
                </Picker>
            </View>

            <View style={styles.conteinerSituacao}>
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
            </View>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.ChoseOptions}>
                    <TextComponent style='textQuestoes'>Pressão de vácuo</TextComponent>
                </ChoseOptions>
                <TextInput
                    style={styles.input}
                    placeholder="kg/h"
                    value={pressaoVacuo}
                    onChangeText={(number) => setPressaoVacuo(number)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.ChoseOptions}>
                    <TextComponent style='textQuestoes'>Dosagem kg/h</TextComponent>
                </ChoseOptions>
                <TextInput
                    style={styles.input}
                    placeholder="kg/h"
                    value={dosagem}
                    onChangeText={(number) => setDosagem(number)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.ChoseOptions}>
                    <TextComponent style='textQuestoes'>Rotâmetro Limpo?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Rotâmetro Limpo?"
                    value="Sim"
                    selectedValue={limpesaRotametro}
                    onValueChange={(value) => setLimpesaRotametro(value)}
                />
                <OpcaoSelecao
                    label="Rotâmetro Limpo?"
                    value="Não"
                    selectedValue={limpesaRotametro}
                    onValueChange={(value) => setLimpesaRotametro(value)}
                />
            </QuestionContainer>


            {/* Repita o padrão para outras perguntas */}
        </Conteiner>

    );
}


const styles = StyleSheet.create({
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