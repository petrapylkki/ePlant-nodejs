import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Select() {
    const [value, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={[styles.border]}>
                <Text style={[styles.text]}>Ilmoitukset</Text>
            </View>
            <View >
                <TextInput
                    placeholder={'Valitse ruukku'}
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
    text: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 48,
        paddingBottom: 20,
        borderBottomColor: '#DEDDDD', 
        borderBottomWidth: 1,
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
    textinput: {
        marginLeft: 29,
        marginTop: 71,
        color: '#404040',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 29

    }

});