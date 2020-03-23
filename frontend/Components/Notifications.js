import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function Notifications() {
    const [plants, setPlants] = React.useState(["Teuvo", "Martti", "Ykä", "Teppo"]);

    return (
        <View style={[styles.container]}>
            <View style={[styles.border]}>
                <Text style={[styles.text]}>Ilmoitukset</Text>
            </View>
            <View style={styles.bottom}>
                <FlatList data={plants}
                    marginLeft={15}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: "row", width: 179, height: 40, marginBottom: 35 }}>
                            <View>
                                <Image style={{ width: 40, height: 40, borderRadius: 40 }} source={require('./eaaf7e.png')} />
                            </View>
                            <View style={{ marginLeft: 10, marginBottom: 10, flex: 2 }}>
                                <Text style={{ marginLeft: 5, fontSize: 12, color: "#ACACAC", fontWeight: "bold", marginBottom: 6 }}>Tänään klo 8.20</Text>
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
        backgroundColor: '#FCFCFC',
        flex: 1
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 28,
        marginBottom: 20,
    },
    border: {
        borderWidth: 1,
        borderColor: '#DEDDDD',
        backgroundColor: '#FAFAFA'
    },
    bottom: {
        marginLeft: 10,
        flex: 2,
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 51

    },
});
