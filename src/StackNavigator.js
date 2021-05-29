import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Devices from './Devices'
import Logs from './Logs'

export const FeedNavigator = createAppContainer(
  createStackNavigator({
    Devices: {
      screen: Devices,
      navigationOptions: {
        headerTitle: 'Logger'
      }
    }
  })
)

export const FeedNavigatorLog = createAppContainer(
    createStackNavigator({
      Devices: {
        screen: Logs,
        navigationOptions: {
          headerTitle: 'Logs'
        }
      }
    })
  )