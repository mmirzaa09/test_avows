import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { forwardRef } from 'react'

const TextInputComponent = forwardRef(
    ({
        label,
        placeholder,
        onChange,
        typeKeyboard
    }) => {
        return (
            <View style={{ marginTop: 10, width: 'auto' }}>
                <Text style={Styles.label}>{label}</Text>
                <TextInput
                    style={Styles.input}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    keyboardType={typeKeyboard}
                />
            </View>
        )
    }
);

const Styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 0.8,
        borderRadius: 8,
        borderColor: '#006633',
        marginTop: 10,
        paddingLeft: 15
    },

})

export default TextInputComponent;