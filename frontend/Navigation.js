import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Home from './src/screens/Home';
import Add from './src/screens/Add';
import Notifications from './src/screens/Notifications';
import Search from './src/screens/Search';
import Settings from './src/screens/Settings';
import NewPlant from './src/screens/NewPlant';
import MyPlant from './src/screens/MyPlant';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomePage() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="MyPlant" component={MyPlant} />
        </Stack.Navigator>
    );
}
function SearchPage() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
            <Stack.Screen name="NewPlant" component={NewPlant} />
        </Stack.Navigator>
    );
}

function MainNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'black',
                    showLabel: false,
                    style: {
                        height: 70,
                        shadowColor: '#DEDDDD',
                        shadowOpacity: 2,
                        shadowOffset: {
                            height: 2,
                            width: 2
                        },
                    },
                }}
            >
                <Tab.Screen name="Home" component={HomePage}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="ios-home" color={color} size={25} />
                        )
                    }}
                />
                <Tab.Screen name="Search" component={SearchPage}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="ios-search" color={color} size={25} />
                        )
                    }}
                />
                <Tab.Screen name="Add" component={Add}
                    options={{
                        tabBarLabel: 'Add',
                        tabBarIcon: ({ }) => (
                            <Ionicons name="ios-add-circle" color={'#63816D'} size={50} />
                        )
                    }}
                />
                <Tab.Screen name="Notifications" component={Notifications}
                    options={{
                        tabBarLabel: 'Notifications',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="ios-notifications-outline" color={color} size={25} />
                        )
                    }}
                />
                <Tab.Screen name="Settings" component={Settings}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="ios-settings" color={color} size={25} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// const AppNavigator = createBottomTabNavigator(
//     {
//         Home: {
//             screen: Home,
//             navigationOptions: {
//                 tabBarLabel: 'Home',
//                 tabBarIcon: ({ tintColor }) => (
//                     <Ionicons name="ios-home" color={tintColor} size={25} />
//                 )
//             }
//         },

//         Search: {
//             screen: Search,
//             navigationOptions: {
//                 tabBarLabel: 'Search',
//                 tabBarIcon: ({ tintColor }) => (
//                     <Ionicons name="ios-search" color={tintColor} size={25} />
//                 )    
//             }
//         },
//         Add: {
//             screen: Add,
//             navigationOptions: {
//                 tabBarLabel: 'Add',
//                 tabBarIcon: ({ tintColor }) => (
//                     <Ionicons name="ios-add-circle" color={"#63816D"} size={50} />
//                 )
//             }
//         },
//         Notifications: {
//             screen: Notifications,
//             navigationOptions: {
//                 tabBarLabel: 'Notifications',
//                 tabBarIcon: ({ tintColor }) => (
//                     <Ionicons name="ios-notifications-outline" color={tintColor} size={25} />
//                 )
//             }
//         },
//         Settings: {
//             screen: Settings,
//             navigationOptions: {
//                 tabBarLabel: 'Settings',
//                 tabBarIcon: ({ tintColor }) => (
//                     <Ionicons name="ios-settings" color={tintColor} size={25} />
//                 )
//             }
//         },

//     },
//     {
// tabBarOptions: {
//     activeTintColor: 'black',
//     inactiveTintColor: 'grey',
//     showLabel: false,
//     style: {
//         height: 70,
//         shadowColor: '#DEDDDD',
//         shadowOpacity: 2,
//         shadowOffset: {
//             height: 2,
//             width: 2
//         },
//     }

//         }
//     },

// );


export default MainNavigation;