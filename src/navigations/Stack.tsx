import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../MainPage';
import SignUpPage from '../SignUpPage';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MainPage' component={MainPage} options={{ headerShown: false }} />
            <Stack.Screen name='SignUpPage' component={SignUpPage} options={{ headerShown: false }} />
        </Stack.Navigator>  
    );
};

export default StackNavigation;