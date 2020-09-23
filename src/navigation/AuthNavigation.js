
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react'
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';

const Stack=createStackNavigator();


export default function AuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            
        </Stack.Navigator>
    )
}
