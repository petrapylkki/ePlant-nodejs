import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

export default function Settings() {

    const list = [
        {
            title: 'Ruukut',
            icon: 'av-timer'
        },
        {
            title: 'Turvallisuus',
            icon: 'flight-takeoff'
        },
        {
            title: 'Ilmoitukset',
            icon: 'flight-takeoff'
        },
        {
            title: 'Tietoja',
            icon: 'flight-takeoff'
        },
      ]

    return (
        <View style={[styles.container]}>
            <View style={[styles.header]}>
                <Text style={[styles.text]}>Asetukset</Text>
            </View>
            <View>
                {
                    list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={<Icon
                                name={'policy'}
                                type='material'
                                color='#517fa4'
                                />}
                        chevron
                    />
                    ))
                }
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
    header: {
        shadowColor: '#DEDDDD',
        shadowOpacity: 2,
        shadowOffset:{
            height: 2,
            width: 2
        },
        backgroundColor: '#FAFAFA',
        borderBottomColor: '#DEDDDD', 
        borderBottomWidth: 1,
    },
});