import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../MainPage';
import SignUpPage from '../SignUpPage';
import ChatingPage from '../ChatingPage';
import MyPageEdit from '../MyPageEdit'

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='MainPage' component={MainPage} options={{ headerShown: false }} />
            <Stack.Screen name='SignUpPage' component={SignUpPage} options={{ headerShown: false }} />
            <Stack.Screen name='ChatingPage' component={ChatingPage} options={{ headerShown: false }} />
            <Stack.Screen name='ChatinHoverPage' component={MyPageEdit} options={{ headerShown: false }} />
            <Stack.Screen name='UserPage' component={MyPageEdit} options={{ headerShown: false }} />
            <Stack.Screen name='MyPageEdit' component={MyPageEdit} options={{ headerShown: false }} />
            <Stack.Screen name='ScheduleList' component={MyPageEdit} options={{ headerShown: false }} />
            <Stack.Screen name='Schedule' component={MyPageEdit} options={{ headerShown: false }} />
            <Stack.Screen name='ScheduleHover' component={MyPageEdit} options={{ headerShown: false }} />
            <Stack.Screen name='ScheduleEmpty' component={MyPageEdit} options={{ headerShown: false }} />
        </Stack.Navigator>  
    );
};

export default StackNavigation;