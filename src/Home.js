import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Devices from './Devices';
import Logs from './Logs';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Devices') {
                        iconName = focused
                            ? 'globe'
                            : 'globe';
                    } else if (route.name === 'Logs') {
                        iconName = focused ? 'ios-list' : 'ios-list';
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
    );
}

export default Home