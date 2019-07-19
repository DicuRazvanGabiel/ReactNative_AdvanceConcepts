
import React, { Component } from 'react'
import { 
  createSwitchNavigator, 
  createAppContainer, 
  createBottomTabNavigator, 
  createStackNavigator 
} from 'react-navigation';
import { Provider } from 'react-redux';

import store from "./store";
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
  //aici trebuie WelcomeScreeen
  initialRouteName: 'main',
});

const AppContainer = createAppContainer(switchkNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}