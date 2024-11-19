import React from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import { Input } from "../../components/input";
import { MaterialIcons } from '@expo/vector-icons'
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/flag";
import { themes } from "../../global/themes";


type PropCard = {
    item: number,
    title: string,
    description: string,
    flag: 'urgente' | 'opcional'
}

const data: Array<PropCard> = [
    {
        item: 0,
        title: 'Realizar a lição de casa!',
        description: 'pagina 10 a 20',
        flag: 'urgente'
    },
    {
        item: 1,
        title: 'Passear com cachorro',
        description: 'pagina 10 a 20',
        flag: 'urgente'
    },
    {
        item: 2,
        title: 'Sair para tomar açai',
        description: 'pagina 10 a 20',
        flag: 'urgente'
    }
]

export default function List() {

    const _renderCard = (item: PropCard) => {
        return (
            <TouchableOpacity style={styles.card}>
                <View style={styles.rowCard}>
                    <View style={styles.rowCardLeft}>
                    <Ball  color="red"/>
                    <View>
                        <Text style={styles.titleCard}>{item.title}</Text>
                        <Text style={styles.descriptionCard}>{item.description}</Text>
                    </View>
                    </View>
                    <Flag caption="Urgente" color={themes.colors.red}/>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>Bom dia, <Text style={{ fontWeight: 'bold' }}>Lucas!</Text></Text>
                <View style={styles.boxInput}>
                    <Input IconLeft={MaterialIcons} iconLeftName="search"></Input>
                </View>
            </View>
            <View style={styles.boxList}>
                <FlatList data={data} style={{
                    marginTop: 40,
                    paddingHorizontal: 30
                }} keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({ item, index }) => {
                        return (_renderCard(item))
                    }}
                />
            </View>
        </View>
    )
}