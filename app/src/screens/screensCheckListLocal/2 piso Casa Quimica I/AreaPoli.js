import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AreaPoli({ choices, setChoices }) {
    const { iluminacaoBombas,
        aguaDiluicao,
        vazamentoTubulacoes,
        limpezaEquipamentos,
        alimentacaoAgua,
        iluminacaoPiso1,
        iluminacaoPiso2,
        calhaAplicacao,
        calhaDosagemSolucao
    } = choices;

    const [text, setText] = useState('');



    return (
        <ScrollView>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Iluminação do local das bombas ok?</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, iluminacaoBombas: 'Sim' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            iluminacaoBombas === 'Sim' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                iluminacaoBombas === 'Sim' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: iluminacaoBombas === 'Sim' ? 'blue' : 'black', fontSize: 20 }}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, iluminacaoBombas: 'Não' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            iluminacaoBombas === 'Não' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                iluminacaoBombas === 'Não' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: iluminacaoBombas === 'Não' ? 'blue' : 'black', fontSize: 20 }}>Não</Text>
                </TouchableOpacity>
            </View>
            {/* Restante do seu código... */}

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Água de diluição linha Ceilândia ok?</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, aguaDiluicao: 'Sim' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            aguaDiluicao === 'Sim' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                aguaDiluicao === 'Sim' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: aguaDiluicao === 'Sim' ? 'blue' : 'black', fontSize: 20 }}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, aguaDiluicao: 'Não' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            aguaDiluicao === 'Não' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                aguaDiluicao === 'Não' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: aguaDiluicao === 'Não' ? 'blue' : 'black', fontSize: 20 }}>Não</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Há vazamento nas MB’s  tubulações?</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, vazamentoTubulacoes: 'Sim' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            vazamentoTubulacoes === 'Sim' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                vazamentoTubulacoes === 'Sim' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: vazamentoTubulacoes === 'Sim' ? 'blue' : 'black', fontSize: 20 }}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, vazamentoTubulacoes: 'Não' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            vazamentoTubulacoes === 'Não' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                vazamentoTubulacoes === 'Não' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: vazamentoTubulacoes === 'Não' ? 'blue' : 'black', fontSize: 20 }}>Não</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Limpeza nos equipamentos ok?</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, limpezaEquipamentos: 'Sim' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            limpezaEquipamentos === 'Sim' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                limpezaEquipamentos === 'Sim' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: limpezaEquipamentos === 'Sim' ? 'blue' : 'black', fontSize: 20 }}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, limpezaEquipamentos: 'Não' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            limpezaEquipamentos === 'Não' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                limpezaEquipamentos === 'Não' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: limpezaEquipamentos === 'Não' ? 'blue' : 'black', fontSize: 20 }}>Não</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Alimentação Água?</Text>
                <Picker
                    selectedValue={alimentacaoAgua}
                    onValueChange={(itemValue) => setChoices({ ...choices, alimentacaoAgua: itemValue })}
                    style={styles.picker}
                >
                    <Picker.Item label="Linha Ceilândia" value="Linha Ceilândia" />
                    <Picker.Item label="VC 1A" value="VC 1A" />
                    <Picker.Item label="VC 1B" value="VC 1B" />
                    <Picker.Item label="Elevado" value="Elevado" />
                </Picker>
            </View>


            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Iluminação do piso 1º CQ I ok?</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, iluminacaoPiso1: 'Sim' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            iluminacaoPiso1 === 'Sim' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                iluminacaoPiso1 === 'Sim' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: iluminacaoPiso1 === 'Sim' ? 'blue' : 'black', fontSize: 20 }}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, iluminacaoPiso1: 'Não' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            iluminacaoPiso1 === 'Não' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                iluminacaoPiso1 === 'Não' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: iluminacaoPiso1 === 'Não' ? 'blue' : 'black', fontSize: 20 }}>Não</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Iluminação do piso 2º CQ I ok?</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, iluminacaoPiso2: 'Sim' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            iluminacaoPiso2 === 'Sim' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                iluminacaoPiso2 === 'Sim' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: iluminacaoPiso2 === 'Sim' ? 'blue' : 'black', fontSize: 20 }}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, iluminacaoPiso2: 'Não' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            iluminacaoPiso2 === 'Não' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                iluminacaoPiso2 === 'Não' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: iluminacaoPiso2 === 'Não' ? 'blue' : 'black', fontSize: 20 }}>Não</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Calha de aplicação Polieletrólito ok?</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, calhaAplicacao: 'Sim' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            calhaAplicacao === 'Sim' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                calhaAplicacao === 'Sim' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: calhaAplicacao === 'Sim' ? 'blue' : 'black', fontSize: 20 }}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, calhaAplicacao: 'Não' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            calhaAplicacao === 'Não' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                calhaAplicacao === 'Não' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: calhaAplicacao === 'Não' ? 'blue' : 'black', fontSize: 20 }}>Não</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Calha de dosagem de solução limpa?</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, calhaDosagemSolucao: 'Sim' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            calhaDosagemSolucao === 'Sim' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                calhaDosagemSolucao === 'Sim' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: calhaDosagemSolucao === 'Sim' ? 'blue' : 'black', fontSize: 20 }}>Sim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setChoices({ ...choices, calhaDosagemSolucao: 'Não' })}
                >
                    <View
                        style={[
                            styles.outlineCircle,
                            calhaDosagemSolucao === 'Não' && styles.selectedOutlineCircle,
                        ]}
                    >
                        <View
                            style={[
                                styles.innerCircle,
                                calhaDosagemSolucao === 'Não' && styles.selectedInnerCircle,
                            ]}
                        />
                    </View>
                    <Text style={{ color: calhaDosagemSolucao === 'Não' ? 'blue' : 'black', fontSize: 20 }}>Não</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.questionContainer}>
                <TextInput
                    style={styles.textInput}
                    multiline={true} // Permite várias linhas
                    numberOfLines={4} // Número de linhas visíveis inicialmente
                    value={text}
                    onChangeText={setText}
                    placeholder="Digite seu texto aqui"
                />
            </View>

        </ScrollView >
    );
}

const styles = StyleSheet.create({
    conteiner: {
        padding: 10,
    },
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 20,
    },
    questionText: {
        flexGrow: 1,
        fontSize: 18,
        // Estilos do texto da pergunta
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
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

    picker: {
        backgroundColor: '#0C5AA5',
        width: '30%',
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
});