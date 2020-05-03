import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import firebase from '../components/firebase';

export default function Add() {
    const [plantList, setPlantlist] = useState([]);
    const [filteredPlantList, setFilteredPlantlist] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selected, setSelected] = useState({});
    const handleChange = text => {
        setSearchTerm(text);
    };
    const handleSubmit = event => {
        handleChange(event.nativeEvent.text)
    };

    useEffect(() => {
        firebase.database().ref('kasvit/').on('value', snapshot => {
            const plantList = Object.values(snapshot.val());

            setPlantlist(plantList);
            setFilteredPlantlist(plantList);
        });
    }, []);

    useEffect(() => {
          const results = plantList.filter(plant => 
            plant.laji.toLowerCase().includes(searchTerm.toLowerCase())
          )
          setFilteredPlantlist(results);
    }, [searchTerm]);

    selectPlant = () => {
        setSelected(event.target.value)
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                <Text style={styles.headertitle}>Lisää kasvi</Text>
                </View>
            </View>

        <ScrollView>
            <View style={styles.content}>
                <Text style={styles.title}>Valitse kasvi</Text>
                <SearchBar
                    onChangeText={handleChange}
                    placeholder='Hae kasveja'
                    onSubmitEditing={handleSubmit}
                    value={searchTerm}
                    platform='ios'
                    lightTheme={true}
                    showCancel={true}
                    cancelButtonTitle='Peruuta'
                    containerStyle={styles.searchcontainer}
                    inputContainerStyle={{backgroundColor: '#F0F0F0'}}
                    returnKeyType='search'
                    />
                {filteredPlantList.map((item, i) => (
                    <ListItem
                        onPress={() => alert(`${item.laji}`)}
                        key={i}
                        title={item.laji}
                        containerStyle={{
                            backgroundColor: '#FCFCFC'
                        }}
                    />
                ))}
            </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC'
    },
    header: {
        shadowColor: '#DEDDDD',
        shadowOpacity: 2,
        shadowOffset:{
            height: 2,
            width: 2
        },
        backgroundColor: '#FAFAFA'
    },
    headertitle: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 48,
        paddingBottom: 20,
        borderBottomColor: '#DEDDDD', 
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 22, 
        marginBottom: 10, 
        marginLeft: 10
    },
    content: {
        flexDirection: "column",
        marginTop: 20
    },
    searchcontainer: {
        backgroundColor: '#FCFCFC',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        marginBottom: 20
    }

});