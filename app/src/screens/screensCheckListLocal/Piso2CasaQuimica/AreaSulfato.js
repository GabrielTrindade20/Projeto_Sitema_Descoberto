import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import OpcaoSelecao from '../../../components/OpcaoSelecao';
import {
    Conteiner,
    QuestionContainer,
    ChoseOptions,
} from '../../../components/Layout';

import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';

export default function AreaSulfato({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaSulfato] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaSulfato(newText);
        updateObservacao('AreaSulfato', newText);
    };

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
        <Conteiner style={styles.conteiner}>
            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Caixa de solução de sulfato fechada?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={caixasolucao}
                    onValueChange={(value) => setCaixasolucao(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={caixasolucao}
                    onValueChange={(value) => setCaixasolucao(value)}

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
                    <TextComponent style='textQuestoes'>Limpeza do local ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={limpezaLocal}
                    onValueChange={(value) => setLimpezaLocal(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={limpezaLocal}
                    onValueChange={(value) => setLimpezaLocal(value)}
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

            <TextComponent style='textQuestoes'>Observações:</TextComponent>
            <QuestionContainer style={styles.questionContainer}>
                <Observacao value={text} onChange={handleObservacaoChange} />
            </QuestionContainer>
        </Conteiner >
    );
}

const styles = StyleSheet.create({});
