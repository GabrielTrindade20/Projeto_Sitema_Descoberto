import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import OpcaoSelecao from '../../../components/OpcaoSelecao';

export default function AreaPac({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaPac] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaPac(newText);
        updateObservacao(newText);
    }

    const { bombaAguaBruta,
        limpezaPreAlcalinizacao,
        bombaAguaCoagulada,
        analizadorChemtrac,
    } = choices;


    const setBombaAguaBruta = (value) => {
        setChoices({ ...choices, bombaAguaBruta: value });
    };

    const setLimpezaPreAlcalinizacao = (value) => {
        setChoices({ ...choices, limpezaPreAlcalinizacao: value });
    };

    const setBombaAguaCoagulada = (value) => {
        setChoices({ ...choices, bombaAguaCoagulada: value });
    };

    const setAnalizadorChemtrac = (value) => {
        setChoices({ ...choices, analizadorChemtrac: value });
    };

    return (
        <View style={styles.conteiner}>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Bomba de amostragem água bruta ok</Text>
                </View>
                <OpcaoSelecao
                    label="Bomba de amostragem água bruta ok"
                    value="Sim"
                    selectedValue={bombaAguaBruta}
                    onValueChange={(value) => setBombaAguaBruta(value)}
                />
                <OpcaoSelecao
                    label="Bomba de amostragem água bruta ok"
                    value="Não"
                    selectedValue={bombaAguaBruta}
                    onValueChange={(value) => setBombaAguaBruta(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Limpeza da pré alcalinização ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Limpeza da pré alcalinização ok?"
                    value="Sim"
                    selectedValue={limpezaPreAlcalinizacao}
                    onValueChange={(value) => setLimpezaPreAlcalinizacao(value)}
                />
                <OpcaoSelecao
                    label="Limpeza da pré alcalinização ok?"
                    value="Não"
                    selectedValue={limpezaPreAlcalinizacao}
                    onValueChange={(value) => setLimpezaPreAlcalinizacao(value)}
                />
            </View>


            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Bomba de amostragem água coagulada ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Bomba de amostragem água coagulada ok?"
                    value="Sim"
                    selectedValue={bombaAguaCoagulada}
                    onValueChange={(value) => setBombaAguaCoagulada(value)}
                />
                <OpcaoSelecao
                    label="Bomba de amostragem água coagulada ok?"
                    value="Não"
                    selectedValue={bombaAguaCoagulada}
                    onValueChange={(value) => setBombaAguaCoagulada(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Problemas com o Analisador de cargas CHEMTRAC?</Text>
                </View>
                <OpcaoSelecao
                    label="Analisador de cargas CHEMTRAC"
                    value="Sim"
                    selectedValue={analizadorChemtrac}
                    onValueChange={(value) => setAnalizadorChemtrac(value)}
                />
                <OpcaoSelecao
                    label="Analisador de cargas CHEMTRAC"
                    value="Não"
                    selectedValue={analizadorChemtrac}
                    onValueChange={(value) => setAnalizadorChemtrac(value)}
                />
            </View>


            <View style={styles.questionContainer}>
                <View style={styles.conteinerObservacao}>
                    <Text style={styles.questionText}>Observações:</Text>
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
});