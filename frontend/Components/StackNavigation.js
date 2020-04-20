import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Search from './Components/Search';
import NewPlant from './Components/NewPlant';

export default createStackNavigator({
    screen: Search,
    screen: NewPlant
});
