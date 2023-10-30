import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';


import OpcaoSelecao from '../../../components/OpcaoSelecao';
import { Conteiner, QuestionContainer, ChoseOptions } from '../../../components/Layout';
import Observacao from '../../../components/Observacao';
import TextComponent from '../../../components/TextComponent';
import CustomButton from '../../../components/CustomButton';

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
        vazaoEta,
        dosagemDioxido,
        vazaoDioxido,
        geradorDioxido,
        leitSensFluxoAcido,
        leitSensFluxoClorito,
        lavadorGases,
    } = choices;

    const [tempoOperacao, setTempoOperacao] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const handleDateClick = () => {
        setShowPicker(true);
    };
    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || tempoOperacao;
        setShowPicker(Platform.OS === 'ios'); // Para fechar o picker automaticamente em iOS
        setTempoOperacao(currentDate);
    };

    // const [horaSensFluxoAcido, sethoraSensFluxoAcido] = useState(new Horario());
    // const [horaSensFluxoClorito, sethoraSensFluxoClorito] = useState(new Horario());

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

            <View style={styles.questionContainer}>
                <View style={styles.OptionsBooster}>
                    <View style={styles.Options}>
                        <TextComponent style='textSubTitulo'>Booster</TextComponent>
                    </View>

                    <View style={styles.conteinerOptionsBooster}>
                        <View style={styles.choses}>
                            <View style={styles.subtitulo}>
                                <TextComponent style='textQuestoes'>Rotâmetro</TextComponent>
                            </View>
                            <View style={styles.selectOption}>
                                <TextInput
                                    style={styles.inputBooster}
                                    placeholder="m³/h"
                                    value={rotametro}
                                    onChangeText={(number) => setRotametro(number)}
                                />
                            </View>
                        </View>

                        <View style={styles.choses}>
                            <View style={styles.subtitulo}>
                                <TextComponent style='textQuestoes'>Monômetro</TextComponent>
                            </View>
                            <View style={styles.selectOption}>
                                <TextInput
                                    style={styles.inputBooster}
                                    placeholder="bar"
                                    value={monometro}
                                    onChangeText={(number) => setMonometro(number)}
                                />
                            </View>
                        </View>

                        <View style={styles.choses}>
                            <View style={styles.subtitulo}>
                                <TextComponent style='textQuestoes'>Operação</TextComponent>
                            </View>
                            <View style={styles.selectOption}>
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
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.OptionsBombas}>
                    <View style={styles.Options}>
                        <TextComponent style='textSubTitulo'>Bomba de Ácido em uso:</TextComponent>
                    </View>

                    <View style={styles.conteinerOptionsBomba}>
                        <QuestionContainer style={styles.questionContainer}>
                            <ChoseOptions style={styles.Options}>
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
                            <ChoseOptions style={styles.Options}>
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
                    </View>
                </View>
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.OptionsBombas}>
                    <View style={styles.Options}>
                        <TextComponent style='textSubTitulo'>Bomba de Clorito de Sódio em uso:</TextComponent>
                    </View>

                    <View style={styles.conteinerOptionsBomba}>
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
                    </View>
                </View>
            </View>

            <QuestionContainer style={styles.questionContainer}>
                <ChoseOptions style={styles.Options}>
                    <TextComponent style='textQuestoes'>Tempo de Operação</TextComponent>
                </ChoseOptions>
                <View style={styles.Button}>
                    <Button
                        title={tempoOperacao.toLocaleTimeString([('pt-BR')], { hour: '2-digit', minute: '2-digit' })}
                        onPress={handleDateClick}
                    />
                    {showPicker && (
                        <DateTimePicker
                            value={tempoOperacao}
                            mode="time"
                            is24Hour={true}
                            display="spinner"
                            onChange={handleDateChange}
                        />
                    )}
                </View>
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
        marginLeft: 10,
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
});