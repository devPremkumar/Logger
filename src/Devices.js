import React from 'react'
import ProgressCircle from 'react-native-progress-circle'
import { View, Text } from 'react-native'

const Devices = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ProgressCircle
        percent={30}
        radius={100}
        borderWidth={15}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 35 }}>{'12'}</Text>
      </ProgressCircle>
    </View>
  )
}

export default Devices
