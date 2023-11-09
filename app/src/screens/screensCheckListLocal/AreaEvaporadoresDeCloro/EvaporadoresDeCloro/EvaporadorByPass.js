import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';


import EvaporadorGenerico from './EvaporadorGenerico';
import OpcaoSelecao from './../../../../components/OpcaoSelecao'
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../../components/Layout';
import Observacao from '../../../../components/Observacao';
import TextComponent from '../../../../components/TextComponent';


export function EvaporadorByPass({ choices, setChoices, updateObservacao }) {

    const {
        valPressBy,
        regPressBy,
    } = choices

    const setValPressBy = (value) => {
        setChoices({ ...choices, valPressBy: value });
    };

    const setRegPressBy = (value) => {
        setChoices({ ...choices, regPressBy: value });
    };

    return (
        <View>
            <EvaporadorGenerico
                choices={choices}
                setChoices={setChoices}
                title="Evaporador By Pass"
            />

            <View style={styles.questionContainer}>
                <View style={styles.OptionsBooster}>
                    <ChoseOptions style={styles.Options}>
                        <TextComponent style='textQuestoes'>Válvulas Redutoras De Pressão</TextComponent>
                    </ChoseOptions>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        value={valPressBy}
                        onChangeText={(number) => setValPressBy(number)}
                    />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.OptionsBooster}>
                    <ChoseOptions style={styles.Options}>
                        <TextComponent style='textQuestoes'>Reguladores De Vácuo</TextComponent>
                    </ChoseOptions>
                    <TextInput
                        style={styles.input}
                        placeholder=""
                        value={regPressBy}
                        onChangeText={(number) => setRegPressBy(number)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    OptionsBooster: {
        width: '100%',
        backgroundColor: '#fff7',
        padding: 5,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    conteinerOptionsBooster: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 5,
        padding: 15,
        marginBottom: 15,

    },
    choses: {
        width: '30%',
        flexDirection: 'column',
        backgroundColor: '#D2D2D2',
        borderRadius: 5,
        padding: 10,
    },
    selectOption: {
        justifyContent: 'space-around',
        fontSize: 20,
        flexDirection: 'row',
        // Estilos do texto da pergunta
    },
    Options: {
        alignItems: 'center',
        marginBottom: 10,
    },
    subtitulo: {
        alignItems: 'center',
        marginBottom: 10,
    },
    inputBooster: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
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
})