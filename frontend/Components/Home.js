import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function Home() {
    const [plants, setPlants] = React.useState(["Teuvo", "Martti", "Ykä", "Teppo"]);

    return (
        <View style={styles.container}>
            <View style={styles.top} >
                <Text style={[styles.top]}>Moi Petra!</Text>
            </View>
            <View style={styles.middle}>
                <Text style={[styles.middle]}>Omat kasvini</Text>
                <FlatList
                    horizontal={true}
                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    marginLeft={15}
                    data={plants}
                    renderItem={({ item }) =>
                        <View style={[styles.border]}>
                            <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 10, fontWeight:"bold" }}>{item}</Text>
                            <Image style={{ width: 150, height: 150 }} source={require('./flowerpot.png')} />

                        </View>

                    }
                />
            </View>
            <View style={styles.bottom}>
                <Text style={[styles.bottom]}>Viimeisimmät tapahtumat</Text>
                <FlatList data={plants}
                    marginLeft={15}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <View>
                                <Image style={{ width: 30, height: 30, borderRadius: 40}} source={require('./eaaf7e.png')} />
                            </View>
                            <View style={{ marginLeft: 10, marginBottom: 10, flex:2 }}>
                                <Text style={{ marginLeft: 5, fontSize: 12, color: "#ACACAC", fontWeight: "bold" }}>Tänään klo 8.20</Text>
                                <Text style={{ marginLeft: 5, fontSize: 16 }}>{item} kasteltu.</Text>
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
        backgroundColor: 'white',
        flex: 1


    },
    top: {
        fontSize: 26,
        marginTop: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 25,
        flex: 1
    },
    middle: {
        fontSize: 14,
        marginLeft: 10,
        flex: 2,
        fontWeight: 'bold',
    },
    bottom: {
        marginLeft: 10,
        flex: 2,
        fontWeight: 'bold',
        fontSize: 14

    },
    border: {
        borderWidth: 2, 
        borderColor: "#0000000D", 
        borderRadius: 2, 
        marginRight: 3,
        marginLeft: 3,
        shadowColor:'#0000000D', 
        shadowOpacity: 1, 
        shadowOffset:{width: 10, height: 10}
    }


});
