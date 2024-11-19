import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
type Props = {
    caption: string,
    color: string,
    selected?: boolean 
}
export  function Flag({...rest}:Props){
    return(
       <TouchableOpacity style={[styles.container, {backgroundColor: rest?.color}, rest?.selected && {borderWidth: 2}]}>
        <Text style={{color: '#ffff'}}>{rest.caption}</Text>
       </TouchableOpacity>
    );
}