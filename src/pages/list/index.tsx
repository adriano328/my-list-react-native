import React, { useContext, useRef } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
import { Input } from "../../components/input";
import { MaterialIcons } from '@expo/vector-icons'
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/flag";
import { themes } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
import { formatDateToBr } from "../../global/function";
import { Swipeable } from "react-native-gesture-handler";

export default function List() {
    const { taskList } = useContext<AuthContextType>(AuthContextList);

    // Correctly type the swipeableRefs array
    const swipeableRefs = useRef<(Swipeable | null)[]>([]);

    const _renderCard = (item: PropCard, index: number) => {
        const color = item.flag === 'Opcional' ? themes.colors.blueLigth : themes.colors.red;

        return (
            <Swipeable ref={(ref) => (swipeableRefs.current[index] = ref)} key={index}
            >
                <View style={styles.card}>
                    <View style={styles.rowCard}>
                        <View style={styles.rowCardLeft}>
                            <Ball color={color} />
                            <View>
                                <Text style={styles.titleCard}>{item.title}</Text>
                                <Text style={styles.descriptionCard}>{item.description}</Text>
                                <Text style={styles.descriptionCard}>até {formatDateToBr(item.timeLimit)}</Text>
                            </View>
                        </View>
                        <Flag caption={item.flag} color={color} />
                    </View>
                </View>
            </Swipeable>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>Bom dia, <Text style={{ fontWeight: 'bold' }}>Lucas!</Text></Text>
                <View style={styles.boxInput}>
                    <Input IconLeft={MaterialIcons} iconLeftName="search" />
                </View>
            </View>
            <View style={styles.boxList}>
                <FlatList
                    data={taskList}
                    style={{ marginTop: 40, paddingHorizontal: 30 }}
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({ item, index }) => _renderCard(item, index)}
                />
            </View>
        </View>
    );
}
