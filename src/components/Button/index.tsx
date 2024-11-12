import React from "react";
import { styles } from "./styles";
import{TouchableOpacity,TouchableOpacityProps,ActivityIndicator,Text}from 'react-native';
type Props = TouchableOpacityProps & {
    text:string,
    loading?:boolean
}
export  function Button({...rest}:Props){
    return(
        <TouchableOpacity {...rest} 
            style={styles.button} 
            activeOpacity={0.6} 
        >
            {rest.loading?<ActivityIndicator color={'#FFF'}/>:<Text style={[styles.textButton]}>{rest.text}</Text>}
        </TouchableOpacity>
    );
}