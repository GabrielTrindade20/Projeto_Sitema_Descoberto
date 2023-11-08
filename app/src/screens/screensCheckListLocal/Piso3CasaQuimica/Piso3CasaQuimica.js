import React, { useState } from 'react';
import { Text, StyleSheet, TextInput } from 'react-native';
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

    const { situacao,
        iluminacaoArea,
        limpezaArea,
        silosTampados,
        operacaoTalhaManual,
        conteineresVazios,
        vazamentoTubulacoes,
        hasteTanqueSulfato,
        chuveiroDeEmergencia,
        preparoPiaPoliA,
        preparoPiaPoliB,
        preparoPiaPoliC,
    } = choices;

    const setIluminacaoArea = (value) => {
        setChoices({ ...choices, iluminacaoArea: value });
    };

    const setLimpezaArea = (value) => {
        setChoices({ ...choices, limpezaArea: value });
    };

    const setSilosTampados = (value) => {
        setChoices({ ...choices, silosTampados: value });
    };

    const setOperacaoTalhaManual = (value) => {
        setChoices({ ...choices, operacaoTalhaManual: value });
    };

    const setConteineresVazios = (value) => {
        setChoices({ ...choices, conteineresVazios: value });
    };

    const setVazamentoTubulacoes = (value) => {
        setChoices({ ...choices, vazamentoTubulacoes: value });
    };

    const setHasteTanqueSulfato = (value) => {
        setChoices({ ...choices, hasteTanqueSulfato: value });
    };

    const setChuveiroDeEmergencia = (value) => {
        setChoices({ ...choices, chuveiroDeEmergencia: value });
    };

    const setPreparoPiaPoliA = (value) => {
        setChoices({ ...choices, preparoPiaPoliA: value });
    };

    const setPreparoPiaPoliB = (value) => {
        setChoices({ ...choices, preparoPiaPoliB: value });
    };

    const setPreparoPiaPoliC = (value) => {
        setChoices({ ...choices, preparoPiaPoliC: value });
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
                    <TextComponent style='textQuestoes'>Iluminação da área ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={iluminacaoArea}
                    onValueChange={(value) => setIluminacaoArea(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={iluminacaoArea}
                    onValueChange={(value) => setIluminacaoArea(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Limpeza da área ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={limpezaArea}
                    onValueChange={(value) => setLimpezaArea(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={limpezaArea}
                    onValueChange={(value) => setLimpezaArea(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Silo de cal tampados?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={silosTampados}
                    onValueChange={(value) => setSilosTampados(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={silosTampados}
                    onValueChange={(value) => setSilosTampados(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Operação da talha manual ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={operacaoTalhaManual}
                    onValueChange={(value) => setOperacaoTalhaManual(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={operacaoTalhaManual}
                    onValueChange={(value) => setOperacaoTalhaManual(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Contêineres vazios estão no monta carga?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={conteineresVazios}
                    onValueChange={(value) => setConteineresVazios(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={conteineresVazios}
                    onValueChange={(value) => setConteineresVazios(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Há vazamentos nas tubulações dos tanques de sulfato?</TextComponent>
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
                    <TextComponent style='textQuestoes'>Haste do tanque de sulfato ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={hasteTanqueSulfato}
                    onValueChange={(value) => setHasteTanqueSulfato(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={hasteTanqueSulfato}
                    onValueChange={(value) => setHasteTanqueSulfato(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Funcionamento do chuveiro de emergência ok?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={chuveiroDeEmergencia}
                    onValueChange={(value) => setChuveiroDeEmergencia(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={chuveiroDeEmergencia}
                    onValueChange={(value) => setChuveiroDeEmergencia(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ConteinerAba style={styles.OptionsPias}>
                    <ConteinerText style={styles.Options}>
                        <TextComponent style='textTitulo'>Problemas nas Pias de preparo de polieletrólito:</TextComponent>
                    </ConteinerText>

                    <ConteinerContent style={styles.conteinerPias}>
                        <ConteinerChose style={styles.Pias}>
                            <TextComponent style='textQuestoes'>Tanque A</TextComponent>
                            <Options style='textQuestoes'>
                                <OpcaoSelecao
                                    value="Sim"
                                    selectedValue={preparoPiaPoliA}
                                    onValueChange={(value) => setPreparoPiaPoliA(value)}
                                />
                                <OpcaoSelecao
                                    value="Não"
                                    selectedValue={preparoPiaPoliA}
                                    onValueChange={(value) => setPreparoPiaPoliA(value)}
                                />
                            </Options>
                        </ConteinerChose>

                        <ConteinerChose style={styles.Pias}>
                            <TextComponent style='textQuestoes'>Tanque B</TextComponent>
                            <Options style='textQuestoes'>
                                <OpcaoSelecao
                                    value="Sim"
                                    selectedValue={preparoPiaPoliB}
                                    onValueChange={(value) => setPreparoPiaPoliB(value)}
                                />
                                <OpcaoSelecao
                                    value="Não"
                                    selectedValue={preparoPiaPoliB}
                                    onValueChange={(value) => setPreparoPiaPoliB(value)}
                                />
                            </Options>
                        </ConteinerChose>

                        <ConteinerChose style={styles.Pias}>
                            <TextComponent style='textQuestoes'>Tanque C</TextComponent>
                            <Options style='textQuestoes'>
                                <OpcaoSelecao
                                    value="Sim"
                                    selectedValue={preparoPiaPoliC}
                                    onValueChange={(value) => setPreparoPiaPoliC(value)}
                                />
                                <OpcaoSelecao
                                    value="Não"
                                    selectedValue={preparoPiaPoliC}
                                    onValueChange={(value) => setPreparoPiaPoliC(value)}
                                />
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
});