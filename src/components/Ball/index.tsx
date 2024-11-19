import React from "react";
import { styles } from "./styles";
import{TouchableOpacity,TouchableOpacityProps,ActivityIndicator,Text, View}from 'react-native';
type Props = TouchableOpacityProps & {
    color: string
}
export  function Ball({...rest}:Props){
    return(
       <View
        style={[styles.ball, {borderColor: rest.color? rest.color: 'gray'}]}/>
    );
}