import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';

import Header from '../../components/Header';
import AreaPoli from '../screensCheckListLocal/2 piso Casa Quimica I/AreaPoli';
import AreaSulfato from '../screensCheckListLocal/2 piso Casa Quimica I/AreaSulfato';
import CustomButton from '../../components/CustomButton';

import axios from 'axios';

async function enviarDadosParaServidor(data) {
    try {
        console.log('Enviando dados para o servidor:', data);
        const response = await axios.post('http://192.168.1.9:8080/api/areapoli', data);

        if (response.status === 200) {
            console.log('Dados enviados com sucesso.');
        } else {
            console.error('Falha ao enviar dados para o servidor.');
        }
    } catch (error) {
        console.error('Erro ao enviar dados para o servidor:', error);
    }
}

export default function Piso2CasaQuimica() {
    const [showAreaPoli, setShowAreaPoli] = useState(true);
    const [showAreaSulfato, setShowAreaSulfato] = useState(true);

    const [areaPoliChoices, setAreaPoliChoices] = useState({
        iluminacaoBombas: null,
        aguaDiluicao: null,
        vazamentoTubulacoes: null,
        limpezaEquipamentos: null,
        alimentacaoAgua: null,
        iluminacaoPiso1: null,
        iluminacaoPiso2: null,
        calhaAplicacao: null,
        calhaDosagemSolucao: null,
    });

    const [text, setText] = useState(""); // Observação do Piso2CasaQuimica
    const updateObservacao = (newObservacao) => {
        setText(newObservacao);
    }

    async function handleEnviar() {
        const data = {
            iluminacaoBombas: areaPoliChoices.iluminacaoBombas,
            aguaDiluicao: areaPoliChoices.aguaDiluicao,
            vazamentoTubulacoes: areaPoliChoices.vazamentoTubulacoes,
            limpezaEquipamentos: areaPoliChoices.limpezaEquipamentos,
            alimentacaoAgua: areaPoliChoices.alimentacaoAgua,
            iluminacaoPiso1: areaPoliChoices.iluminacaoPiso1,
            iluminacaoPiso2: areaPoliChoices.iluminacaoPiso2,
            calhaAplicacao: areaPoliChoices.calhaAplicacao,
            calhaDosagemSolucao: areaPoliChoices.calhaDosagemSolucao,
            observacao: text, // Usar diretamente o estado text para a observação
        };
        enviarDadosParaServidor(data);
    }



    return (
        <SafeAreaView>
            <ScrollView style={styles.scrollView}>
                <Header />
                {showAreaPoli ? (
                    <View style={styles.containerContent}>
                        <TouchableOpacity onPress={() => setShowAreaPoli(!showAreaPoli)}>
                            <Text style={styles.title}>Área Polieletrolito</Text>
                        </TouchableOpacity>

                        <View style={styles.local}>
                            <AreaPoli setChoices={setAreaPoliChoices} choices={areaPoliChoices} updateObservacao={updateObservacao}/>
                        </View>
                    </View>
                ) : (
                    <TouchableOpacity onPress={() => setShowAreaPoli(!showAreaPoli)}>
                        <Text style={styles.title}>Área Polieletrolito</Text>
                    </TouchableOpacity>
                )}

                <View style={styles.Button}>
                    <CustomButton title="Enviar" onPress={handleEnviar} />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerContent: {
        width: 'auto',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
    },
    title: {
        width: '95%',
        padding: 5,
        borderRadius: 10,
        fontSize: 30,
        backgroundColor: '#85BBE3',
        marginLeft: 20,
        marginTop: 15,
    },
    local: {
        width: '92%',
        backgroundColor: '#C5C4C4',
        marginLeft: 30,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    scrollView: {
        flexGrow: 1,
    },

    Button: {
        width: '100%',
        alignItems: 'center',
        padding: 10,

    },

});