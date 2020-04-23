import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, ListItem, SearchBar } from 'react-native-elements';
import firebase from '../components/firebase';

export default function Add() {
    const [plantList, setPlantlist] = React.useState([]);
    const [searchedPlant, setSearchedPlant] = React.useState('');

    React.useEffect(() => {
        firebase.database().ref('kasvit/').on('value', snapshot => {
          const plantList = Object.values(snapshot.val());

          setPlantlist(plantList);
    
        });
    }, []);

    const search = () => {
        Alert.alert('Tää ei viel tee mitää :/')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertitle}>Lisää kasvi</Text>
                <Icon name="close" style={{position: 'absolute', right: 0}}/>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Valitse kasvi</Text>
                <SearchBar
                    onChangeText={search}
                    placeholder={'Hae kasveja'}
                    onChangeText={searchedPlant => setSearchedPlant(searchedPlant)}
                    value={searchedPlant}
                    lightTheme={true}
                    showCancel={true}
                    cancelButtonTitle={'Peruuta'}
                    containerStyle={styles.searchcontainer}
                    inputContainerStyle={{backgroundColor: '#F0F0F0'}}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC'
    },
    headertitle: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 28,
        marginBottom: 20,
    },
    title: {
        fontSize: 22, 
        marginBottom: 10, 
        marginLeft: 10
    },
    content: {
        flexDirection: "column",
        marginTop: 40
    },
    searchcontainer: {
        backgroundColor: '#FCFCFC',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        marginBottom: 20
    }

});