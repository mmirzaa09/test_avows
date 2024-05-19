import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { forwardRef } from 'react'

const Button = forwardRef(
    ({
        label,
        onPress
    }) => {
        return (
            <TouchableOpacity style={Styles.container} onPress={onPress}>
                <Text style={Styles.label}>{label}</Text>
            </TouchableOpacity>
        )
    }
);

const Styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 'auto', 
        alignItems: 'center',
        margin: 10, 
        borderRadius: 10, 
        backgroundColor: '#ccffe6',
        marginTop: 30
    },
    label: {
        fontWeight: '700',
        fontSize: 16,
        color: '#006633'
    }
})

export default Button