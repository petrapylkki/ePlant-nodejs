import React from 'react';
import { SearchBar, Text, Header } from 'react-native-elements';
import { StyleSheet } from 'react-native';

export default class SearchBox extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            
            <SearchBar
                lightTheme={true}
                containerStyle={{height: 110, backgroundColor:'white', shadowColor:'#0000000D' }}
                inputContainerStyle={{marginTop:45, backgroundColor:'#F0F0F0', width:'95%', alignSelf:'center', borderRadius:6}}
                placeholderTextColor={{placeholderTextColor:'#555555'}}
                placeholder="Hae kasveja"
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}
