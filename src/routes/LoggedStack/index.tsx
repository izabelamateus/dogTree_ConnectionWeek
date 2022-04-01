import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import NewLink from '../../pages/NewLink';

const Stack = createNativeStackNavigator();

function LoggedStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="Home" 
                component={Home} 
            />
            <Stack.Screen 
                name="NewLink" 
                component={NewLink} 
            />
        </Stack.Navigator>
    )
}

export default LoggedStack;