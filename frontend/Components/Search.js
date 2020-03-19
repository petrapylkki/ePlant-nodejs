import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default function Search() {

    const [easyPlants, setEasyPlants] = React.useState(["Kaktus1", "Kaktus2", "Kaktus3", "Kaktus4"]);
    const [foodPlants, setFoodPlants] = React.useState(["Korianteri", "Rucola", "Basilika", "Minitomaatti"]);


    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Text>Haku</Text>

            </View>
            <View style={styles.top}>
                <Text>Helppohoitoiset kasvit</Text>
                <FlatList
                    horizontal={true}
                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    marginLeft={15}
                    data={easyPlants}
                    renderItem={({ item }) =>
                        <View style={[styles.border]}>
                            <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10, fontWeight:"bold" }}>{item}</Text>
                            <Image style={{ width: 150, height: 150 }} source={require('./flowerpot.png')} />

                        </View>

                    }
                />
            </View>
            <View style={styles.bottom}>
                <Text>Ruokaan</Text>
                <FlatList
                    horizontal={true}
                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    marginLeft={15}
                    data={foodPlants}
                    renderItem={({ item }) =>
                        <View style={[styles.border]}>
                            <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10, fontWeight:"bold" }}>{item}</Text>
                            <Image style={{ width: 150, height: 150 }} source={require('./flowerpot.png')} />

                        </View>

                    }
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    flatlist: {

    },
    search: {
        flex:1
    },
    top: {
        flex: 2
    },
    bottom: {
        flex: 2
    }
});