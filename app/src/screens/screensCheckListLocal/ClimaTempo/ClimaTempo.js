import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import OpcaoSelecao from '../../../components/OpcaoSelecao';
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
        <View style={styles.conteiner}>


            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <TextComponent style='textQuestoes'>Leitura pluviométrica</TextComponent>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="mm"
                    value={leituraPluviometrica}
                    onChangeText={(number) => setDosagem(number)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito nas Birutas?</TextComponent>
                </View>
                <OpcaoSelecao
                    label="Defeito nas Birutas?"
                    value="Sim"
                    selectedValue={birutas}
                    onValueChange={(value) => setBirutas(value)}
                />
                <OpcaoSelecao
                    label="Defeito nas Birutas?"
                    value="Não"
                    selectedValue={birutas}
                    onValueChange={(value) => setBirutas(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.conteinerObservacao}>
                    <TextComponent style='textQuestoes'>Observações:</TextComponent>
                    <TextInput
                        style={styles.textInput}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={handleObservacaoChange} // Use a função de atualização
                        defaultValue={text}
                        placeholder="Digite sua observação aqui"
                    />
                </View>
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