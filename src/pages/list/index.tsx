import React from "react";
import { Text, View } from 'react-native';
import { styles } from "./styles";
import { Input } from "../../components/input";
import { MaterialIcons } from '@expo/vector-icons'

export default function List() {
    return (
       <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.greeting}>Bom dia, Lucas!</Text>
            <View style={styles.boxInput}>
            <Input IconLeft={MaterialIcons} iconLeftName="search"></Input>
            </View>
        </View>
       </View>
    )
}