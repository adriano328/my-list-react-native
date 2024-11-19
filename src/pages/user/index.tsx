import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {Ionicons} from '@expo/vector-icons'
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

export default function User() {
    const navigation = useNavigation<NavigationProp<any>>();

    const handleLogout = () => {
        Alert.alert("Logout", "Você saiu da conta.");
        return navigation.reset({ routes: [{ name: 'Login' }] })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Lucas Adriano.</Text>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Ionicons name="exit" style={{color: 'black'}} size={40}></Ionicons>
            </TouchableOpacity>
        </View>
    )
}