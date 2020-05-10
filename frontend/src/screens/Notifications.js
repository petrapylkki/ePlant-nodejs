import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import firebase from '../components/firebase';

export default function Notifications() {
    const [myPlants, setMyPlants] = useState([]);

    console.disableYellowBox = true;

    // retrieving firebase data and inserting it to "plants" list
    useEffect(() => {
        firebase.database().ref('omatkasvit/').on('value', snapshot => {
            const plants = Object.values(snapshot.val());
            setMyPlants(plants);
        });
    }, []);
    
    return (
        <View style={[styles.container]}>
            <View style={[styles.border]}>
                <Text style={[styles.text]}>Ilmoitukset</Text>
            </View>
            <View style={styles.bottom}>
                <FlatList
                    data={myPlants}
                    marginLeft={15}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: "row", width: 179, height: 40, marginBottom: 35 }}>
                            <View>
                                <Image style={{ width: 40, height: 40, borderRadius: 40 }} source={require('../assets/eaaf7e.png')} />
                            </View>
                            <View style={{ marginLeft: 10, marginBottom: 10, flex: 2 }}>
                                <Text style={{ marginLeft: 5, fontSize: 12, color: "#ACACAC", fontWeight: "bold", marginBottom: 6 }}>Tänään klo 8.20</Text>
                                <Text style={{ marginLeft: 5, fontSize: 16 }}>{item.nimi} kasteltu.</Text>
                            </View>
                        </View>
                    }
                />
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
        elevation:4,
        backgroundColor: '#FAFAFA'
    },
    bottom: {
        marginLeft: 10,
        flex: 2,
        fontWeight: 'bold',
        fontSize: 14,
        marginTop:  20

    },
});
