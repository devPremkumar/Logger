import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Devices from './src/Devices';
import Logs from './src/Logs';
import Stackroute from './src/Stackroute'
import Home from './src/Home';

const App = () =>{
  return (
    <Stackroute/>
  );
}

export default App