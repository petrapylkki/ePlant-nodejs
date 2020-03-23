import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './Components/Home';
import Add from './Components/Add';
import Notifications from './Components/Notifications';
import Search from './Components/Search';
import Settings from './Components/Settings';
import { Ionicons } from '@expo/vector-icons';

const AppNavigator = createBottomTabNavigator(
    {
        Home: { 
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home', 
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-home" color={tintColor} size={25} />
                )
            } },
        Search: { 
            screen: Search,
            navigationOptions: {
                tabBarLabel: 'Search', 
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-search" color={tintColor} size={25} />
                )
            } },
        Add: { 
            screen: Add,
            navigationOptions: {
                tabBarLabel: 'Add', 
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-add-circle" color={"#63816D"} size={50} />
                )
            } },
        Notifications: { 
            screen: Notifications,
            navigationOptions: {
                tabBarLabel: 'Notifications', 
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-notifications-outline" color={tintColor} size={25} />
                )
            } },
        Settings: { 
            screen: Settings,
            navigationOptions: {
                tabBarLabel: 'Settings', 
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-settings" color={tintColor} size={25} />
                )
            } }, 
            

    },
    {
        tabBarOptions: {
            activeTintColor: 'black', 
            inactiveTintColor: 'grey',
            showLabel: false,
            style: {height: 70}
                 
        }
    },

);



const AppContainer = createAppContainer(AppNavigator);
export default function Navigation() {
    return (
        <AppContainer />
    );
}
