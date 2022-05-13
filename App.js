import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HELLO HELLO!</Text>
      <View style={styles.bloco}>
          <Text style={styles.texto}>DIGITE SEU CEP:</Text>
          <TextInput
          placeholder='ex: 11730000'
          keyboardType='numeric'
          style={styles.input}
          />
          <TouchableOpacity
          style={styles.bloco}>
              <Text style={styles.txtBloco}>BUSCAR</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco: {
      fontSize: 30,
      marginTop: '3%',
      width: '100%',
      alignItems: 'center',
  },

  texto:{
      fontSize: 25,

  },

  input: {
    width: '80%',
    borderBottomWidth: 2,
    marginLeft: '5%',
    fontSize: 20,
    borderRadius: 10,
    marginTop: '3%',
    textAlign: 'center',
    backgroundColor: '#E6F5FF'
  },

  txtBloco: {
      backgroundColor: '#1D1AF5',
      borderColor: '#1D1AF5',
      borderRadius: 20,
      width: '80%',
      height: 40,
      marginLeft: '5%',
      textAlign: 'center',
      fontSize: 20,
    },
});
