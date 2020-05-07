import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default function SelectPot(props) {
    const [selected, setSelected] = useState('');
    const { navigate } = props.navigation;
    //const { params } = props.plant;

    handleSelect = (event) => {
        console.log(event)
        setSelected(event)
        //navigate('SelectName')
    };

    return (
        <View style={styles.container}>
            <View style={styles.bordertop}>
                <Text style={styles.text}>Lisää kasvi</Text>
            </View>
            <View>
                <Text style={styles.top}>Valitse ruukku</Text>
            </View>
            <View style={styles.middle}>
                {filteredPlantList.map((item, i) => (
                    <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    key={i}
                    title={"choosePot"}
                    style={styles.border}
                    >
                    <Text style={styles.plantheader}>{item.nimi}</Text>
                    <Image style={styles.plantimage} source={require('../assets/flowerpot.png')} />

                    </TouchableOpacity>
                ))}
                <ListItem
                        onPress={() => handleSelect(item)}
                        key={i}
                        title={item.laji}
                        containerStyle={{
                            backgroundColor: '#FCFCFC'
                        }}
                    />
            </View>
            <View style={styles.bottom}>
                <Button
                    icon={{
                        name: "add",
                        size: 25,
                        color: "black"
                    }}
                    title="Lisää uusi ruukku"
                    titleStyle={{marginLeft:15, color:"black"}}
                    buttonStyle={styles.btn}
                /> 
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 48,
        paddingBottom: 20,
        borderBottomColor: '#DEDDDD', 
        borderBottomWidth: 1,
    },
    bordertop: {
        shadowColor: '#DEDDDD',
        shadowOpacity: 2,
        shadowOffset:{
            height: 2,
            width: 2
        },
        backgroundColor: '#FAFAFA'
    },
    top: {
        fontSize: 36,
        marginTop: 60,
        marginLeft: 20
    },
    middle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 4,
    },
    border: {
        shadowColor: 'rgba(0,0,0, .1)', // IOS
        shadowOffset: { height: 3, width: 2 }, // IOS
        shadowOpacity: 3, // IOS
        shadowRadius: 1, //IOS
        elevation: 3, // android
        borderRadius: 4,
        backgroundColor: 'white',
        alignContent:"center",
        height: 200,
        width: 150
    },
    plantheader: { 
        textAlign: 'center', 
        fontSize: 16, 
        marginTop: 10, 
        fontWeight: "bold" 
    },
    plantimage: { 
        width: 150, 
        height: 150 
    },
    bottom: {
        justifyContent:"center",
        flexDirection:"row",
        flex:1
    },
    btn: {
        backgroundColor: "#F0F0F0",
        borderRadius: 4,
        width: 250,
        marginTop:-40
    }
});