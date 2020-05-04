import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

export default function Add() {
    const [plantName, setPlantName] = useState('');

    return (
        <View style={styles.container}>
            <View>
                <Text>Melkein valmista! Anna vielä kasvillesi nimi.</Text>
                <Image style={styles.middleimage} source={require('../assets/flowerpot.png')} />
                <Input
                    placeholder='Anna kasville nimi'
                    style={styles.textinput}
                    clearButtonMode='always'
                    onChangeText={text => setPlantName(text)}
                />
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

});