import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import OpcaoSelecao from '../../../components/OpcaoSelecao';

export default function AreaPac({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaPac] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaPac(newText);
        updateObservacao(newText);
    }

    const { situacao,
        iluminacaoBombas,
        calhaDeDosagem,
        aguaDiluicao,
        vazamentoTubulacoes,
        limpezaEquipamentos,
        DescargaPac,
        TranferenciaPac,
    } = choices;

    const setIluminacaoBombas = (value) => {
        setChoices({ ...choices, iluminacaoBombas: value });
    };

    const setCalhaDeDosagem = (value) => {
        setChoices({ ...choices, calhaDeDosagem: value });
    };

    const setAguaDiluicao = (value) => {
        setChoices({ ...choices, aguaDiluicao: value });
    };

    const setVazamentoTubulacoes = (value) => {
        setChoices({ ...choices, vazamentoTubulacoes: value });
    };

    const setLimpezaEquipamento = (value) => {
        setChoices({ ...choices, limpezaLocal: value });
    };


    return (
        <View style={styles.conteiner}>
            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Situação: </Text>
                </View>
                <Picker
                    selectedValue={situacao}
                    onValueChange={(itemValue) => setChoices({ ...choices, situacao: itemValue })}
                    style={styles.picker}
                >
                    <Picker.Item label="Equpamento:" />
                    <Picker.Item label="Linha Ceilândia" value="Linha Ceilândia" />
                    <Picker.Item label="VC 1A" value="VC 1A" />
                    <Picker.Item label="VC 1B" value="VC 1B" />
                    <Picker.Item label="Elevado" value="Elevado" />
                </Picker>
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
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Limpeza do local ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Limpeza do local ok?"
                    value="Sim"
                    selectedValue={limpezaEquipamentos}
                    onValueChange={(value) => setLimpezaElimpezaEquipamentos(value)}
                />
                <OpcaoSelecao
                    label="Limpeza do local ok?"
                    value="Não"
                    selectedValue={limpezaEquipamentos}
                    onValueChange={(value) => setLimpezaEquipamento(value)}
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

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Motores em Uso:</Text>
                <View>
                    <Picker
                        selectedValue={DescargaPac}
                        onValueChange={(itemValue) => setChoices({ ...choices, DescargaPac: itemValue })}
                        style={styles.picker}
                    >
                        <Picker.Item label="Equpamento:" />
                        <Picker.Item label="MB 6A" value="MB 6A" />
                        <Picker.Item label="MB 6B" value="MB 6B" />
                    </Picker>
                </View>

                <View>
                    <Picker
                        selectedValue={TranferenciaPac}
                        onValueChange={(itemValue) => setChoices({ ...choices, TranferenciaPac: itemValue })}
                        style={styles.picker}
                    >
                        <Picker.Item label="Equpamento:" />
                        <Picker.Item label="MB 7A" value="MB 7A" />
                        <Picker.Item label="MB 7B" value="MB 7B" />                      
                    </Picker>
                </View>

            </View>


            {/* Repita o padrão para outras perguntas */}
        </View>
    );
}


const styles = StyleSheet.create({
    conteiner: {
        padding: 10,
    },
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 20,
    },
    questionText: {
        flexGrow: 1,
        fontSize: 18,
        // Estilos do texto da pergunta
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
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
    picker: {
        backgroundColor: '#0C5AA5',
        width: '30%',
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
});