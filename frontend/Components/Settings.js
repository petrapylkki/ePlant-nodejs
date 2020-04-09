import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function Settings() {
    return (
        <View style={[styles.container]}>
            <View style={[styles.border]}>
                <Text style={[styles.text]}>Asetukset</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 28,
        marginBottom: 20,
    },
    border: {
        shadowColor: '#DEDDDD',
        shadowOpacity: 2,
        shadowOffset:{
            height: 2,
            width: 2
        },
        backgroundColor: '#FAFAFA'
    },
});