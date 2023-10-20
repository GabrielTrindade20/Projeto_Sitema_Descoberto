import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AreaPoli() {
    const [iluminacaoBombas, setIluminacaoBombas] = useState(null);
    const [aguaDiluicao, setAguaDiluicao] = useState(null);
    const [vazamentoTubulacoes, setVazamentoTubulacoes] = useState(null);
    const [limpezaEquipamentos, setLimpezaEquipamentos] = useState(null);
    const [alimentacaoAgua, setAlimentacaoAgua] = useState(null);
    const [iluminacaoPiso1, setIluminacaoPiso1] = useState(null);
    const [iluminacaoPiso2, setIluminacaoPiso2] = useState(null);
    const [calhaAplicacao, setCalhaAplicacao] = useState(null);
    const [calhaDosagemSolucao, setCalhaDosagemSolucao] = useState(null);
    // Adicione estados semelhantes para outras perguntas

    return (
        <View style={styles.conteiner}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>Iluminação do local das bombas ok?</Text>
                <TouchableOpacity
                    style={styles.radioButton}
                    onPress={() => setIluminacaoBombas('Sim')}
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
                    onPress={() => setIluminacaoBombas('Não')}
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

            {/* Repita o padrão para outras perguntas */}
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        padding: 10,

    },
    questionContainer: {
        flexDirection: 'row',
    },
    questionText: {
        width: '100%',
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
        borderRadius: 35,
        borderColor: '#777',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
    selectedOutlineCircle: {
        borderColor: 'blue',
    },
    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 25,
        backgroundColor: 'transparent',
    },
    selectedInnerCircle: {
        backgroundColor: 'blue',
    },
});