import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Logo } from '../components/logo/Logo';
import { Botao } from '../components/botao-ativacao/Botao';

type Props = {
  navigation: any; 
};

const logo = require('../../assets/logo.png')

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Logo source={logo} size={200}/>
      <Botao texto='SOCORRO' route="Details"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
});
