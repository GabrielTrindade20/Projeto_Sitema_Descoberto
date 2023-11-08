// Layout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';


const ConteinerAba = ({ children }) => {
    return (
        <View style={styles.conteinerAba}>
            {children}
        </View>
    );
};

const ConteinerText = ({ children }) => {
    return (
        <View style={styles.conteinerText}>
            {children}
        </View>
    );
};
const ConteinerContent = ({ children }) => {
    return (
        <View style={styles.conteinerContent}>
            {children}
        </View>
    );
};
const ConteinerChose = ({ children }) => {
    return (
        <View style={styles.conteinerChose}>
            {children}
        </View>
    );
};
const Options = ({ children }) => {
    return (
        <View style={styles.options}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    conteinerAba: {
        width: '100%',
        backgroundColor: '#fff7',
        padding: 5,
        marginBottom: 20,
    },
    conteinerText: {
        alignItems: 'center',
        marginBottom: 10,
    },
    // Adicione mais estilos conforme necessário
    conteinerContent: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 5,
        padding: 15,
        marginBottom: 15,
    },
    conteinerChose: {
        width: '30%',
        height: 150,
        flexDirection: 'column',
        backgroundColor: '#D2D2D2',
        borderRadius: 5,
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
    },
    options: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontSize: 20,
        flexDirection: 'row',
    },
    // Adicione mais estilos conforme necessário
});

export {
    ConteinerAba,
    ConteinerText,
    ConteinerContent,
    ConteinerChose,
    Options
};
