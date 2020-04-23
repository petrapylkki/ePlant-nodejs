import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

export default function Add() {
    const [searchedPlant, setSearchedPlant] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Lisää kasvi</Text>
                <Icon name="close" style={{alignSelf: "flex-end"}}/>
            </View>
            <View style={styles.content}>
                <Text>Valitse kasvi</Text>
                <SearchBar
                    onChangeText={search}
                    placeholder={'Hae kasveja'}
                    onChangeText={searchedPlant => setSearchedPlant(searchedPlant)}
                    value={searchedPlant}
                    lightTheme={true}
                    showCancel={true}
                    cancelButtonTitle={'Peruuta'}
                    containerStyle={{backgroundColor: '#FCFCFC',
                                    borderColor: '#FCFCFC'}}
                    inputContainerStyle={{backgroundColor: '#F0F0F0'}}
                    >
                </SearchBar>
                {list.map((item, i) => (
                    <ListItem
                        onPress={() => alert('En tee vielä mitään')}
                        key={i}
                        title={item.title}
                        leftIcon={<Icon
                                name={item.icon}
                                color='#555555'
                                />}
                        chevron
                        containerStyle={{
                            backgroundColor: '#FCFCFC'
                        }}
                    />
                ))}

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 10,
        marginBottom: 5,
        flexDirection: "row"
    },
    content: {
        flexDirection: "column"
    }

});