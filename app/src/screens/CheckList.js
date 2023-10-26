import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';

export default function CheckList() {
    const navigation = useNavigation();

    const navigateToPiso2CasaQuimica = () => {
        navigation.navigate('Piso2CasaQuimica');
    };

    const navigateToPiso3CasaQuimica = () => {
        navigation.navigate('Piso3CasaQuimica');
    };

    const navigateToAreaFluor = () => {
        navigation.navigate('AreaFluor');
    };

    const navigateToDosadoresCloro = () => {
        navigation.navigate('DosadoresCloro');
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <Header />

                <View>
                    <Text style={styles.title}>Check List Local</Text>
                    <View style={styles.Card}>
                        <TouchableOpacity onPress={navigateToPiso2CasaQuimica} style={styles.containerContent}>
                            <Text style={styles.local}>2º Piso - Casa Química I</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToPiso3CasaQuimica} style={styles.containerContent}>
                            <Text style={styles.local}>3º Piso - Casa Química I</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToAreaFluor} style={styles.containerContent}>
                            <Text style={styles.local}>Área Fluor</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToDosadoresCloro} style={styles.containerContent}>
                            <Text style={styles.local}>Área Dosadores de Cloro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToPiso2CasaQuimica} style={styles.containerContent}>
                            <Text style={styles.local}>Área Dioxido de Cloro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToPiso2CasaQuimica} style={styles.containerContent}>
                            <Text style={styles.local}>Área Geocalcio</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToPiso2CasaQuimica} style={styles.containerContent}>
                            <Text style={styles.local}>Área Dosadores de Cloro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToPiso2CasaQuimica} style={styles.containerContent}>
                            <Text style={styles.local}>Área Evaporadores de Cloro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToPiso2CasaQuimica} style={styles.containerContent}>
                            <Text style={styles.local}>TAPQ</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Card: {
        width: '92%',
        marginLeft: 30,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        backgroundColor: '#C5C4C4',
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
        fontSize: 20,
        padding: 5,
        marginTop: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
    },
})