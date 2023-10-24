import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/Header'  // Importe o componente de cabeçalho

export default function Piso3CasaQuimica() {
    return (
        <SafeAreaView>
            <Header />

        <Text>2º Piso -Casa Química I</Text>
        </SafeAreaView>
    );
}