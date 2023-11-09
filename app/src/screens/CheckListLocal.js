import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';

export default function CheckListLocal() {
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

    const navigateToAreaTanqueSulfato = () => {
        navigation.navigate('AreaTanqueSulfato');
    };

    const navigateToClimaTempo = () => {
        navigation.navigate('ClimaTempo');
    };

    const navigateToAreaDioxidoCloro = () => {
        navigation.navigate('AreaDioxidoCloro');
    };

    const navigateToEvaporadoresCloro = () => {
        navigation.navigate('EvaporadoresCloro');
    };

    const navigateToAreaGeocalcio = () => {
        navigation.navigate('AreaGeocalcio');
    };

    const navigateToTapq = () => {
        navigation.navigate('Tapq');
    };

    return (
        <View style={styles.SafeAreaView}>
            <ScrollView>
                <View>
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

                        <TouchableOpacity onPress={navigateToAreaTanqueSulfato} style={styles.containerContent}>
                            <Text style={styles.local}>Tanques de Sulfato de Alumínio</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToClimaTempo} style={styles.containerContent}>
                            <Text style={styles.local}>Clima-Tempo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToAreaDioxidoCloro} style={styles.containerContent}>
                            <Text style={styles.local}>Dióxido de Cloro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToEvaporadoresCloro} style={styles.containerContent}>
                            <Text style={styles.local}>Área Evaporadores de Cloro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToAreaGeocalcio} style={styles.containerContent}>
                            <Text style={styles.local}>Geocálcio</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={navigateToTapq} style={styles.containerContent}>
                            <Text style={styles.local}>TAPQ</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    SafeAreaView: {
        marginBottom: 10,
        padding: 5,
    },
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
        color: '#000',
        fontWeight: 'bold',
    },
    local: {
        fontSize: 20,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#E9E9E9',
        borderRadius: 5,
        color: '#000',
        fontWeight: '200',
    },
})