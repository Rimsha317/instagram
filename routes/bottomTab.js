import react from 'react';
import { View, Text , Icon} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import NewsFeed from '../assets/Screens/newsFeed'
import Profile from '../assets/Screens/profile'
import Settings from '../assets/Screens/settings'
import Search from '../assets/Screens/search'
import Home from '../assets/Screens/home'
import { Ionicons } from '@expo/vector-icons'; 


const BottomTabNavigator = createBottomTabNavigator({


    NewsFeed: {

        screen: NewsFeed
    },

    Profile: {

        screen: Profile,
        navigationOptions: () => {
            return{
                tabBarIcon: () => {
                    return 
                    <Ionicons name="ios-person" size={24} color="black" />
                }
            }
        }

    },

    Settings: {

        screen: Settings,
        navigationOptions: () => {
            return{
                tabBarIcon: () => {
                    return 
        <Ionicons name="ios-settings"
            size={24} color="black" />
                }
            }
        }

    },

    Search: {

        screen: Search 

                
        
    },

    Home: {

        screen: Home

    }


})

export default BottomTabNavigator;

