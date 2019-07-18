import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { 
  createSwitchNavigator, 
  createAppContainer, 
  createBottomTabNavigator, 
  createStackNavigator 
} from 'react-navigation';

import  AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

const stackNavigator = createStackNavigator({
  ReviewScreen,
  SettingsScreen
});

const bottomTabNavigator = createBottomTabNavigator({
  MapScreen: MapScreen,
  DeckScreen,
  stackNavigator
});

const switchkNavigator = createSwitchNavigator({
  AuthScreen,
  WelcomeScreen,
  main: bottomTabNavigator
},{
  initialRouteName: 'WelcomeScreen',
});

export default createAppContainer(switchkNavigator);
