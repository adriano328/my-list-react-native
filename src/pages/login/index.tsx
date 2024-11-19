import React, { useState } from "react";
import {Text, View,Image, Alert} from 'react-native'
import { styles } from "./styles";
import logo from '../../assets/logo.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('lucas@gmail.com');
    const [password, setPassword] = useState('12345');
    const [showPassword, setShowPassWord] = useState(true);
    const [loading,setLoading]           = useState(false);

    async function getLogin() {        
        try {
            setLoading(true)
            
            if(!email ||!password){
                return Alert.alert('Anteção','Informe os campos obrigatórios!')
            }

            if(email === 'lucas@gmail.com' && password === '12345'){
                return navigation.reset({routes:[{name :'BottomRoutes'}]});
            } else {
                Alert.alert('Atenção','E-mail ou senha invalida!')
            }

        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxTop}>
                <Image source={logo} style={styles.logo} resizeMode="contain" />
                <Text style={styles.text}>Bem vindo de volta!</Text>
            </View>
            <View style={styles.boxMid}>
                <Input onChangeText={setEmail} value={email} title="ENDEREÇO DE E-MAIL" iconRightName="email" IconRight={MaterialIcons} />
                <Input secureTextEntry={showPassword} onIconRightPress={() => setShowPassWord(!showPassword)} onChangeText={setPassword} value={password} title="SENHA" iconRightName={showPassword ? 'eye' : 'eye-closed'} IconRight={Octicons} />
            </View>
            <View style={styles.boxBottom}>
                <Button  text="ENTRAR" loading={loading} onPress={()=>getLogin()}/>
            </View>
            <Text>Não tem conta? <Text style={{ color: themes.colors.primary }}>Crie Agora!</Text></Text>
        </View>
    )
}
