import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../components/Header'  // Importe o componente de cabeçalho
import BotaoVoltar from '../../../components/BotaoVoltar';
import AreaFluor from './AreaFluor'
import CustomButton from '../../../components/CustomButton';


export default function AbaFluor() {
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

            // if (area === 'AreaFluor' && areaData.AreaFluor.situacao === 'Operando') {
            //     if (!checkAllOptionsSelected(areaData.AreaFluor)) {
            //         console.error('Você deve selecionar todas as opções na quando a situação é Operando.');
            //         validationFailed = true;
            //         break; // Sai do loop e exibe uma mensagem de erro
            //     }
            // }

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
        AreaFluor: {
            tanqueNeutralizacao: null,
            registroAlimentacao: null,
            areaContencao: null,
            salaDosagem: null,
            vazamentos: null,
            iluminacaoArea: null,
            registroAgua: null,
            calhaContencao: null,
            chuveiroEmergencia: null,
            // ... outras opções
        },
        // Adicione outras áreas conforme necessário
    });

    const [showArea, setShowArea] = useState({
        AreaFluor: true,
        // Defina outras áreas aqui como 'true' se você quiser exibi-las inicialmente.
    });

    const toggleArea = (area) => {
        setShowArea({
            ...showArea,
            [area]: !showArea[area], // Inverte a visibilidade da área clicada
        });
    };

    const [showAreaFluor, setShowAreaFluor] = useState(true);
    const toggleAreaFluor = () => {
        setShowAreaFluor(!showAreaFluor);
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
                                <Text style={styles.title}>Área flúor</Text>
                            </TouchableOpacity>
                            <View style={styles.local}>
                                {area === 'AreaFluor' && (
                                    <AreaFluor
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
                            <Text style={styles.title}>Área flúor</Text>
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
    scrollView: {
        flexGrow: 1,
    },

    Button: {
        width: '100%',
        alignItems: 'center',
        padding: 10,

    },
    errorMessageContainer: {
        backgroundColor: '#ff0000', // Cor de fundo vermelha
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        Button: 0,
        left: 0,
        right: 0,
    },
    errorMessageText: {
        color: '#ffffff', // Cor do texto branca
        fontSize: 20,
    },
});