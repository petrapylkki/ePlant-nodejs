import React from 'react';
import { SearchBar, Text, StyleSheet } from 'react-native-elements';

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
                containerStyle={{ height: 60, backgroundColor: '#FAFAFA', borderTopColor: 'white'}}
                inputContainerStyle={{ backgroundColor: '#F0F0F0', width: 342, height: 42, alignSelf: 'center', borderRadius: 6 }}
                placeholderTextColor={{ placeholderTextColor: '#555555' }}
                placeholder="Hae kasveja"
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}
