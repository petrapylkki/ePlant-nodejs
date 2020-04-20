import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit'

export default function MyPlant(props) {
    const [channelId, setChannelId] = React.useState(1008455);
    const [humidity, setHumidity] = React.useState(0);
    const [waterLevel, setWaterLevel] = React.useState(0);

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
            <View>
                <PieChart
                    data={humidity}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="humidity"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>
            <Text>{humidity} + {waterLevel}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1,
    },

});
