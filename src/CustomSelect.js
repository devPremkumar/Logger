
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { grayColor, primaryColor, seconderyColor } from './colors'

const CustomSelect = (props) => {
    const { labelText, onPress, selectedValue, placeHolder, style } = props
    return (
        <View style={style || {}}>
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: primaryColor
            }}>{labelText}</Text>
            <TouchableOpacity onPress={onPress}>
                <View style={{
                    flex: 1, marginBottom: 20, borderBottomWidth: 1,
                    borderColor: grayColor,
                    borderStyle: 'solid'
                }}>
                    <View>
                        {selectedValue
                            ? <Text style={{
                                fontSize: 18,
                                color: seconderyColor,
                                lineHeight: 48
                            }}>{selectedValue}</Text>
                            : <Text style={{
                                fontSize: 18,
                                color: seconderyColor,
                                lineHeight: 48
                            }}>{placeHolder}</Text>}
                    </View>
                    <Icon name='down' style={{ position: 'absolute', bottom: 10, right: 2 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomSelect
