import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './src/screens/Home';
import Add from './src/screens/Add';
import Notifications from './src/screens/Notifications';
import Search from './src/screens/Search';
import Settings from './src/screens/Settings';
import NewPlant from './src/screens/NewPlant';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-home" color={tintColor} size={25} />
                )
            }
        },

        Search: {
            screen: Search,
            navigationOptions: {
                tabBarLabel: 'Search',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-search" color={tintColor} size={25} />
                )
            }
        },
        Add: {
            screen: Add,
            navigationOptions: {
                tabBarLabel: 'Add',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-add-circle" color={"#63816D"} size={50} />
                )
            }
        },
        Notifications: {
            screen: Notifications,
            navigationOptions: {
                tabBarLabel: 'Notifications',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-notifications-outline" color={tintColor} size={25} />
                )
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-settings" color={tintColor} size={25} />
                )
            }
        },

    },
    {
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'grey',
            showLabel: false,
            style: {
                height: 70,
                shadowColor: '#DEDDDD',
                shadowOpacity: 2,
                shadowOffset: {
                    height: 2,
                    width: 2
                },
                elevation: 3
                
            }

        }
    },

);


const AppContainer = createAppContainer(AppNavigator);
export default function Navigation() {
    return (
        <AppContainer />
    );
}