import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';

import Header from '../../components/Header';
import AreaPoli from '../screensCheckListLocal/2 piso Casa Quimica I/AreaPoli';
import AreaSulfato from '../screensCheckListLocal/2 piso Casa Quimica I/AreaSulfato';
import CustomButton from '../../components/CustomButton';

export default function Piso2CasaQuimica() {
    const [showAreaPoli, setShowAreaPoli] = useState(true);
    const [showAreaSulfato, setShowAreaSulfato] = useState(true);

    // Estados para as escolhas do usuário
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
        // Adicione outros estados aqui
    });

    const [areaSulfatoChoices, setAreaSulfatoChoices] = useState({
        // Defina os estados para a área Sulfato de Alumínio
    });

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
                            <AreaPoli choices={areaPoliChoices} setChoices={setAreaPoliChoices} />
                        </View>
                    </View>
                ) : (
                    <TouchableOpacity onPress={() => setShowAreaPoli(!showAreaPoli)}>
                        <Text style={styles.title}>Área Polieletrolito</Text>
                    </TouchableOpacity>
                )}

                <View style={styles.Button}>
                    <CustomButton title="Enviar"  />
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