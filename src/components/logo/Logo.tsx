import React from 'react';
import { Image, ImageSourcePropType, useWindowDimensions, View } from 'react-native';

import { styles } from './LogoStyles';

const logo = require('../../../assets/logo.png')

type LogoProps = {
    source: ImageSourcePropType; 
    size?: number; 
};

export function Logo({ source, size = 150 }: LogoProps) {

    return (
        <View>
            <Image source={source} style={{ width: size, height: size }}></Image>
        </View>
    );
}