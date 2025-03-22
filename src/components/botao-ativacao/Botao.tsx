import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './BotaoStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; 

type RootStackParamList = {
  HomeScreen: undefined;
  Details: undefined;

};

type BotaoProps = {
  texto?: string;
  route?: keyof RootStackParamList;  
};

export function Botao({ texto, route }: BotaoProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (route) {
      navigation.navigate(route);  
    } else {
      navigation.goBack();  
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={handlePress}>
        <Text style={styles.texto}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
}
