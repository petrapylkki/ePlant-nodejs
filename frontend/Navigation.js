import React from 'react';
import { View, Text } from 'react-native';
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
        Home: { screen: Home },
        Search: { screen: Search },
        Add: { screen: Add },
        Settings: { screen: Settings },
        Notifications: { screen: Notifications }

    },

    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return <Ionicons name='ios-home' size={25} color={tintColor} />;
                } else if (routeName === 'Settings') {
                    return <Ionicons name='ios-settings' size={25} color={tintColor} />;
                } else if (routeName === 'Add') {
                    return <Ionicons name='ios-add-circle' size={35} color="#63816D" />;
                } else if (routeName === 'Search') {
                    return <Ionicons name='ios-search' size={25} color={tintColor} />;
                } else if (routeName === 'Notifications') {
                    return <Ionicons name='ios-notifications-outline' size={25} color={tintColor} />;
                }
            }
        })
    }
);
const AppContainer = createAppContainer(AppNavigator);
export default function Navigation() {
    return (
        <AppContainer />
    );
}
