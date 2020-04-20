import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';

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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Asetukset</Text>
            </View>

            <View>
                <View style={styles.profilecontainer}>
                    <View>
                        <Avatar
                            size="large"
                            rounded title="PP"
                            overlayContainerStyle={{
                                backgroundColor: '#63816D'
                            }}
                        />
                    </View>
                    <View style={styles.profileinfo}>
                        <Text>Petra</Text>
                        <Text>pedrrro123</Text>
                    </View>
                </View>
                {list.map((item, i) => (
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
                ))}
            <Text>Kirjaudu ulos</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1,
        flexDirection: 'column'
    },
    profilecontainer: {
        padding: 20,
        borderBottomColor: '#DEDDDD', 
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 120,
        alignItems: 'center'
    },
    profileinfo: {
        marginLeft: 20,
        flex: 2
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