import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Add() {
    const [value, onChangeText] = React.useState('Lisää kasvi');

    return (
        <View style={[styles.container]}>
            <View style={[]}>
                <TextInput
                    style={[styles.textinput]}
                    clearButtonMode={"always"}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />

            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textinput: {
        marginLeft: 29,
        marginTop: 71,
        color: '#404040',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 29

    }

});