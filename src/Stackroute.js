import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Login from './Login';
import Splash from './Splash';

const Stack = createStackNavigator();

const Stackroute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Stackroute;
