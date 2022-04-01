import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../pages/SignIn';

const Stack = createNativeStackNavigator();

function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
            />
        </Stack.Navigator>
    )
}

export default AuthStack;