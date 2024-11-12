import React, { forwardRef, Fragment, LegacyRef } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { FontAwesome, MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { styles } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
};

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {

    const {
        IconLeft,
        IconRight,
        iconLeftName,
        iconRightName,
        title,
        onIconLeftPress,
        onIconRightPress,
        ...rest
    } = Props;

    const calculatorSizeWidth = () => {
        if(IconLeft && IconRight) {
            return '80%'
        } else if(IconLeft || IconRight) {
            return '90%'
        } else {
            return '100%'
        }
    }

    const calculatorSizePaddingLeft = () => {
        if(IconLeft && IconRight) {
            return 10;
        } else if(IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }
    }

    return (
        <Fragment>
            <Text style={styles.titleInput}>{title}</Text>
            <View style={[styles.boxInput, {paddingLeft: calculatorSizePaddingLeft()}]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={styles.Button}>
                        <IconLeft name={iconLeftName as any} size={20} color={themes.colors.gray} style={styles.Icon}></IconLeft>
                    </TouchableOpacity>
                )}
              
                <TextInput style={[styles.input, {width: calculatorSizeWidth()}]} {...rest}/>
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={styles.Button}>
                        <IconRight name={iconRightName as any} size={20} color={themes.colors.gray} style={styles.Icon}></IconRight>
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    )
})