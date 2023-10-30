import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextComponent = ({ style, children }) => {
    const styles = {
        defaultStyle: {
            fontSize: 20,
            color: 'black',
            // Defina estilos comuns aqui
        },
        textTitulo: {
            fontSize: 30,
            color: 'red',
            // Outros estilos
        },
        textSubTitulo: {
            fontSize: 30,
            fontWeight: 'bold',
            marginVertical: 2,
            // Outros estilos
        },
        textQuestoes: {
            fontSize: 21,
            flexDirection: 'row',
            fontWeight: 'bold',
            marginVertical: 2,
            // Outros estilos
        },
    };

    const getStyle = (style) => {
        switch (style) {
            case 'textTitulo':
                return styles.textTitulo;
            case 'textQuestoes':
                return styles.textQuestoes;
            case 'textSubTitulo':
                return styles.textSubTitulo;
            default:
                return styles.defaultStyle;
        }
    };

    return <Text style={[getStyle(style)]}>{children}</Text>;
};

export default TextComponent;
