import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor}) => {
    return (
        <TouchableOpacity
            onPress= {onPress} 
            style={[
                styles.container, 
                styles['container_'+type],
                bgColor ? {backgroundColor: bgColor} : {},
                ]}>

           <Text style={[
                styles.text, 
                styles['text_'+type],
                fgColor ? {color: fgColor} : {}
                
                ]}> {text} </Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5, 
    },

    container_PRIMARY: {
        backgroundColor: '#000000' //black
    },

    container_SECONDARY: {
        borderColor: '#000000',
        borderWidth: 2,
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white'
    },

    text_SECONDARY: {
        color: '#000000',
    },

    text_TERTIARY: {
        color: 'gray',
    }
});

export default CustomButton;