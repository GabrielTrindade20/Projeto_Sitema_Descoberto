import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import CloradorPos from './DosadoresDeCloro/CloradorPos'
import CloradorPre from './DosadoresDeCloro/CloradorPre'
import CloradorByPass from './DosadoresDeCloro/CloradorByPass'

export default function DosadoresCloro({ choices, setChoices, updateObservacao }) {
    const [text, setTextoDosadoresCloro] = useState("");
    const [tabSelected, setTabSelected] = useState('CloradorPos'); // Inicialmente, a primeira aba está ativa

    const handleObservacaoChange = (newText) => {
        setTextoDosadoresCloro(newText);
        updateObservacao(newText);
    }

    const { situacao, modo, limpezaArea, silosTampados, bombas } = choices;

    const setBombas = (value) => {
        setChoices({ ...choices, bombas: value });
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, tabSelected === 'CloradorPos' && styles.selectedTab]}
                    onPress={() => setTabSelected('CloradorPos')}
                >
                    <Text style={[styles.tabText, tabSelected === 'CloradorPos' && styles.selectedTabText]}>Clorador Pós</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabSelected === 'CloradorPre' && styles.selectedTab]}
                    onPress={() => setTabSelected('CloradorPre')}
                >
                    <Text style={[styles.tabText, tabSelected === 'CloradorPre' && styles.selectedTabText]}>Clorador Pré</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, tabSelected === 'CloradorByPass' && styles.selectedTab]}
                    onPress={() => setTabSelected('CloradorByPass')}
                >
                    <Text style={[styles.tabText, tabSelected === 'CloradorByPass' && styles.selectedTabText]}>Clorador By Pass</Text>
                </TouchableOpacity>

                {/* Adicione outras abas conforme necessário */}
            </View>
            <ScrollView style={styles.content}>
                {tabSelected === 'CloradorPos' && (
                    // Conteúdo para a aba CloradorPos
                    <View>
                        <View>
                            <CloradorPos choices={choices} setChoices={setChoices} />

                        </View>
                    </View>
                )}
                {tabSelected === 'CloradorPre' && (
                    // Conteúdo para a aba CloradorPre
                    <View>
                        <CloradorPre choices={choices} setChoices={setChoices}/>
                    </View>
                )}
                {tabSelected === 'CloradorByPass' && (
                    // Conteúdo para a aba CloradorPre
                    <View>
                        <CloradorByPass choices={choices} setChoices={setChoices} />
                    </View>
                )}
                {/* Adicione outras condições para renderizar o conteúdo das abas */}
            </ScrollView>
            {/* Conteúdo comum das abas aqui */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    tabs: {
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#C4C4C4',
        elevation: 3,

    },
    tab: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,

    },
    selectedTab: {
        backgroundColor: '#0C5AA5',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedTabText: {
        color: '#FFFF',
    },
    content: {
        flex: 1,
    },
});
