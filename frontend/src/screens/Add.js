import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon, ListItem, SearchBar } from 'react-native-elements';
import firebase from '../components/firebase';

export default function Add() {
    const [plantList, setPlantlist] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');
    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    React.useEffect(() => {
        firebase.database().ref('kasvit/').on('value', snapshot => {
          const plantList = Object.values(snapshot.val());
          const results = plantList.filter(plant => 
            plant.toLowerCase().includes(searchTerm.toLowerCase())
          )
          setPlantlist(results);
        });
    }, [searchTerm]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                <Text style={styles.headertitle}>Lisää kasvi</Text>
                </View>
                <View>
                <Icon name="close"/>
                </View>
            </View>

        <ScrollView>
            <View style={styles.content}>
                <Text style={styles.title}>Valitse kasvi</Text>
                <SearchBar
                    onChangeText={handleChange}
                    placeholder='Hae kasveja'
                    onSubmitEditing={() => search()}
                    value={searchTerm}
                    platform='ios'
                    lightTheme={true}
                    showCancel={true}
                    cancelButtonTitle='Peruuta'
                    containerStyle={styles.searchcontainer}
                    inputContainerStyle={{backgroundColor: '#F0F0F0'}}
                    returnKeyType='search'
                    />
                {plantList.map((item, i) => (
                    <ListItem
                        onPress={() => alert('En tee vielä mitään')}
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
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 30
    },
    headertitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
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