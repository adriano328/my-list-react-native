import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './CampoStyles';

type CampoProps = {
    placeholder: string;
    minHeight?: number;
    maxCharactersPerLine?: number;
    lineHeight?: number;
};

export function Campo({
    placeholder,
    minHeight = 50,
    maxCharactersPerLine = 30,
    lineHeight = 25
}: CampoProps) {
    const [text, setText] = useState('');
    const [height, setHeight] = useState(minHeight);

    const handleTextChange = (input: string) => {
        setText(input);
    
        const lines = Math.ceil(input.length / maxCharactersPerLine);
        const newHeight = Math.max(minHeight, lines * lineHeight);
    
        setHeight(newHeight);
      };

    return (
        <View style={styles.container}>
             <TextInput
        style={[styles.campo, { height }]}
        placeholder={placeholder}
        multiline
        textAlignVertical="top"
        onChangeText={handleTextChange}
        value={text}
      />
        </View>
    );
}