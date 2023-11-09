import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Tabs, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';

import CheckListLocal from './CheckListLocal';
import CheckListSistema from './CheckListSistema'

export default function CheckList() {
    const [showCheckListLocal, setShowCheckListLocal] = useState(false);
    const [showCheckListSistema, setShowCheckListSistema] = useState(false);

    const toggleCheckListLocal = () => {
        setShowCheckListLocal(!showCheckListLocal);
        setShowCheckListSistema(false); // Certifique-se de desabilitar o outro componente ao clicar em um
    };

    const toggleCheckListSistema = () => {
        setShowCheckListSistema(!showCheckListSistema);
        setShowCheckListLocal(false); // Certifique-se de desabilitar o outro componente ao clicar em um
    };

    

    return (
        <View style={styles.SafeAreaView}>
            <Header />
            <ScrollView style={styles.scrollView}>
                <View style={styles.containerContent}>
                    <TouchableOpacity onPress={toggleCheckListLocal}>
                        <Text style={styles.title}>Check List dos Locais</Text>
                    </TouchableOpacity>

                    <View style={styles.local}>
                        {showCheckListLocal && (
                            <CheckListLocal />
                        )}
                    </View>

                    <TouchableOpacity onPress={toggleCheckListSistema}>
                        <Text style={styles.title}>Check List dos Sistemas</Text>
                    </TouchableOpacity>

                    <View style={styles.local}>
                        {showCheckListSistema && (
                            <CheckListSistema />
                        )}
                    </View>
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
    Card: {
        width: '92%',
        marginLeft: 30,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        // backgroundColor: '#C5C4C4',
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
        backgroundColor: '#C5C4C4',
        width: '92%',
        marginLeft: 30,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
})