import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function Home(props) {
    const [user, setuser] = React.useState("Petra")
    const [plants, setPlants] = React.useState(["Teuvo", "Martti", "Ykä", "Teppo"]);
    const navigationOptions = { title: 'Home' };
    const { navigate } = props.navigation;

    return (
        <View style={styles.container}>
            <View style={[styles.top]} >
                <Text style={[styles.top]}>Huomenta {user}!</Text>
            </View>
            <View style={styles.middle}>
                <Text style={[styles.header]}>Omat kasvini</Text>
                <FlatList
                    horizontal={true}
                    contentContainerStyle={{ alignSelf: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    marginLeft={15}
                    data={plants}
                    renderItem={({ item }) =>
                        <View style={[styles.border]}>
                            <Text style={[styles.middletext]}>{item}</Text>
                            <Image style={[styles.middleimage]} source={require('./flowerpot.png')} />
                        </View>
                    }
                />
            </View>
            <View style={[styles.bottomheader]}>
                <Text style={[styles.header]}>Viimeisimmät tapahtumat</Text>
                <TouchableOpacity
                    onPress={() => navigate('Notifications', {plants})}
                >
                    <Text style={[styles.showmore]}>Näytä lisää</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <FlatList data={plants}
                    marginLeft={15}
                    renderItem={({ item }) =>
                        <View style={[styles.bottomitem]}>
                            <View>
                                <Image style={[styles.bottomimage]} source={require('./eaaf7e.png')} />
                            </View>
                            <View style={[styles.bottomtext]}>
                                <Text style={[styles.bottomtext1]}>Tänään klo 8.20</Text>
                                <Text style={[styles.bottomtext2]}>{item} kasteltu.</Text>
                            </View>
                        </View>

                    }
                />
            </View>
        </View>
    );
};
Home.navigationOptions= ({navigate}) => ({title:'Home'});

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1,

    },
    top: {
        fontSize: 26,
        marginLeft: 10,
        flex: 1,
        marginTop: 30
    },
    middle: {
        fontSize: 14,
        marginLeft: 10,
        flex: 2,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 5
    },
    border: {
        borderWidth: 2,
        borderColor: "#0000000D",
        borderRadius: 2,
        marginRight: 3,
        marginLeft: 3,
    },
    middletext: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontWeight: "bold"
    },
    middleimage: {
        width: 150,
        height: 150
    },
    bottomheader: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 30
    },
    showmore: {
        color: '#63816D',
        fontSize: 12,
        marginLeft: 60
    },
    bottom: {
        marginLeft: 10,
        flex: 2,
        fontWeight: 'bold',
        fontSize: 14,

    },
    bottomitem: {
        flexDirection: "row",
        marginBottom: 5
    },
    bottomimage: {
        width: 30,
        height: 30,
        borderRadius: 40
    },
    bottomtext: {
        marginLeft: 10,
        marginBottom: 10,
        flex: 2
    },
    bottomtext1: {
        marginLeft: 5,
        fontSize: 12,
        color: "#ACACAC",
        fontWeight: "bold"
    },
    bottomtext2: {
        marginLeft: 5,
        fontSize: 16
    }
});
