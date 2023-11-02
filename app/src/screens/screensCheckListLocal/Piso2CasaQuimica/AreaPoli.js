import React, { useState } from 'react';
import {StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


import OpcaoSelecao from '../../../components/OpcaoSelecao';
import {
    Conteiner,
    QuestionContainer,
    ChoseOptions,
} from '../../../components/Layout';

import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';

export default function AreaPoli({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaPoli] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaPoli(newText);
        updateObservacao(newText);
    }

    const { iluminacaoBombas,
        aguaDiluicao,
        vazamentoTubulacoes,
        limpezaEquipamentos,
        alimentacaoAgua,
        iluminacaoPiso1,
        iluminacaoPiso2,
        calhaAplicacao,
        calhaDosagemSolucao,
    } = choices;

    const setIluminacaoBombas = (value) => {
        setChoices({ ...choices, iluminacaoBombas: value });
    };

    const setAguaDiluicao = (value) => {
        setChoices({ ...choices, aguaDiluicao: value });
    };

    const setVazamentoTubulacoes = (value) => {
        setChoices({ ...choices, vazamentoTubulacoes: value });
    };

    const setLimpezaEquipamentos = (value) => {
        setChoices({ ...choices, limpezaEquipamentos: value });
    };

    const setIluminacaoPiso1 = (value) => {
        setChoices({ ...choices, iluminacaoPiso1: value });
    };

    const setIluminacaoPiso2 = (value) => {
        setChoices({ ...choices, iluminacaoPiso2: value });
    };

    const setCalhaAplicacao = (value) => {
        setChoices({ ...choices, calhaAplicacao: value });
    };

    const setCalhaDosagemSolucao = (value) => {
        setChoices({ ...choices, calhaDosagemSolucao: value });
    };

    return (
        <Conteiner style={styles.conteiner}>
            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Há Iluminação no Local das Bombas?</TextComponent>
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
                    <TextComponent style='textQuestoes'>Problema na Água de Diluição da Linha Ceilândia?</TextComponent>
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
                    <TextComponent style='textQuestoes'>Há Vazamentos na Tubulação das bombas?</TextComponent>
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
                    <TextComponent style='textQuestoes'>Equipamentos Limpos?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={limpezaEquipamentos}
                    onValueChange={(value) => setLimpezaEquipamentos(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={limpezaEquipamentos}
                    onValueChange={(value) => setLimpezaEquipamentos(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Alimentação da Água: </TextComponent>
                </ChoseOptions>
                <Picker
                    selectedValue={alimentacaoAgua}
                    onValueChange={(itemValue) => setChoices({ ...choices, situacao: itemValue })}
                    style={styles.Situacaopicker}
                >
                    <Picker.Item label="Equipamento:" />
                    <Picker.Item label="Linha Ceilândia" value="Linha Ceilândia" />
                    <Picker.Item label="VC 1A" value="VC 1A" />
                    <Picker.Item label="VC 1B" value="VC 1B" />
                    <Picker.Item label="Elevado" value="Elevado" />
                </Picker>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Há Iluminação no piso 1º CQ I?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={iluminacaoPiso1}
                    onValueChange={(value) => setIluminacaoPiso1(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={iluminacaoPiso1}
                    onValueChange={(value) => setIluminacaoPiso1(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Há Iluminação no piso 2º CQ I?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={iluminacaoPiso2}
                    onValueChange={(value) => setIluminacaoPiso2(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={iluminacaoPiso2}
                    onValueChange={(value) => setIluminacaoPiso2(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito na calha de aplicação de Polieletrolito?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={calhaAplicacao}
                    onValueChange={(value) => setCalhaAplicacao(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={calhaAplicacao}
                    onValueChange={(value) => setCalhaAplicacao(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Calha de Dosagem de Solução Limpa?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={calhaDosagemSolucao}
                    onValueChange={(value) => setCalhaDosagemSolucao(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={calhaDosagemSolucao}
                    onValueChange={(value) => setCalhaDosagemSolucao(value)}
                />
            </QuestionContainer>

            <TextComponent style='textQuestoes'>Observações:</TextComponent>
            <QuestionContainer style={styles.questionContainer}>
                <Observacao value={text} onChange={handleObservacaoChange} />
            </QuestionContainer>
            {/* Repita o padrão para outras perguntas */}
        </Conteiner >
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