import React, { useEffect } from "react";
import { View, Image } from 'react-native';

const Splash = ({
    navigation,
}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 2500);

    }, [])

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('./assets/Splash.jpg')} resizeMode='contain' style={{
                height: '100%'
            }} />

        </View>

    )
};

export default Splash
