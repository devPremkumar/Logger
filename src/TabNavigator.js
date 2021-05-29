import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from '@ui-kitten/components'

import Devices from './Devices'
import Logs from './Logs'
import { FeedNavigator, FeedNavigatorLog } from './StackNavigator'


const TabNavigator = createBottomTabNavigator(
    {
        Devices: {
            screen: FeedNavigator,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='monitor-outline'
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        },
        Logs: {
            screen: FeedNavigatorLog,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name='clock-outline'
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        }
        // tabBarOptions: {
        //     showLabel: false
        // }
    }
)
export default createAppContainer(TabNavigator)