import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Logo } from '../components/logo/Logo';
import { Formulario } from '../components/formulario/Formulario';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
};

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;


type Props = {
    navigation: DetailsScreenNavigationProp;
};

const logo = require('../../assets/logo.png')

export default function DetailsScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerImagem}>
                <Logo source={logo} size={80} />
            </View>
            <View style={styles.formulario}>
                <Formulario/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    containerImagem: {
        width: '100%',
        backgroundColor: '#DAA520',
        justifyContent: 'center',
        height: 60
    },
    formulario: {
        flex: 1,
        padding: 20,
        height: 600,
    }
});
