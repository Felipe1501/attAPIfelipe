import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Cep() {
  return (
    <>
        <Text  style={styles.texto}>CIDADE: </Text>
        <Text  style={styles.texto}>UF:</Text>
        <Text style={styles.texto}>LOGRADOURO:</Text>
        <Text style={styles.texto}>COMPLEMENTTO:</Text>
    </>
  );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 15,
        marginTop: 10,
    },
});