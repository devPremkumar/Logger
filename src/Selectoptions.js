import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import CustomModal from './CustomModal'
import { Input, ListItem } from 'react-native-elements'
import { greenColor } from './colors'
import isEmpty from 'lodash/isEmpty'
import some from 'lodash/some'

const SelectOptions = (props) => {
  const [visible, setVisible] = useState(false)
  const [listData, setListData] = useState([])
  const [filterData, setFilterData] = useState([])
console.log('listdata', listData)
  useEffect(() => {
    setVisible(props && !isEmpty(props.listData) ? props.visible : false)
    setListData(props && !isEmpty(props.listData) ? props.listData : [])
    setFilterData(props && !isEmpty(props.listData) ? props.listData : [])
  }, [props])

  const search = (inputValue) => {
    if (inputValue) {
      const filteredData = filterData.filter(data => {
        return some(data, function (value, key) {
          const data = value ? value.toString().toLowerCase() : undefined
          const dataCheck = data ? data.match(inputValue.toLowerCase()) : ''
          if (dataCheck) {
            return true
          }
        })
      })
      setListData(filteredData)
    } else {
      setListData(filterData)
    }
  }

  return (
    <CustomModal
      visible={visible}
      transparent
      bottomHalf
      animationType='slide'
      onClose={() => props.onClose()}
      header={props.title}
    >
      <ScrollView keyboardShouldPersistTaps='always'>
        {props.search &&
          <Input placeholder='Search...' onChangeText={value => { search(value) }} />}
        {!isEmpty(listData)
          ? (
              listData.map((record, i) => (
                <ListItem
                  key={i}
                  bottomDivider
                  onPress={() => { props.callBack(record.value) }}
                >
                  <Text numberOfLines={1}>{record.contentLable}</Text>
                  <Text>
                    {record.content}{' '}
                    {props.selectedValue && props.selectedValue === record.value
                      ? (
                        <Icon name='check' color={greenColor} size={18} />)
                      : ''}
                  </Text>
                </ListItem>
              )))
          : <View><Text>Filter data not available</Text></View>}
      </ScrollView>
    </CustomModal>
  )
}

export default SelectOptions
