import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import OpcaoSelecao from '../../../components/OpcaoSelecao';

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
        <View style={styles.conteiner}>
            <View style={styles.conteinerSituacao}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Situação: </Text>
                </View>
                <Picker
                    selectedValue={situacao}
                    onValueChange={(itemValue) => setChoices({ ...choices, situacao: itemValue })}
                    style={styles.Situacaopicker}
                >
                    <Picker.Item label="Situação:" />
                    <Picker.Item label="Operando" value="Operando" />
                    <Picker.Item label="Desligado" value="Desligado" />

                </Picker>
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Iluminação da área ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Iluminação da área ok?"
                    value="Sim"
                    selectedValue={iluminacaoArea}
                    onValueChange={(value) => setIluminacaoArea(value)}
                />
                <OpcaoSelecao
                    label="Iluminação da área ok?"
                    value="Não"
                    selectedValue={iluminacaoArea}
                    onValueChange={(value) => setIluminacaoArea(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Limpeza da área ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Limpeza da área ok?"
                    value="Sim"
                    selectedValue={limpezaArea}
                    onValueChange={(value) => setLimpezaArea(value)}
                />
                <OpcaoSelecao
                    label="Limpeza da área ok?"
                    value="Não"
                    selectedValue={limpezaArea}
                    onValueChange={(value) => setLimpezaArea(value)}
                />
            </View>


            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Silo de cal tampados?</Text>
                </View>
                <OpcaoSelecao
                    label="Silo de cal tampados?"
                    value="Sim"
                    selectedValue={silosTampados}
                    onValueChange={(value) => setSilosTampados(value)}
                />
                <OpcaoSelecao
                    label="Silo de cal tampados?"
                    value="Não"
                    selectedValue={silosTampados}
                    onValueChange={(value) => setSilosTampados(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Operação da talha manual ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Operação da talha manual ok?"
                    value="Sim"
                    selectedValue={operacaoTalhaManual}
                    onValueChange={(value) => setOperacaoTalhaManual(value)}
                />
                <OpcaoSelecao
                    label="Operação da talha manual ok?"
                    value="Não"
                    selectedValue={operacaoTalhaManual}
                    onValueChange={(value) => setOperacaoTalhaManual(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Contêineres vazios estão no monta carga?</Text>
                </View>
                <OpcaoSelecao
                    label="Contêineres vazios estão no monta carga?"
                    value="Sim"
                    selectedValue={conteineresVazios}
                    onValueChange={(value) => setConteineresVazios(value)}
                />
                <OpcaoSelecao
                    label="Contêineres vazios estão no monta carga?"
                    value="Não"
                    selectedValue={conteineresVazios}
                    onValueChange={(value) => setConteineresVazios(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Há vazamentos nas tubulações dos tanques de sulfato?</Text>
                </View>
                <OpcaoSelecao
                    label="Há vazamentos nas tubulações dos tanques de sulfato?"
                    value="Sim"
                    selectedValue={vazamentoTubulacoes}
                    onValueChange={(value) => setVazamentoTubulacoes(value)}
                />
                <OpcaoSelecao
                    label="Há vazamentos nas tubulações dos tanques de sulfato?"
                    value="Não"
                    selectedValue={vazamentoTubulacoes}
                    onValueChange={(value) => setVazamentoTubulacoes(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Haste do tanque de sulfato ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Haste do tanque de sulfato ok?"
                    value="Sim"
                    selectedValue={hasteTanqueSulfato}
                    onValueChange={(value) => setHasteTanqueSulfato(value)}
                />
                <OpcaoSelecao
                    label="Haste do tanque de sulfato ok?"
                    value="Não"
                    selectedValue={hasteTanqueSulfato}
                    onValueChange={(value) => setHasteTanqueSulfato(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Funcionamento do chuveiro de emergência ok?</Text>
                </View>
                <OpcaoSelecao
                    label="Funcionamento do chuveiro de emergência ok?"
                    value="Sim"
                    selectedValue={chuveiroDeEmergencia}
                    onValueChange={(value) => setChuveiroDeEmergencia(value)}
                />
                <OpcaoSelecao
                    label="Funcionamento do chuveiro de emergência ok?"
                    value="Não"
                    selectedValue={chuveiroDeEmergencia}
                    onValueChange={(value) => setChuveiroDeEmergencia(value)}
                />
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.OptionsPias}>
                    <View style={styles.Options}>
                        <Text style={styles.questionText}>Pias de preparo de polieletrólito:</Text>
                    </View>
                    <View style={styles.conteinerPias}>
                        <View style={styles.Pias}>
                            <Text style={styles.questionText}>Problema no Tanque A</Text>
                            <View style={styles.questionText}>
                                <OpcaoSelecao
                                    label="Funcionamento do chuveiro de emergência ok?"
                                    value="Sim"
                                    selectedValue={preparoPiaPoliA}
                                    onValueChange={(value) => setPreparoPiaPoliA(value)}
                                />
                                <OpcaoSelecao
                                    label="Funcionamento do chuveiro de emergência ok?"
                                    value="Não"
                                    selectedValue={preparoPiaPoliA}
                                    onValueChange={(value) => setPreparoPiaPoliA(value)}
                                />
                            </View>
                        </View>

                        <View style={styles.Pias}>
                            <Text style={styles.questionText}>Problema no Tanque B</Text>
                            <View style={styles.questionText}>
                                <OpcaoSelecao
                                    label="Funcionamento do chuveiro de emergência ok?"
                                    value="Sim"
                                    selectedValue={preparoPiaPoliB}
                                    onValueChange={(value) => setPreparoPiaPoliB(value)}
                                />
                                <OpcaoSelecao
                                    label="Funcionamento do chuveiro de emergência ok?"
                                    value="Não"
                                    selectedValue={preparoPiaPoliB}
                                    onValueChange={(value) => setPreparoPiaPoliB(value)}
                                />
                            </View>
                        </View>

                        <View style={styles.Pias}>
                            <Text style={styles.questionText}>Problema no Tanque C</Text>
                            <View style={styles.questionText}>
                                <OpcaoSelecao
                                    label="Funcionamento do chuveiro de emergência ok?"
                                    value="Sim"
                                    selectedValue={preparoPiaPoliC}
                                    onValueChange={(value) => setPreparoPiaPoliC(value)}
                                />
                                <OpcaoSelecao
                                    label="Funcionamento do chuveiro de emergência ok?"
                                    value="Não"
                                    selectedValue={preparoPiaPoliC}
                                    onValueChange={(value) => setPreparoPiaPoliC(value)}
                                />
                            </View>
                        </View>
                    </View>
                </View>
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
            {/* Repita o padrão para outras perguntas */}
        </View>
    );
}


const styles = StyleSheet.create({
    conteiner: {
        flexDirection: 'column',
        padding: 10,
        width: '100%',
    },
    questionContainer: {
        marginBottom: 15,
        flexDirection: 'row',
        width: '100%',
    },
    Options: {
        width: '75%',
    },
    questionText: {
        fontSize: 20,
        flexDirection: 'row',
        // Estilos do texto da pergunta
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    radioButton: {
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
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
    // conteinerEquipamento: {
    //     flexDirection: 'column',
    // },
    conteinerPiker: {
        flexDirection: 'column',
        width: '30%',
        marginTop: 10,
        marginBottom: 10,
    },
    questionContainerPiker: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    picker: {
        backgroundColor: '#0C5AA5',
        width: '100%',
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
    conteinerObservacao: {
        width: '100%',
    },
    OptionsPias: {
        width: '100%',   
        backgroundColor: '#fff7',
        padding: 5,
    },
    conteinerPias: {
        justifyContent: 'space-between',  
        flexDirection: 'row',
        marginTop: 5,
    },
    Pias: {
        marginTop: 10,
        marginBottom: -50,
        height: '80%',
        width: '30%',
        flexDirection: 'column',
        backgroundColor: '#D2D2D2',
        borderRadius: 5,
    },
});