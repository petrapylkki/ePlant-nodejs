import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem, SearchBar, Icon } from 'react-native-elements';
import firebase from '../components/firebase';

export default function SelectPlant(props) {
    const [plantList, setPlantlist] = useState([]);
    const [filteredPlantList, setFilteredPlantlist] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { navigate } = props.navigation;
    
    console.disableYellowBox = true;

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

    handleSelect = (item) => {
        navigate('SelectPot', { plant: item.laji })
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{width:"14%"}}></Text>
                <Text style={styles.headertitle}>Lisää kasvi</Text>
                <TouchableOpacity onPress={() => navigate('Home')}>
                    <Icon name="close" size={40} iconStyle={styles.icon} />
                </TouchableOpacity>
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
                        onPress={() => handleSelect(item)}
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
        flexDirection:"row",
        justifyContent:"space-between",
    },
    headertitle: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: "11%",
        paddingBottom: 20,
    },
    icon: {
        marginTop: "70%",
        marginRight:15,
        color: 'grey',
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