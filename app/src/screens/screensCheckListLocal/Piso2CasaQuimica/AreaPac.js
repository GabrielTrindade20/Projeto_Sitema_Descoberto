import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import OpcaoSelecao from '../../../components/OpcaoSelecao';
import {
    Conteiner,
    QuestionContainer,
    ChoseOptions,
} from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';

import {
    ConteinerAba,
    ConteinerText,
    ConteinerContent,
    ConteinerChose,
    Options
} from '../../../components/LayoutSubAba'


export default function AreaPac({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaPac] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaPac(newText);
        updateObservacao(newText);
    }


    const {
        situacao,
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
        setChoices({ ...choices, limpezaEquipamentos: value });
    };


    return (
        <Conteiner style={styles.conteiner}>
            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Situação: </TextComponent>
                </ChoseOptions>
                <Picker
                    selectedValue={situacao}
                    onValueChange={(itemValue) => setChoices({ ...choices, situacao: itemValue })}
                    style={styles.Situacaopicker}
                >
                    <Picker.Item label="Situação:" />
                    <Picker.Item label="Operando" value="Operando" />
                    <Picker.Item label="Desligado" value="Desligado" />

                </Picker>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Iluminação das bombas ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={iluminacaoBombas}
                    onValueChange={(value) => setIluminacaoBombas(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={iluminacaoBombas}
                    onValueChange={(value) => setIluminacaoBombas(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Calha de dosagem de solução limpa?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={calhaDeDosagem}
                    onValueChange={(value) => setCalhaDeDosagem(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={calhaDeDosagem}
                    onValueChange={(value) => setCalhaDeDosagem(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Água de diluição ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={aguaDiluicao}
                    onValueChange={(value) => setAguaDiluicao(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={aguaDiluicao}
                    onValueChange={(value) => setAguaDiluicao(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Há vazamentos nas MB’s de tubulações?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={vazamentoTubulacoes}
                    onValueChange={(value) => setVazamentoTubulacoes(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={vazamentoTubulacoes}
                    onValueChange={(value) => setVazamentoTubulacoes(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Limpeza nos equipamentos ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={limpezaEquipamentos}
                    onValueChange={(value) => setLimpezaEquipamento(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={limpezaEquipamentos}
                    onValueChange={(value) => setLimpezaEquipamento(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ConteinerAba style={styles.conteinerAba}>
                    <ConteinerText style={styles.conteinerText}>
                        <TextComponent style='textSubTitulo'>Booster</TextComponent>
                    </ConteinerText>

                    <ConteinerContent style={styles.layoutGridRow}>
                        <ConteinerChose style={styles.conteinerContent}>
                            <TextComponent style='textQuestoes'>Descarga de Pac:</TextComponent>
                            <Options style={styles.options}>
                                <Picker
                                    selectedValue={DescargaPac}
                                    onValueChange={(itemValue) => setChoices({ ...choices, DescargaPac: itemValue })}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="Equpamento:" />
                                    <Picker.Item label="MB 6A" value="MB 6A" />
                                    <Picker.Item label="MB 6B" value="MB 6B" />
                                </Picker>
                            </Options>
                        </ConteinerChose>
                        
                        <ConteinerChose style={styles.conteinerChose}>
                            <TextComponent style='textQuestoes2'>Tranferencia de Pac:</TextComponent>
                            <Options style={styles.options}>
                                <Picker
                                    selectedValue={TranferenciaPac}
                                    onValueChange={(itemValue) => setChoices({ ...choices, TranferenciaPac: itemValue })}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="Equpamento:" />
                                    <Picker.Item label="MB 7A" value="MB 7A" />
                                    <Picker.Item label="MB 7B" value="MB 7B" />
                                </Picker>
                            </Options>
                        </ConteinerChose>
                        
                    </ConteinerContent>
                </ConteinerAba>
            </QuestionContainer>

            <TextComponent style='textQuestoes'>Observações:</TextComponent>
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
    picker: {
        backgroundColor: '#0C5AA5',
        width: '100%',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',

    },
});