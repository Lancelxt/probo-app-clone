import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './Pages/HomeScreen';
import Search from './Pages/Search';
import Portfolio from './Pages/Portfolio';
import Rewards from './Pages/Rewards';
import CustomTabBar from './Components/TabBarIcons';
import PAGES from './constants/Pages';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='red'/>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name={PAGES.HOME} component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name={PAGES.SEARCH} component={Search} options={{headerShown: false}}/>
        <Tab.Screen name={PAGES.PORTFOLIO} component={Portfolio} options={{headerShown: false}}/>
        <Tab.Screen name={PAGES.REWARDS} component={Rewards} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
