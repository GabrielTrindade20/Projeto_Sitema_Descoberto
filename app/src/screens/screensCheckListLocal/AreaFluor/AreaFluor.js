import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import OpcaoSelecao from './../../../components/OpcaoSelecao'

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
        <View style={styles.conteiner}>
            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Tanque de neutralização limpo?</Text>
                </View>
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
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Registros de alimentação dos silos fechados?</Text>
                </View>
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
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Registro da área de contenção fechados?</Text>
                </View>
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
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Área de contenção limpa?</Text>
                </View>
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
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Sala de dosagem limpa?</Text>
                </View>
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
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Há vazamentos?</Text>
                </View>
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
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Iluminação área ok?</Text>
                </View>
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
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Registro de água para os silos fechados?</Text>
                </View>
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
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>A calha de contenção está limpa?</Text>
                </View>
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
            </View>

            <View style={styles.questionContainer}>
                <View style={styles.Options}>
                    <Text style={styles.questionText}>Funcionamento do chuveiro de emergência ok?</Text>
                </View>
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