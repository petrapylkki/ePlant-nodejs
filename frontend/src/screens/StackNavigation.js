import React from 'react';
import{createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack'
import Search from './src/components/Search';
import NewPlant from './src/components/NewPlant';

export default createStackNavigator({
    screen: Search,
    screen: NewPlant
});
