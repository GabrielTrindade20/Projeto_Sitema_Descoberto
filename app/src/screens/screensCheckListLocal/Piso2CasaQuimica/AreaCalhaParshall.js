import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import OpcaoSelecao from '../../../components/OpcaoSelecao';
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';

export default function AreaCalhaParshall({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaCalhaParshall] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaCalhaParshall(newText);
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
        <Conteiner style={styles.conteiner}>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Bomba de amostragem água bruta ok</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={bombaAguaBruta}
                    onValueChange={(value) => setBombaAguaBruta(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={bombaAguaBruta}
                    onValueChange={(value) => setBombaAguaBruta(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Limpeza da pré alcalinização ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={limpezaPreAlcalinizacao}
                    onValueChange={(value) => setLimpezaPreAlcalinizacao(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={limpezaPreAlcalinizacao}
                    onValueChange={(value) => setLimpezaPreAlcalinizacao(value)}
                />
            </QuestionContainer>


            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Bomba de amostragem água coagulada ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={bombaAguaCoagulada}
                    onValueChange={(value) => setBombaAguaCoagulada(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={bombaAguaCoagulada}
                    onValueChange={(value) => setBombaAguaCoagulada(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Problemas com o Analisador de cargas CHEMTRAC?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={analizadorChemtrac}
                    onValueChange={(value) => setAnalizadorChemtrac(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={analizadorChemtrac}
                    onValueChange={(value) => setAnalizadorChemtrac(value)}
                />
            </QuestionContainer>

            <TextComponent style='textQuestoes'>Observações:</TextComponent>
            <QuestionContainer style={styles.questionContainer}>
                <Observacao value={text} onChange={handleObservacaoChange} />
            </QuestionContainer>
            {/* Repita o padrão para outras perguntas */}
        </Conteiner>
    );
}

const styles = StyleSheet.create({});