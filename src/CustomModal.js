import React from 'react'
import { View, Modal, StyleSheet, Dimensions } from 'react-native'
import { Button, Text, Icon } from 'react-native-elements'

const CustomModal = (props) => {
  const  windowHeight=Dimensions.get('window').height
  const modalHeight = props.bottomHalf ? windowHeight / 1.8 : windowHeight

  const styles = StyleSheetFactory.getSheet({
    fullscreen: props.fullscreen,
    modalHeight: modalHeight,
    bottomHalf: props.bottomHalf
  })

  return (
    <Modal
      animationType={props.animation || 'slide'}
      transparent={props.transparentContainer || true}
      visible={props.visible}
    >
      <View style={styles.mainContainer}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            {props.header &&
              <Text style={styles.header}>
                {props.header}
              </Text>}
            <View style={{flex:1}}>
              {props.children}
            </View>
            {(props.okText || props.closeText) &&
              <View style={{flexDirectionRow:'row',justifyContent: 'flex-end' , borderTopWidth: 1,
              borderColor: '#E5ECFA',
              borderStyle: 'solid',paddingBottom: 10}}>
                {props.closeText && <Button title={props.closeText} type='clear' onPress={props.onClose} containerStyle={{ marginLeft: 20 }} />}
                {props.okText && <Button title={props.okText} type='clear' onPress={props.onOk} loading={props.loading} containerStyle={{ marginLeft: 20 }} />}
              </View>}
          </View>
          {props.onClose &&
            <Button
              icon={<Icon name='close' size={25} color='#7F91AA' type='ant-design' />}
              type='clear'
              onPress={props.onClose}
              containerStyle={{ position: 'absolute', top: 0, right: 0 }}
            />}
          {props.sideText &&
            <Text style={styles.sideText}>
              {props.sideText}
            </Text>}
        </View>
      </View>
    </Modal>
  )
}

export default CustomModal

class StyleSheetFactory {
  static getSheet ({
    fullscreen,
    bottomHalf,
    modalHeight
  }) {

    const styles = StyleSheet.create({
      mainContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
      header:{marginBottom: 20,color:'#19273C',fontWeight:'bold',fontSize:18},
      sideText: {marginTop:10,color:'#008DD8',fontSize:16,fontWeight:'bold', position: 'absolute', top: 5, right: 40},
      modalWrapper: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: modalHeight
      },
      modalContainer: {
        width: Dimensions.get('window').width,
        paddingHorizontal: 15,
        paddingVertical: 15,
        flex: 1
      }
    })

    if (fullscreen) {
      styles.modalWrapper = {
        ...styles.modalWrapper,
        flex: 1
      }

      styles.modalContainer = {
        ...styles.modalContainer
      }
    } else if (bottomHalf) {
      styles.modalWrapper = {
        ...styles.modalWrapper,
        marginTop: (Dimensions.get('window').height - modalHeight),
        borderTopStartRadius: 15,
        borderTopEndRadius: 15
      }

      styles.modalContainer = {
        ...styles.modalContainer
      }
    } else {
      styles.modalWrapper = {
        ...styles.modalWrapper,
        flex: 1
      }

      styles.modalContainer = {
        ...styles.modalContainer
      }
    }
    return styles
  }
}
