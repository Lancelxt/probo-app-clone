import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import TabNavigator from './Navigators/TabNavigator';
import Questions from './Pages/Questions';
import PAGES from './constants/Pages';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen name={PAGES.TAB_NAVIGATOR} component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name={PAGES.QUESTIONS} component={Questions} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
