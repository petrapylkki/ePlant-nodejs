import React, { useState, useEffect, Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground, Alert, Button } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit'

export default function MyPlant(props) {
    const [channelId, setChannelId] = React.useState(1020483);
    const [humidity, setHumidity] = React.useState(0);
    const [waterLevel, setWaterLevel] = React.useState(0);
    const [plants, setPlants] = React.useState(["Teuvo", "Teuvo", "Teuvo"]);
    const { navigate } = props.navigation;


    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const url = 'https://thingspeak.com/channels/' + channelId + '/feed.json';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.feeds[99].field1 != null) {
                    setHumidity(responseJson.feeds[99].field1);
                } else {
                    Alert.alert("tää on null");
                }
                if (responseJson.feeds[99].field2 != null) {
                    setWaterLevel(responseJson.feeds[99].field2);
                } else {
                    Alert.alert("tääki on null");
                }
            })
            .catch((error) => {
                Alert.alert('Error', error);
            });
    }

    return (
        <ScrollView style={[styles.container]}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 70, marginLeft: 30 }}>Teuvo</Text>
                    <Text style={{ fontSize: 16, color: '#63816D', marginLeft: 30, marginTop: 5, fontWeight: '600', fontStyle: 'italic' }}>Peikonlehti</Text>
                    <Image style={{ width: 70, height: 70, marginLeft: 30, marginTop: 20, backgroundColor: 'white', borderRadius: 100 }} source={require('./smile.svg')} />
                </View>
                <View>
                    <Image style={{ width: 250, height: 250, marginLeft: 20 }} source={require('./flowerpot.png')} />
                </View>
            </View>
            <View style={{ flex: 2, backgroundColor: 'white', height: 600, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Text style={{ fontSize: 12, color: '#63816D', marginLeft: 20, fontWeight: 'bold' }}>5.6.2019</Text>
                    <Text style={{ fontSize: 12, color: '#ACACAC', marginLeft: 10 }}>7 kuukautta</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ borderRightColor: '#ACACAC', borderRightWidth: 1 }}>
                        <Text style={{ fontSize: 16, marginLeft: 38, marginTop: 20, fontWeight: 'bold', marginRight: 40 }}>Mullan kosteus</Text>
                        <Text style={{ fontSize: 14, color: '#63816D', marginLeft: 38, fontWeight: '600', marginTop: 130 }}>Seuraava kastelu</Text>
                        <Text style={{ fontSize: 12, color: '#555555', marginLeft: 48 }}>2 päivän kuluttua</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, marginLeft: 40, marginTop: 20, fontWeight: 'bold' }}>Vesitaso</Text>
                    </View>
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
                
                {/* <Text>{humidity} + {waterLevel}</Text> */}
            </View>
            {/* <View>
                <PieChart
                    data={humidity}
                    width={200}
                    height={220}
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View> */}


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E8E7E2',
        flex: 1,
    },
    header: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 5
    },
    bottomheader: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 50
    },
    showmore: {
        color: '#63816D',
        fontSize: 12,
        marginLeft: 90,
        fontWeight: 'bold'
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
