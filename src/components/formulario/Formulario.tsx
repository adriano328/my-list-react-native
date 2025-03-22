import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from '@react-navigation/stack';

import { styles } from './FormularioStyles';
import { Campo } from './components/campo/Campo';
import { Botao } from '../botao-ativacao/Botao';

type RootStackParamList = {
    HomeScreen: undefined;
    Details: undefined;
};

type FormularioNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

type Props = {
    navigation?: FormularioNavigationProp;
};

export function Formulario({ navigation }: Props) {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <View style={styles.containerCampo}>
                    <Campo minHeight={35} maxCharactersPerLine={30}
                        lineHeight={10} placeholder={'Título:'} />
                </View>
                <View style={styles.containerCampo}>
                    <Campo minHeight={50} maxCharactersPerLine={35}
                        lineHeight={15} placeholder={'Local/Referência:'} />
                </View>
                <View style={styles.containerCampo}>
                    <Campo minHeight={100} maxCharactersPerLine={35}
                        lineHeight={15} placeholder={'Descrição do Ocorrido:'} />
                </View>
                <View style={styles.containerCamera}>
                    <View style={styles.camera}>
                        <MaterialIcons name="add-a-photo" size={35} color="black" />
                    </View>
                </View>
                <View style={styles.containerBotao}>
                        <Botao texto='ENVIAR' route="HomeScreen" />
                        <Botao texto='VOLTAR' />
                </View>
            </View>
        </ScrollView>
    );
}