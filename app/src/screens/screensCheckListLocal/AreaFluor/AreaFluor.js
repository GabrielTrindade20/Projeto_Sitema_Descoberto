import React, { useState } from 'react';
import { Text, StyleSheet} from 'react-native';

import OpcaoSelecao from './../../../components/OpcaoSelecao'
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';

export default function AreaFluor({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaFluor] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaFluor(newText);
        updateObservacao(newText);
    }

    const {
        tanqueNeutralizacao,
        registroAlimentacao,
        areaContencao,
        limpezaAreaContecao,
        salaDosagem,
        vazamentos,
        iluminacaoArea,
        registroAgua,
        calhaContencao,
        chuveiroEmergencia,
    } = choices;



    const setTanqueNeutralizacao = (value) => {
        setChoices({ ...choices, tanqueNeutralizacao: value });
    };

    const setRegistroAlimentacao = (value) => {
        setChoices({ ...choices, registroAlimentacao: value });
    };

    const setAreaContencao = (value) => {
        setChoices({ ...choices, areaContencao: value });
    };
    const setLimpezaAreaContecao = (value) => {
        setChoices({ ...choices, limpezaAreaContecao: value });
    };

    const setSalaDosagem = (value) => {
        setChoices({ ...choices, salaDosagem: value });
    };

    const setVazamentos = (value) => {
        setChoices({ ...choices, vazamentos: value });
    };

    const setIluminacaoArea = (value) => {
        setChoices({ ...choices, iluminacaoArea: value });
    };

    const setRegistroAgua = (value) => {
        setChoices({ ...choices, registroAgua: value });
    };

    const setCalhaContencao = (value) => {
        setChoices({ ...choices, calhaContencao: value });
    };

    const setChuveiroEmergencia = (value) => {
        setChoices({ ...choices, chuveiroEmergencia: value });
    };


    return (
        <Conteiner style={styles.conteiner}>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.ChoseOptions}>
                    <TextComponent style='textQuestoes'>Tanque de neutralização limpo?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Tanque de neutralização limpo?"
                    value="Sim"
                    selectedValue={tanqueNeutralizacao}
                    onValueChange={(value) => setTanqueNeutralizacao(value)}
                />
                <OpcaoSelecao
                    label="Tanque de neutralização limpo?"
                    value="Não"
                    selectedValue={tanqueNeutralizacao}
                    onValueChange={(value) => setTanqueNeutralizacao(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Registros de alimentação dos silos fechados?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Registros de alimentação dos silos fechados?"
                    value="Sim"
                    selectedValue={registroAlimentacao}
                    onValueChange={(value) => setRegistroAlimentacao(value)}
                />
                <OpcaoSelecao
                    label="Registros de alimentação dos silos fechados?"
                    value="Não"
                    selectedValue={registroAlimentacao}
                    onValueChange={(value) => setRegistroAlimentacao(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Registro da área de contenção fechados?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Registro da área de contenção fechados?"
                    value="Sim"
                    selectedValue={areaContencao}
                    onValueChange={(value) => setAreaContencao(value)}
                />
                <OpcaoSelecao
                    label="Registro da área de contenção fechados?"
                    value="Não"
                    selectedValue={areaContencao}
                    onValueChange={(value) => setAreaContencao(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Área de contenção limpa?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Área de contenção limpa?"
                    value="Sim"
                    selectedValue={limpezaAreaContecao}
                    onValueChange={(value) => setLimpezaAreaContecao(value)}
                />
                <OpcaoSelecao
                    label="Área de contenção limpa?"
                    value="Não"
                    selectedValue={limpezaAreaContecao}
                    onValueChange={(value) => setLimpezaAreaContecao(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Sala de dosagem limpa?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Sala de dosagem limpa?"
                    value="Sim"
                    selectedValue={salaDosagem}
                    onValueChange={(value) => setSalaDosagem(value)}
                />
                <OpcaoSelecao
                    label="Sala de dosagem limpa?"
                    value="Não"
                    selectedValue={salaDosagem}
                    onValueChange={(value) => setSalaDosagem(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Há vazamentos?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Há vazamentos?"
                    value="Sim"
                    selectedValue={vazamentos}
                    onValueChange={(value) => setVazamentos(value)}
                />
                <OpcaoSelecao
                    label="Há vazamentos?"
                    value="Não"
                    selectedValue={vazamentos}
                    onValueChange={(value) => setVazamentos(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Iluminação área ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Iluminação área ok?"
                    value="Sim"
                    selectedValue={iluminacaoArea}
                    onValueChange={(value) => setIluminacaoArea(value)}
                />
                <OpcaoSelecao
                    label="Iluminação área ok?"
                    value="Não"
                    selectedValue={iluminacaoArea}
                    onValueChange={(value) => setIluminacaoArea(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Registro de água para os silos fechados?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Registro de água para os silos fechados?"
                    value="Sim"
                    selectedValue={registroAgua}
                    onValueChange={(value) => setRegistroAgua(value)}
                />
                <OpcaoSelecao
                    label="Registro de água para os silos fechados?"
                    value="Não"
                    selectedValue={registroAgua}
                    onValueChange={(value) => setRegistroAgua(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>A calha de contenção está limpa?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="A calha de contenção está limpa?"
                    value="Sim"
                    selectedValue={calhaContencao}
                    onValueChange={(value) => setCalhaContencao(value)}
                />
                <OpcaoSelecao
                    label="A calha de contenção está limpa?"
                    value="Não"
                    selectedValue={calhaContencao}
                    onValueChange={(value) => setCalhaContencao(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Funcionamento do chuveiro de emergência ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    label="Funcionamento do chuveiro de emergência ok?"
                    value="Sim"
                    selectedValue={chuveiroEmergencia}
                    onValueChange={(value) => setChuveiroEmergencia(value)}
                />
                <OpcaoSelecao
                    label="Funcionamento do chuveiro de emergência ok?"
                    value="Não"
                    selectedValue={chuveiroEmergencia}
                    onValueChange={(value) => setChuveiroEmergencia(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <Observacao value={text} onChange={handleObservacaoChange} />
            </QuestionContainer>
            {/* Repita o padrão para outras perguntas */}
        </Conteiner>
    );
}


const styles = StyleSheet.create({
    questionText: {
        fontSize: 20,
        flexDirection: 'row',
        // Estilos do texto da pergunta
    },
});