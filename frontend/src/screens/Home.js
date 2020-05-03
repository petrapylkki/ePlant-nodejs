import React from 'react';
import { StyleSheet, Alert, View, Text, Image, FlatList, Button, ScrollView, TouchableOpacity } from 'react-native';
import WaterPump from '../components/WaterpumpControl';

export default function Home(props) {
    const [user, setuser] = React.useState("Petra")
    const [plants, setPlants] = React.useState(["Teuvo", "Martti", "Ykä", "Teppo"]);
    const navigationOptions = { title: 'Home' };
    const { navigate } = props.navigation;

    const alert = () => {

    }



    return (
        <ScrollView style={styles.container}>
            <View style={[styles.top]} >
                <Text style={[styles.top]}>Huomenta {user}!</Text>
            </View>
            {/* <View style={{marginLeft: 20, backgroundColor: '#D7E8F7', width: '90%', height: 80, borderRadius: 4, marginBottom: 15, flexDirection: 'row'}}>
                <Image style={{height: 30, width: 30, marginTop: 25, marginLeft: 10}} source={require('./drop.png')}/>
                <View>
                    <Text style={{color: '#5386B4', fontSize: 14, fontWeight: 'bold', marginLeft: 10, marginTop: 15}}>Vesisäiliö on lähes tyhjä</Text>
                    <Text style={{color: '#555555', fontSize: 12, marginLeft: 10, marginRight: 10, marginTop: 5}}>Täytä vesisäiliö säännöllisesti, jotta kasvisi saavat raikasta vettä joka päivä.</Text>
                </View>
            </View> */}
           
            <View>
                <WaterPump/>
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
                        <TouchableOpacity style={[styles.border]}
                            onPress={() => navigate('MyPlant')}
                        >

                            <Text style={[styles.middletext]}>{item}</Text>
                            <Image style={[styles.middleimage]} source={require('../assets/flowerpot.png')} />
                        </TouchableOpacity>
                    }
                />
            </View>
            <View style={[styles.bottomheader]}>
                <Text style={[styles.header]}>Viimeisimmät tapahtumat</Text>
                <TouchableOpacity
                    onPress={() => navigate('Notifications', { plants })}
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
                                <Image style={[styles.bottomimage]} source={require('../assets/eaaf7e.png')} />
                            </View>
                            <View style={[styles.bottomtext]}>
                                <Text style={[styles.bottomtext1]}>Tänään klo 8.20</Text>
                                <Text style={[styles.bottomtext2]}>{item} kasteltu.</Text>
                            </View>
                        </View>

                    }
                />
            </View>
        </ScrollView>
    );
};
Home.navigationOptions = ({ navigate }) => ({ title: 'Home' });

const styles = StyleSheet.create({
    button: {
        paddingBottom: 20
    },
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1,

    },
    top: {
        fontSize: 26,
        marginLeft: 10,
        flex: 1,
        marginTop: 40,
        marginBottom: 30
    },
    middle: {
        fontSize: 14,
        marginLeft: 10,
        flex: 2,
        fontWeight: 'bold',
        shadowColor: "#000"
    },
    header: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 10
    },
    border: {
        shadowColor: '#DEDDDD',
        shadowOpacity: 2,
        shadowOffset: {
            height: 2,
            width: 2
        },
        marginRight: 3,
        marginLeft: 3,
        backgroundColor: 'white',
        height: 170
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
        justifyContent:"space-between",
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 30
    },
    showmore: {
        color: '#63816D',
        fontSize: 12,
        fontWeight: "bold",
        marginRight: 15
    },
    bottom: {
        marginLeft: 10,
        flex: 2,
        fontWeight: 'bold',
        fontSize: 14,
        shadowColor: '#DEDDDD',
        shadowOpacity: 2,
        shadowOffset: {
            height: 2,
            width: 2
        },
        backgroundColor: 'white',
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10

    },
    bottomitem: {
        flexDirection: "row",
        marginBottom: 5,
        marginTop: 10

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
