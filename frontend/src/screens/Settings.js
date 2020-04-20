import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

export default function Settings() {

    const list = [
        {
            title: 'Ruukut',
            icon: 'local-drink'
        },
        {
            title: 'Turvallisuus',
            icon: 'security'
        },
        {
            title: 'Ilmoitukset',
            icon: 'notifications'
        },
        {
            title: 'Tietoja',
            icon: 'info'
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
                        onPress={() => alert('En tee vielä mitään')}
                        key={i}
                        title={item.title}
                        leftIcon={<Icon
                                name={item.icon}
                                color='#555555'
                                />}
                        chevron
                        containerStyle={{
                            backgroundColor: '#FCFCFC'
                        }}
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