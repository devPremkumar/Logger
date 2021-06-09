
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { grayColor, primaryColor, seconderyColor } from './colors'

const CustomSelect = (props) => {
    const { labelText, onPress, selectedValue, placeHolder, style } = props
    return (
        <View style={style || {}}>
            <Text style={{
                fontSize: 10,
                fontWeight: 'bold',
                color: primaryColor
            }}>{labelText}</Text>
            <TouchableOpacity onPress={onPress}>
                <View style={{
                    flex: 1, marginBottom: 25, borderBottomWidth: 3,
                    borderColor: grayColor,
                    borderStyle: 'solid'
                }}>
                    <View>
                        {selectedValue
                            ? <Text style={{
                                fontSize: 20,
                                color: seconderyColor,
                                lineHeight: 20
                            }}>{selectedValue}</Text>
                            : <Text style={{
                                fontSize: 15,
                                color: seconderyColor,
                                lineHeight: 20
                            }}>{placeHolder}</Text>}
                    </View>
                    <Icon name='down' style={{ position: 'absolute', bottom: 12, right: -90 }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomSelect
