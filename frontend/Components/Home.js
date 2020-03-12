import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function Home() {
    const [plants, setPlants] = React.useState(["Teuvo", "Martti"]);

    return (
        <View styles={styles.container}>
            <View style={styles.top} >
                <Text>Moi Petra!</Text>
            </View>
            <View style={styles.middle}>
                <Text>Omat kasvini</Text>
                <FlatList data={plants}
                    renderItem={({ item }) =>
                        <Text>{item}</Text>}
                />
            </View>
            <View style={styles.bottom}>
                <Text>Viimeisimmät tapahtumat</Text>
                <FlatList data={plants}
                    renderItem={({ item }) =>
                        <Text>{item}</Text>}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#013220',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    top: {
        flex: 2,
        backgroundColor: 'red'
    },
    middle: {
        flex: 4,
        backgroundColor: 'blue'
    },
    bottom: {
        flex: 3,
        backgroundColor: 'green'
    }
});
