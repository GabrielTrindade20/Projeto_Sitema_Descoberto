import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


import OpcaoSelecao from '../../../components/OpcaoSelecao';
import {
    Conteiner,
    QuestionContainer,
    ChoseOptions,
    LayoutGrid,
    LayoutGridRow,
    LayoutGridCollumn,
    LayoutGridContent,
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

export default function AreaTanqueSulfato({ choices, setChoices, updateObservacao }) {
    const [text, setTextoAreaTanqueSulfato] = useState("");

    const handleObservacaoChange = (newText) => {
        setTextoAreaTanqueSulfato(newText);
        updateObservacao(newText);
    }

    const {
        situacao,
        modo,
        dosando,
        rotametro,
        monometro,
        operacaoBooster,
        regisEntSaiAcido,
        regisProvetaAcido,
        regisEntSaiClorito,
        regisProvetaClorito,
        tempoOperacao,
        vazaoEta,
        dosagemDioxido,
        vazaoDioxido,
        geradorDioxido,
        leitSensFluxoAcido,
        leitSensFluxoClorito,
        lavadorGases,
    } = choices;

    const [showPicker2, setShowPicker2] = useState(false);
    const [showPicker3, setShowPicker3] = useState(false);

    const [horaSensFluxoAcido, sethoraSensFluxoAcido] = useState(new Date());
    const [horaSensFluxoClorito, sethoraSensFluxoClorito] = useState(new Date());

    const handleDateClick2 = () => {
        setShowPicker2(true);
    };

    const handleDateClick3 = () => {
        setShowPicker3(true);
    };

    const hSensFluxoAcido = (event, selectedDate) => {
        const currentDate = selectedDate || horaSensFluxoAcido;
        setShowPicker2(Platform.OS === 'ios'); // Para fechar o picker automaticamente em iOS
        sethoraSensFluxoAcido(currentDate);
    };

    const hSensFluxoClorito = (event, selectedDate) => {
        const currentDate = selectedDate || horaSensFluxoClorito;
        setShowPicker3(Platform.OS === 'ios'); // Para fechar o picker automaticamente em iOS
        sethoraSensFluxoClorito(currentDate);
    };


    const setDosando = (value) => {
        setChoices({ ...choices, dosando: value });
    };

    const setRotametro = (value) => {
        setChoices({ ...choices, rotametro: value });
    };

    const setMonometro = (value) => {
        setChoices({ ...choices, monometro: value });
    };

    const setOperacaoBooster = (value) => {
        setChoices({ ...choices, operacaoBooster: value });
    };

    const setRegisEntSaiAcido = (value) => {
        setChoices({ ...choices, regisEntSaiAcido: value });
    };

    const setRegisProvetaAcido = (value) => {
        setChoices({ ...choices, regisProvetaAcido: value });
    };

    const setRegisEntSaiClorito = (value) => {
        setChoices({ ...choices, regisEntSaiClorito: value });
    };

    const setRegisProvetaClorito = (value) => {
        setChoices({ ...choices, regisProvetaClorito: value });
    };

    const setTempoOperacao = (value) => {
        setChoices({ ...choices, tempoOperacao: value });
    };
    const setVazaoEta = (value) => {
        setChoices({ ...choices, vazaoEta: value });
    };

    const setDosagemDioxido = (value) => {
        setChoices({ ...choices, dosagemDioxido: value });
    };

    const setVazaoDioxido = (value) => {
        setChoices({ ...choices, vazaoDioxido: value });
    };

    const setGeradorDioxido = (value) => {
        setChoices({ ...choices, geradorDioxido: value });
    };

    const setLeitSensFluxoAcido = (value) => {
        setChoices({ ...choices, leitSensFluxoAcido: value });
    };

    const setLeitSensFluxoClorito = (value) => {
        setChoices({ ...choices, leitSensFluxoClorito: value });
    };

    const setLavadorGases = (value) => {
        setChoices({ ...choices, lavadorGases: value });
    };

    return (
        <Conteiner style={styles.conteiner}>

            <QuestionContainer style={styles.conteinerSituacao}>
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

            <QuestionContainer style={styles.conteinerSituacao}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Modo: </TextComponent>
                </ChoseOptions>
                <Picker
                    selectedValue={modo}
                    onValueChange={(itemValue) => setChoices({ ...choices, modo: itemValue })}
                    style={styles.Situacaopicker}
                >
                    <Picker.Item label="Modo:" />
                    <Picker.Item label="Operando" value="Operando" />
                    <Picker.Item label="Desligado" value="Desligado" />

                </Picker>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Dosando</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="A"
                    selectedValue={dosando}
                    onValueChange={(value) => setDosando(value)}
                />
                <OpcaoSelecao
                    value="B"
                    selectedValue={dosando}
                    onValueChange={(value) => setDosando(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ConteinerAba style={styles.conteinerAba}>
                    <ConteinerText style={styles.conteinerText}>
                        <TextComponent style='textSubTitulo'>Booster</TextComponent>
                    </ConteinerText>

                    <ConteinerContent style={styles.conteinerOptionsBooster}>
                        <ConteinerChose style={styles.conteinerChose}>
                            <TextComponent style='textQuestoes'>Rotâmetro</TextComponent>
                                <TextInput
                                    style={styles.inputBooster}
                                    placeholder="m³/h"
                                    value={rotametro}
                                    onChangeText={(number) => setRotametro(number)}
                                />
                        </ConteinerChose>

                        <ConteinerChose style={styles.conteinerChose}>
                            <TextComponent style='textQuestoes'>Monômetro</TextComponent>
                                <TextInput
                                    style={styles.inputBooster}
                                    placeholder="bar"
                                    value={monometro}
                                    onChangeText={(number) => setMonometro(number)}
                                />
                        </ConteinerChose>

                        <ConteinerChose style={styles.conteinerChose}>
                            <TextComponent style='textQuestoes'>Operação</TextComponent>
                            <LayoutGridRow style={styles.layoutGridRow}>
                                <OpcaoSelecao
                                    value="A"
                                    selectedValue={operacaoBooster}
                                    onValueChange={(value) => setOperacaoBooster(value)}
                                />
                                <OpcaoSelecao
                                    value="B"
                                    selectedValue={operacaoBooster}
                                    onValueChange={(value) => setOperacaoBooster(value)}
                                />
                            </LayoutGridRow>
                        </ConteinerChose>
                    </ConteinerContent>
                </ConteinerAba>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <View style={styles.cardBombas}>
                    <LayoutGridCollumn style={styles.layoutGridCollumn}>
                        <TextComponent style='textSubTitulo'>Bomba de Ácido em uso:</TextComponent>
                    </LayoutGridCollumn>

                    <LayoutGridCollumn style={styles.layoutGridCollumn}>
                        <QuestionContainer style={styles.questionContainer}>
                            <ChoseOptions style={styles.ChoseOptions}>
                                <TextComponent style='textQuestoes'>Registros de Entrada e saída abertos?</TextComponent>
                            </ChoseOptions>

                            <OpcaoSelecao
                                value="Sim"
                                selectedValue={regisEntSaiAcido}
                                onValueChange={(value) => setRegisEntSaiAcido(value)}
                            />
                            <OpcaoSelecao
                                value="Não"
                                selectedValue={regisEntSaiAcido}
                                onValueChange={(value) => setRegisEntSaiAcido(value)}
                            />
                        </QuestionContainer>


                        <QuestionContainer style={styles.questionContainer}>
                            <ChoseOptions style={styles.ChoseOptions}>
                                <TextComponent style='textQuestoes'>Registros de Proveta Fechado?</TextComponent>
                            </ChoseOptions>

                            <OpcaoSelecao
                                value="Sim"
                                selectedValue={regisProvetaAcido}
                                onValueChange={(value) => setRegisProvetaAcido(value)}
                            />
                            <OpcaoSelecao
                                value="Não"
                                selectedValue={regisProvetaAcido}
                                onValueChange={(value) => setRegisProvetaAcido(value)}
                            />
                        </QuestionContainer>
                    </LayoutGridCollumn>
                </View>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <View style={styles.cardBombas}>
                    <LayoutGridCollumn style={styles.layoutGridCollumn}>
                        <TextComponent style='textSubTitulo'>Bomba de Clorito de Sódio em uso:</TextComponent>
                    </LayoutGridCollumn>

                    <LayoutGridCollumn style={styles.layoutGridCollumn}>
                        <QuestionContainer style={styles.questionContainer}>
                            <ChoseOptions style={styles.Options}>
                                <TextComponent style='textQuestoes'>Registros de Entrada e saída abertos?</TextComponent>
                            </ChoseOptions>

                            <OpcaoSelecao
                                value="Sim"
                                selectedValue={regisEntSaiClorito}
                                onValueChange={(value) => setRegisEntSaiClorito(value)}
                            />
                            <OpcaoSelecao
                                value="Não"
                                selectedValue={regisEntSaiClorito}
                                onValueChange={(value) => setRegisEntSaiClorito(value)}
                            />
                        </QuestionContainer>


                        <QuestionContainer style={styles.questionContainer}>
                            <ChoseOptions style={styles.Options}>
                                <TextComponent style='textQuestoes'>Registros de Proveta Fechado?</TextComponent>
                            </ChoseOptions>

                            <OpcaoSelecao
                                value="Sim"
                                selectedValue={regisProvetaClorito}
                                onValueChange={(value) => setRegisProvetaClorito(value)}
                            />
                            <OpcaoSelecao
                                value="Não"
                                selectedValue={regisProvetaClorito}
                                onValueChange={(value) => setRegisProvetaClorito(value)}
                            />
                        </QuestionContainer>
                    </LayoutGridCollumn>
                </View>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Tempo de Operação</TextComponent>
                </ChoseOptions>

                <TextInput
                    style={styles.input}
                    placeholder="min"
                    value={tempoOperacao}
                    onChangeText={(number) => setTempoOperacao(number)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Vazão da ETA:</TextComponent>
                </ChoseOptions>
                <TextInput
                    style={styles.input}
                    placeholder="kg/h"
                    value={vazaoEta}
                    onChangeText={(number) => setVazaoEta(number)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Dosagem de Dióxido:</TextComponent>
                </ChoseOptions>
                <TextInput
                    style={styles.input}
                    placeholder="ppm"
                    value={dosagemDioxido}
                    onChangeText={(number) => setDosagemDioxido(number)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Vazão de Dióxido:</TextComponent>
                </ChoseOptions>
                <TextInput
                    style={styles.input}
                    placeholder="Kg/h"
                    value={vazaoDioxido}
                    onChangeText={(number) => setVazaoDioxido(number)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Gerador de Dióxido em Funcionamento:</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="A"
                    selectedValue={geradorDioxido}
                    onValueChange={(value) => setGeradorDioxido(value)}
                />
                <OpcaoSelecao
                    value="B"
                    selectedValue={geradorDioxido}
                    onValueChange={(value) => setGeradorDioxido(value)}
                />
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ConteinerAba style={styles.OptionsBooster}>
                    <ConteinerText style={styles.Options}>
                        <TextComponent style='textSubTitulo'>Sensor de fluxo de ácido clorídrico</TextComponent>
                    </ConteinerText>

                    <ConteinerContent style={styles.layoutGridRow}>
                        <ConteinerChose style={styles.conteinerContent}>
                            <TextComponent style='textQuestoes'>Horário</TextComponent>
                            <View style={styles.Button2}>
                                <Button
                                    title={horaSensFluxoAcido.toLocaleTimeString([('pt-BR')], { hour: '2-digit', minute: '2-digit' })}
                                    onPress={handleDateClick2}
                                />
                                {showPicker2 && (
                                    <DateTimePicker
                                        value={horaSensFluxoAcido}
                                        mode="time"
                                        is24Hour={true}
                                        display="spinner"
                                        onChange={hSensFluxoAcido}
                                    />
                                )}
                            </View>
                        </ConteinerChose>

                        <ConteinerChose style={styles.conteinerChose}>
                            <TextComponent style='textQuestoes'>Leitura</TextComponent>
                                <TextInput
                                    style={styles.inputBooster}
                                    placeholder=""
                                    value={leitSensFluxoAcido}
                                    onChangeText={(number) => setLeitSensFluxoAcido(number)}
                                />
                        </ConteinerChose>

                    </ConteinerContent>
                </ConteinerAba>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ConteinerAba style={styles.OptionsBooster}>
                    <ConteinerText style={styles.Options}>
                        <TextComponent style='textSubTitulo'>Sensor de fluxo de Clorito de Sódio</TextComponent>
                    </ConteinerText>

                    <ConteinerContent style={styles.conteinerOptionsBooster}>
                        <ConteinerChose style={styles.conteinerChose}>
                            <TextComponent style='textQuestoes'>Horário</TextComponent>
                            <View style={styles.Button2}>
                                <Button
                                    title={horaSensFluxoClorito.toLocaleTimeString([('pt-BR')], { hour: '2-digit', minute: '2-digit' })}
                                    onPress={handleDateClick3}
                                />
                                {showPicker3 && (
                                    <DateTimePicker
                                        value={horaSensFluxoClorito}
                                        mode="time"
                                        is24Hour={true}
                                        display="spinner"
                                        onChange={hSensFluxoClorito}
                                    />
                                )}
                            </View>
                        </ConteinerChose>

                        <ConteinerChose style={styles.conteinerChose}>
                            <TextComponent style='textQuestoes'>Leitura</TextComponent>
                                <TextInput
                                    style={styles.inputBooster}
                                    placeholder=""
                                    value={leitSensFluxoClorito}
                                    onChangeText={(number) => setLeitSensFluxoClorito(number)}
                                />
                        </ConteinerChose>

                    </ConteinerContent>
                </ConteinerAba>
            </QuestionContainer>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Lavador de gases ligado?</TextComponent>
                </ChoseOptions>
                <OpcaoSelecao
                    value="Sim"
                    selectedValue={lavadorGases}
                    onValueChange={(value) => setLavadorGases(value)}
                />
                <OpcaoSelecao
                    value="Não"
                    selectedValue={lavadorGases}
                    onValueChange={(value) => setLavadorGases(value)}
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
    Situacaopicker: {
        backgroundColor: '#0C5AA5',
        width: '30%',
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: -55,
    },
    input: {
        width: '30%',
        marginLeft: -50,
        marginVertical: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
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
    cardBombas: {
        width: '100%',
        backgroundColor: '#fff7',
        padding: 15,
        marginBottom: 20,
    },
    Button2: {
        width: '100%',
    },
});