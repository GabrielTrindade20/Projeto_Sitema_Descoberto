import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import OpcaoSelecao from '../../../components/OpcaoSelecao';

export default function AreaSulfato({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaSulfato] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaSulfato(newText);
        updateObservacao(newText);
    }

    const { caixasolucao,
        calhaDeDosagem,
        aguaDiluicao,
        iluminacaoBombas,
        limpezaLocal,
        vazamentoTubulacoes,
    } = choices;

    const setCaixasolucao = (value) => {
        setChoices({ ...choices, caixasolucao: value });
    };

    const setCalhaDeDosagem = (value) => {
        setChoices({ ...choices, calhaDeDosagem: value });
    };

    const setAguaDiluicao = (value) => {
        setChoices({ ...choices, aguaDiluicao: value });
    };

    const setIluminacaoBombas = (value) => {
        setChoices({ ...choices, iluminacaoBombas: value });
    };

    const setLimpezaLocal = (value) => {
        setChoices({ ...choices, limpezaLocal: value });
    };

    const setVazamentoTubulacoes = (value) => {
        setChoices({ ...choices, vazamentoTubulacoes: value });
    };

    return (
        <View style={styles.conteiner}>
            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Caixa de solução de sulfato fechada?</Text>
                </View>
                <OpcaoSelecao
                    label="Caixa de solução de sulfato fechada?"
                    value="Sim"
                    selectedValue={caixasolucao}
                    onValueChange={(value) => setCaixasolucao(value)}
                />
                <OpcaoSelecao
                    label="Caixa de solução de sulfato fechada?"
                    value="Não"
                    selectedValue={caixasolucao}
                    onValueChange={(value) => setCaixasolucao(value)}

                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Calha de dosagem de solução limpa?</Text>
                </View>
                <OpcaoSelecao
                    label="Calha de dosagem de solução limpa?"
                    value="Sim"
                    selectedValue={calhaDeDosagem}
                    onValueChange={(value) => setCalhaDeDosagem(value)}
                />
                <OpcaoSelecao
                    label="Calha de dosagem de solução limpa?"
                    value="Não"
                    selectedValue={calhaDeDosagem}
                    onValueChange={(value) => setCalhaDeDosagem(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Água de diluição ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Água de diluição ok?"
                    value="Sim"
                    selectedValue={aguaDiluicao}
                    onValueChange={(value) => setAguaDiluicao(value)}
                />
                <OpcaoSelecao
                    label="Água de diluição ok?"
                    value="Não"
                    selectedValue={aguaDiluicao}
                    onValueChange={(value) => setAguaDiluicao(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Iluminação das bombas ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Iluminação das bombas ok?"
                    value="Sim"
                    selectedValue={iluminacaoBombas}
                    onValueChange={(value) => setIluminacaoBombas(value)}
                />
                <OpcaoSelecao
                    label="Iluminação das bombas ok?"
                    value="Não"
                    selectedValue={iluminacaoBombas}
                    onValueChange={(value) => setIluminacaoBombas(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Limpeza do local ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Limpeza do local ok?"
                    value="Sim"
                    selectedValue={limpezaLocal}
                    onValueChange={(value) => setLimpezaLocal(value)}
                />
                <OpcaoSelecao
                    label="Limpeza do local ok?"
                    value="Não"
                    selectedValue={limpezaLocal}
                    onValueChange={(value) => setLimpezaLocal(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Há vazamentos nas MB’s de tubulações?</Text>
                </View>
                <OpcaoSelecao
                    label="Há vazamentos nas MB’s de tubulações?"
                    value="Sim"
                    selectedValue={vazamentoTubulacoes}
                    onValueChange={(value) => setVazamentoTubulacoes(value)}
                />
                <OpcaoSelecao
                    label="Há vazamentos nas MB’s de tubulações?"
                    value="Não"
                    selectedValue={vazamentoTubulacoes}
                    onValueChange={(value) => setVazamentoTubulacoes(value)}
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
    conteinerObservacao:{
        width: '100%',

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
