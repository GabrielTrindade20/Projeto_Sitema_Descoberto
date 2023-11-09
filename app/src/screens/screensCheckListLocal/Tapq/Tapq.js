import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import OpcaoSelecao from '../../../components/OpcaoSelecao';
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';
import CustomButton from '../../../components/CustomButton';

export default function AreaTapq({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaTapq] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaTapq(newText);
        updateObservacao(newText);
    }

    const {
        bomAmosAguFilt,
        bomAmosFinal,
        bomLimpAreaValv,
        analiContTurb,
        analiContPh,
        analiContCloOper,
        analiContClorRea,
        analiContFluOper,
        analiContFluRea,
        salaAnaliEquiLimpa,
        ilumiSalaAnali,
        difuDosaCal,
        limpAreaExter,
        ilumiAreaExter,
        apliGeoTapq    
    } = choices;


    const setBomAmosAguFilt = (value) => {
        setChoices({ ...choices, bomAmosAguFilt: value });
    };

    const setBomAmosFinal = (value) => {
        setChoices({ ...choices, bomAmosFinal: value });
    };

    const setBomLimpAreaValv = (value) => {
        setChoices({ ...choices, bomLimpAreaValv: value });
    };

    const setAnaliContTurb = (value) => {
        setChoices({ ...choices, analiContTurb: value });
    };

    const setAnaliContPh = (value) => {
        setChoices({ ...choices, analiContPh: value });
    };

    const setAnaliContCloOper = (value) => {
        setChoices({ ...choices, analiContCloOper: value });
    };

    const setAnaliContClorRea = (value) => {
        setChoices({ ...choices, analiContClorRea: value });
    };

    const setAnaliContFluOper = (value) => {
        setChoices({ ...choices, analiContFluOper: value });
    };

    const setAnaliContFluRea = (value) => {
        setChoices({ ...choices, analiContFluRea: value });
    };

    const setSalaAnaliEquiLimpa = (value) => {
        setChoices({ ...choices, salaAnaliEquiLimpa: value });
    };

    const setIlumiSalaAnali = (value) => {
        setChoices({ ...choices, ilumiSalaAnali: value });
    };

    const setDifuDosaCal = (value) => {
        setChoices({ ...choices, difuDosaCal: value });
    };

    const setLimpAreaExter = (value) => {
        setChoices({ ...choices, limpAreaExter: value });
    };

    const setIlumiAreaExter = (value) => {
        setChoices({ ...choices, ilumiAreaExter: value });
    };

    const setApliGeoTapq = (value) => {
        setChoices({ ...choices, apliGeoTapq: value });
    };

    return (
        <Conteiner style={styles.conteiner}>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito com a Bomba de amostragem da água Filtrada?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={bomAmosAguFilt}
                    onValueChange={(value) => setBomAmosAguFilt(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={bomAmosAguFilt}
                    onValueChange={(value) => setBomAmosAguFilt(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito com a Bomba de amostragem da água Final?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={bomAmosFinal}
                    onValueChange={(value) => setBomAmosFinal(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={bomAmosFinal}
                    onValueChange={(value) => setBomAmosFinal(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito na Bomba de água e limpeza da área das válvulas?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={bomLimpAreaValv}
                    onValueChange={(value) => setBomLimpAreaValv(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={bomLimpAreaValv}
                    onValueChange={(value) => setBomLimpAreaValv(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito no Analisador Contínuo de Turbidez?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={analiContTurb}
                    onValueChange={(value) => setAnaliContTurb(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={analiContTurb}
                    onValueChange={(value) => setAnaliContTurb(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito no Analisador Contínuo de Ph?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={analiContPh}
                    onValueChange={(value) => setAnaliContPh(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={analiContPh}
                    onValueChange={(value) => setAnaliContPh(value)}
                />
            </QuestionContainer>
            
            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito no Analisador Contínuo de Cloro (operação)?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={analiContCloOper}
                    onValueChange={(value) => setAnaliContCloOper(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={analiContCloOper}
                    onValueChange={(value) => setAnaliContCloOper(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito no Analisador Contínuo de Cloro (reagente)?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={analiContClorRea}
                    onValueChange={(value) => setAnaliContClorRea(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={analiContClorRea}
                    onValueChange={(value) => setAnaliContClorRea(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito no Analisador Contínuo de Flúor (operação)?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={analiContFluOper}
                    onValueChange={(value) => setAnaliContFluOper(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={analiContFluOper}
                    onValueChange={(value) => setAnaliContFluOper(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito no Analisador Contínuo de Flúor (reagente)?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={analiContFluRea}
                    onValueChange={(value) => setAnaliContFluRea(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={analiContFluRea}
                    onValueChange={(value) => setAnaliContFluRea(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Sala dos Analisadores e Equipamentos Limpa?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={salaAnaliEquiLimpa}
                    onValueChange={(value) => setSalaAnaliEquiLimpa(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={salaAnaliEquiLimpa}
                    onValueChange={(value) => setSalaAnaliEquiLimpa(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito na Iluminação da Sala dos Analisadores?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={ilumiSalaAnali}
                    onValueChange={(value) => setIlumiSalaAnali(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={ilumiSalaAnali}
                    onValueChange={(value) => setIlumiSalaAnali(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito no Difusor de Dosagem de Cal?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={difuDosaCal}
                    onValueChange={(value) => setDifuDosaCal(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={difuDosaCal}
                    onValueChange={(value) => setDifuDosaCal(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Área externa limpa?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={limpAreaExter}
                    onValueChange={(value) => setLimpAreaExter(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={limpAreaExter}
                    onValueChange={(value) => setLimpAreaExter(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Defeito na Iluminação da Área Externa?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={ilumiAreaExter}
                    onValueChange={(value) => setIlumiAreaExter(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={ilumiAreaExter}
                    onValueChange={(value) => setIlumiAreaExter(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Problemas de Aplicação de Geocáucio no TAPQ?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={apliGeoTapq}
                    onValueChange={(value) => setApliGeoTapq(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={apliGeoTapq}
                    onValueChange={(value) => setApliGeoTapq(value)}
                />
            </QuestionContainer>

            <TextComponent style='textQuestoes'>Observações:</TextComponent>
            <QuestionContainer style={styles.questionContainer}>
                <Observacao value={text} onChange={handleObservacaoChange} />
            </QuestionContainer>
            {/* Repita o padrão para outras perguntas */}
        </Conteiner >
    );
};

const styles = StyleSheet.create({
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
    pickerBooster: {
        backgroundColor: '#0C5AA5',
        width: '100%',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 50,
    },
    input: {
        width: '30%',
        marginLeft: -50,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    OptionsBooster: {
        width: '100%',
        backgroundColor: '#fff7',
        padding: 5,
        marginBottom: 20,
    },
    conteinerOptionsBooster: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 5,
        padding: 15,
        marginBottom: 15,

    },
    choses: {
        width: '30%',
        flexDirection: 'column',
        backgroundColor: '#D2D2D2',
        borderRadius: 5,
        padding: 10,
    },
    selectOption: {
        justifyContent: 'space-around',
        fontSize: 20,
        flexDirection: 'row',
        // Estilos do texto da pergunta
    },
    Options: {
        alignItems: 'center',
        marginBottom: 10,
    },
    subtitulo: {
        alignItems: 'center',
        marginBottom: 10,
    },
    inputBooster: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    OptionsBombas: {
        width: '100%',
        backgroundColor: '#fff7',
        padding: 5,
        marginBottom: 20,
    },
    conteinerOptionsBomba: {
        flexDirection: 'column',
        marginTop: 5,
        marginBottom: 15,
        width: '100%'
    },
    Button: {
        width: '30%',
        marginLeft: -50,
    },
    Button2: {
        width: '100%',
    },
});