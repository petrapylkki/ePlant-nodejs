import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';

export default function NewPlant(props) {

    return (
        <ScrollView style={[styles.container]}>
            <View style={{ flex: 1 }}>
                <Image style={{ width: '100%', height: 250 }} source={require('./peikonlehti.png')} />
            </View>
            <View style={{ flex: 2, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 30 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10, }}>Peikonlehti</Text>
                    <Text style={{ marginLeft: 100, fontSize: 10, color: '#63816D', fontWeight: '600', fontStyle: 'italic' }}>Monstera deliciosa</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.box]}>
                        <View >
                            <Image style={{ width: 30, height: 30, marginLeft: 20, marginRight: 10 }} source={require('./hand-holding-plant-icon.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#404040' }}>Hoito</Text>
                            <Text style={{ fontSize: 14, color: '#404040' }}>Helppo</Text>
                        </View>
                    </View>
                    <View style={[styles.box]}>
                        <View >
                            <Image style={{ width: 30, height: 30, marginLeft: 20, marginRight: 10 }} source={require('./wateringcan.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#404040' }}>Veden tarve</Text>
                            <Text style={{ fontSize: 14, color: '#404040' }}>Niukka</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.box]}>
                        <View >
                            <Image style={{ width: 30, height: 30, marginLeft: 20, marginRight: 10 }} source={require('./cloud.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#404040' }}>Valon tarve</Text>
                            <Text style={{ fontSize: 14, color: '#404040' }}>Varjo</Text>
                        </View>
                    </View>
                    <View style={[styles.box]}>
                        <View >
                            <Image style={{ width: 30, height: 30, marginLeft: 20, marginRight: 10 }} source={require('./location.png')} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#404040' }}>Alkuperä</Text>
                            <Text style={{ fontSize: 14, color: '#404040' }}>Alankomaat</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ marginLeft: 15, marginRight: 15, marginTop: 15, fontSize: 14 }}>Erittäin kestävä, veistoksellinen ja trendikäs lehtikasvi, jolla on suuret, kiiltävän vihreät lehdet ja pitkät ilmajuuret. Tasainen kastelu vuoden ympäri, kasvia ei saa päästää täysin kuivaksi. Lannoitus viikoittain kasvukaudella. Pitää lehtien sumuttamisesta. Uudelleenistutus vasta, kun ruukku on jäänyt pieneksi. Ilmajuuria ei tarvitse poistaa.</Text>
                <Text style={{ marginLeft: 10, marginTop: 15, fontSize: 18, fontWeight: 'bold' }}>Peikonlehteni</Text>
                <View style={{flexDirection: 'row'}}>
                <View style={[styles.border]}>
                    <Text style={{ textAlign: 'center', fontSize: 12, marginTop: 10, fontWeight: "bold" }}>Teuvo</Text>
                    <Image style={{ width: 150, height: 150 }} source={require('./flowerpot.png')} />
                </View>
                <View style={[styles.add]}>
                    <Text style={{ textAlign: 'center', fontSize: 12, marginTop: 50, fontWeight: "bold" }}>Lisää kasvi</Text>
                    <Image style={{ width: 50, height: 50, marginLeft: 50, marginTop: 15}} source={require('./plus.png')} />
                </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FCFCFC',
        flex: 1
    },
    box: {
        flexDirection: "row",
        marginLeft: 15,
        backgroundColor: '#F0F0F0',
        width: 168,
        height: 68,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    border: {
        borderWidth: 2,
        borderColor: "#0000000D",
        borderRadius: 2,
        width: 150,
        marginTop: 15,
        marginLeft: 15,
    },
    add: {
        backgroundColor: '#F5F5F5',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        width: 150,
        borderRadius: 4
    }

});
