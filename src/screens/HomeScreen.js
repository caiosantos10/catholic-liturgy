import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao HomeScreen!</Text>
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
 },
 title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
 },
});
