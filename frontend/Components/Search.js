import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, Button, Header, ScrollView, TouchableOpacity } from 'react-native';
import SearchBox from './SearchBar';

export default function Search(props) {

    const [easyPlants, setEasyPlants] = React.useState(["Kaktus1", "Kaktus2", "Kaktus3", "Kaktus4"]);
    const [foodPlants, setFoodPlants] = React.useState(["Korianteri", "Rucola", "Basilika", "Minitomaatti"]);
    const [popularPlants, setPopularPlants] = React.useState(["Peikonlehti", "Kultapalmu", "Jukkapalmu", "Traakkipuu"]);
    const{ navigate} = props.navigation;

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, borderColor: '#FAFAFA' }}>
                <Text style={[styles.title]}>Haku</Text>
                <SearchBox />
            </View>
            <ScrollView style={{ marginTop: 100 }}>
                <View style={styles.top}>
                    <Text style={styles.text}>Helppohoitoiset kasvit</Text>
                    <FlatList
                        horizontal={true}
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        marginLeft={15}
                        data={easyPlants}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => navigate('NewPlant')}
                                title="NewPlant"
                                style={[styles.border]}
                            >
                                <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10, fontWeight: "bold" }}>{item}</Text>
                                <Image style={{ width: 150, height: 150 }} source={require('./kaktus.jpeg')} />

                            </TouchableOpacity>

                        }
                    />
                </View>
                <View style={styles.middle}>
                    <Text style={styles.text}>Ruokaan</Text>
                    <FlatList
                        horizontal={true}
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        marginLeft={15}
                        data={foodPlants}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => navigate('NewPlant')}
                                title="NewPlant"
                                style={[styles.border]}
                            >
                                <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10, fontWeight: "bold" }}>{item}</Text>
                                <Image style={{ width: 150, height: 150 }} source={require('./flowerpot.png')} />

                            </TouchableOpacity>

                        }
                    />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.text}>Suositut huonekasvit</Text>
                    <FlatList
                        horizontal={true}
                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        marginLeft={15}
                        data={popularPlants}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => navigate('NewPlant')}
                                title="NewPlant"
                                style={[styles.border]}
                            >
                                <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10, fontWeight: "bold" }}>{item}</Text>
                                <Image style={{ width: 150, height: 150 }} source={require('./aloevera.jpeg')} />

                            </TouchableOpacity>

                        }
                    />
                </View>
            </ScrollView>

        </View>
    );



};

Search.navigationOptions= ({navigate}) => ({title:'Search'});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1
    },
    top: {
        flex: 2,
        marginTop: 25
    },
    middle: {
        flex: 2
    },
    bottom: {
        flex: 2
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 15,
        marginTop: 15
    },
    border: {
        borderWidth: 2,
        borderColor: "#0000000D",
        borderRadius: 2,
        marginRight: 3,
        marginLeft: 3,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 28,
        marginBottom: 20,

    },
});
