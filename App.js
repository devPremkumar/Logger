import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Devices from './src/Devices';
import Logs from './src/Logs';

const Tab = createBottomTabNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Devices') {
              iconName = focused
                ? 'globe'
                : 'globe';
            } else if (route.name === 'Logs') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Devices" component={Devices} />
        <Tab.Screen name="Logs" component={Logs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App