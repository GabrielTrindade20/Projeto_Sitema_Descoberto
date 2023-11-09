import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';

export default function CheckListLocal() {
    const navigation = useNavigation();

    return (
        <View style={styles.SafeAreaView}>
            <ScrollView>
                <View>
                    <View style={styles.Card}>
                        <Text style={styles.local}>Nada Aqui por Enquanto</Text>
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