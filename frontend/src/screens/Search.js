import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from '../components/firebase';
import Plants from '../components/Plants';

export default function Search(props) {
    const [easyPlants, setEasyPlants] = useState([]);
    const [foodPlants, setFoodPlants] = useState([]);
    const [lowWaterPlants, setlowWaterPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showList, setShowList] = useState(false);
    const [showCards, setShowCards] = useState(true);
    const { navigate } = props.navigation;

    console.disableYellowBox = true;

    // retrieving and filtering data from firebase db
    // setting filtered data to differend lists
    useEffect(() => {
        firebase.database().ref('kasvit/').on('value', snapshot => {
          const plants = Object.values(snapshot.val());
          const easyPlants = plants.filter(plant => plant.hoito === 'Helppo')
          const foodPlants = plants.filter(plant => plant.tyyppi === 'Ruokakasvi')
          const lowWaterPlants = plants.filter(plant => plant.vesitarve === 'Niukka')
        
          setEasyPlants(easyPlants);
          setFoodPlants(foodPlants);
          setlowWaterPlants(lowWaterPlants); 
        });
    }, []);

    const handleHide = () => {

    }

    // sending selected items data to next screen and navigating to there
    const handleSelect = (item) => {
        navigate('Plant', { plant: item })
    };

    // handles change of the search word
    const handleChange = (text) => {
        setShowList(true)
        setShowCards(false)
        setSearchTerm(text);
    };

    const handleCancel = () => {
        setShowList(false)
        setShowCards(true)
    }

    // handles forwading event data to handleChange after user clicks "search" on keyboard
    const handleSubmit = (event) => {
        handleChange(event.nativeEvent.text)
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.text}>Haku</Text>
                </View>
                <View style={styles.searchbar}>
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
                        onCancel={handleCancel}
                    />
                </View>
            </View>
            <ScrollView>
                {showList && <View>
                    <Text>MOI</Text>
                </View>}
                {showCards && <Plants/>}
            </ScrollView>

        </View>
    );



};

Search.navigationOptions = ({ navigate }) => ({ title: 'Search' });

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1
        
    },
    category: {
        marginTop: 25,
    },
    plantheader: { 
        textAlign: 'center', 
        fontSize: 16, 
        marginTop: 10, 
        fontWeight: "bold" 
    },
    plantimage: { 
        width: 150, 
        height: 150 
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 15,
    },
    border: {
        shadowColor: 'rgba(0,0,0, .1)', // IOS
        shadowOffset: { height: 3, width: 2 }, // IOS
        shadowOpacity: 3, // IOS
        shadowRadius: 1, //IOS
        elevation: 3, // android
        borderRadius: 4,
        margin:5,
        marginRight: 3,
        marginLeft: 3,
        backgroundColor: 'white',
        height: 170
    },
    header: {
        height: 100,
        shadowColor: '#DEDDDD',
        shadowOpacity: 2,
        shadowOffset:{
            height: 2,
            width: 2
        },
        elevation:4,
        backgroundColor: '#FAFAFA'
    },
    searchcontainer: {
        backgroundColor: '#FCFCFC',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        marginBottom: 20
    },
    textinput: {
        width: '80%',
        marginLeft: 10

    },
    icon: {
        color: 'grey',
        marginLeft: 10,
        marginTop: 10
    }
});
