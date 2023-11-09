import axios from 'axios';
import React, { useState,  } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../../components/Header'  // Importe o componente de cabeçalho
import { useNavigation } from '@react-navigation/native';


import Piso3CasaQuimica from './Piso3CasaQuimica'

import BotaoVoltar from '../../../components/BotaoVoltar';
import CustomButton from '../../../components/CustomButton';

export default function AbaPiso3() {
    const navigation = useNavigation();

    const [observacoes, setObservacoes] = useState({});
    const updateObservacao = (area, observacao) => {
        setObservacoes({ ...observacoes, [area]: observacao });
    }

    async function handleEnviar() {
        let validationFailed = false;

        for (const area in areaData) {
            const data = {
                ...areaData[area],
                observacao: observacoes[area],
            };

            if (area === 'Piso3CasaQuimica' && areaData.Piso3CasaQuimica.situacao === 'Operando') {
                if (!checkAllOptionsSelected(areaData.Piso3CasaQuimica)) {
                    console.error('Você deve selecionar todas as opções na quando a situação é Operando.');
                    validationFailed = true;
                    break; // Sai do loop e exibe uma mensagem de erro
                }
            }

            // Agora envie os dados para o servidor
            await enviarDadosParaServidor(data, area.toLowerCase());
        }

        if (!validationFailed) {
            console.log('Todos os dados foram enviados com sucesso.');
        }
    }


    // Função para enviar dados para o servidor
    async function enviarDadosParaServidor(data, area) {
        try {
            console.log('Enviando dados para o servidor:', data);
            const response = await axios.post(`http://192.168.1.5:8080/api/${area}`, data);

            if (response.status === 200) {
                console.log('Dados enviados com sucesso.');
            } else {
                console.error('Falha ao enviar dados para o servidor.');
            }
        } catch (error) {
            console.error('Erro ao enviar dados para o servidor:', error);
        }
    }

    // Função para verificar se todas as opções foram selecionadas
    function checkAllOptionsSelected(areaChoices) {
        for (const choice in areaChoices) {
            if (areaChoices[choice] === null) {
                return false;
            }
        }
        return true;
    }

    const [areaData, setAreaData] = useState({
        Piso3CasaQuimica: {
            situacao: null,
            iluminacaoArea: null,
            limpezaArea: null,
            silosTampados: null,
            operacaoTalhaManual: null,
            conteineresVazios: null,
            vazamentoTubulacoes: null,
            hasteTanqueSulfato: null,
            chuveiroDeEmergencia: null,
            preparoPiaPoliA: null,
            preparoPiaPoliB: null,
            preparoPiaPoliC: null,
            // ... outras opções
        },
        // Adicione outras áreas conforme necessário
    });

    const [showArea, setShowArea] = useState({
        Piso3CasaQuimica: true,
        // Defina outras áreas aqui como 'true' se você quiser exibi-las inicialmente.
    });

    const toggleArea = (area) => {
        setShowArea({
            ...showArea,
            [area]: !showArea[area], // Inverte a visibilidade da área clicada
        });
    };

    const [showPiso3CasaQuimica, setShowPiso3CasaQuimica] = useState(true);
    const togglePiso3CasaQuimica = () => {
        setShowPiso3CasaQuimica(!showPiso3CasaQuimica);
    };

    //Função criada para voltar para a página de CheckList
    const handleGoBack = () => {
        navigation.navigate('CheckList'); // ou a rota para a tela CheckList
    };

    return (
        <View style={styles.SafeAreaView}>
            <Header />
            <BotaoVoltar onPress={handleGoBack} />

            <ScrollView style={styles.scrollView}>

                {Object.entries(areaData).map(([area, options]) => (
                    showArea[area] ? (
                        <View style={styles.containerContent} key={area}>
                            <TouchableOpacity onPress={() => toggleArea(area)}>
                                <Text style={styles.title}>3º andar Casa Química I</Text>
                            </TouchableOpacity>
                            <View style={styles.local}>
                                {area === 'Piso3CasaQuimica' && (
                                    <Piso3CasaQuimica
                                        key={area} // Adicione a chave aqui
                                        choices={options}
                                        setChoices={(newChoices) => setAreaData({ ...areaData, [area]: newChoices })}
                                        updateObservacao={(newObservacao) => updateObservacao(area, newObservacao)}
                                    />
                                )}

                            </View>
                        </View>
                    ) : (
                        <TouchableOpacity key={area} onPress={() => toggleArea(area)}>
                            <Text style={styles.title}>3º andar Casa Química I</Text>
                        </TouchableOpacity>
                    )
                ))}

                <View style={styles.Button}>
                    <CustomButton title="Enviar" onPress={handleEnviar} />
                </View>

            </ScrollView>
        </View>
    );
}




const styles = StyleSheet.create({
    SafeAreaView: {
        paddingTop: 30,
        marginBottom: 60,
    },
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


    Button: {
        width: '100%',
        alignItems: 'center',
        padding: 10,

    },
});