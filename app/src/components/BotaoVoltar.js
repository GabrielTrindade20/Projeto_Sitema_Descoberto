import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image
                source={require('../assets/imagens/Seta_Voltar.png')}
                style={styles.setaVolta}
            />
            <Text style={styles.text}>Voltar</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        width: '12%',
        top: 31,
        left: 30,
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1000, // Define a camada do cabeçalho para aparecer acima dos demais conteúdos
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        flexDirection: 'row',
        fontWeight: 'bold',
        marginVertical: 2,
    },
    setaVolta: {
        width: 20, // Largura da imagem
        height: 20, // Altura da imagem
    },
});

export default BackButton;
