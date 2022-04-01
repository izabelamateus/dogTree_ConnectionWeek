import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import NewLink from './src/pages/NewLink';
import SignIn from './src/pages/SignIn';
import { NavigationContainer } from '@react-navigation/native';

import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';

import {
  Nunito_600SemiBold
} from '@expo-google-fonts/nunito';
import Routes from './src/routes';

export default function App() {
  const [loaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Nunito_600SemiBold
  })

  if (!loaded){
    return <></>
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}


