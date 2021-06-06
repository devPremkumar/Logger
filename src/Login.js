import React, { useState, useEffect } from "react";
import wifi from 'react-native-android-wifi'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import { useNavigation } from '@react-navigation/native'
import CustomSelect from './CustomSelect'
import SelectOptions from './Selectoptions'
import isEmpty from 'lodash/isEmpty'
import loadlist from "./loadlist";

const Login = () => {
  const navigation = useNavigation()
  const [ssid, setSsid] = useState("");
  const [ssidModal, setSsidModal] = useState(false)
  const [password, setPassword] = useState("");
  const [data, setdata] = useState([])
const [ssTypeId, setssTypeId]= useState('');
  wifi.loadWifiList((wifiStringList) => {
    setdata(wifiStringList)
    console.log('arri', wifiStringList);
  },
    (error) => {
      console.log(error);
    }
  )
  console.log('data', data)

  console.log('ssid', ssid)
  // let list = data
  !isEmpty(data) && data.map(_data => {
      console.log('hfffvh', _data)
  return {
    value: _data.SSID,
    content: _data.SSID,
  }
  })
  // : []
  // let list = [{ value: 1, content: 'hi' }, { value: 2, content: 'buye' }]
  // list.map(_data => {
  //   console.log('hfffvh', _data)
  //   return {
  //     value: _data.id,
  //     content: _data.value,
  //   }
  // })
  
  const handleSSIDChange = (value) => {
    console.log('vvv', value)
    const selectedSSid = !isEmpty(data) && data.filter(_data => _data.value === value)[0]
    console.log('selectedSSid', selectedSSid)
    setSsid(selectedSSid.content)
    setssTypeId(value)
    setSsidModal(false)

  }
  useEffect(() => {
    wifi.setEnabled(true)
  }, [])

  const connect = () => {
    return (
      wifi.findAndConnect(ssid, password, (found) => {
        if (found) {
          ToastAndroid.show('Connected', ToastAndroid.SHORT)
          navigation.navigate('Home')
          console.log("wifi is in range");
        } else {
          ToastAndroid.show('Invalid SSID or Password', ToastAndroid.SHORT)
          console.log("wifi is not in range");
        }
      })
    )
  }

  const modalToggle = () => setSsidModal(!ssidModal)
  return (
    <View style={styles.container}>
      <Image source={require('./assets/wifi.png')} resizeMode='contain' style={styles.image} />
      {/* <View style={styles.inputView}> */}
      <CustomSelect
        labelText='SSID'
        placeHolder='SSID'
        selectedValue={ssid}
        onPress={() => modalToggle()}
      />
      {/* </View> */}
      {/* <View style={styles.inputView}> */}
      <TextInput
        style={styles.TextInput}
        placeholder="Pass"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      {/* </View> */}
      <TouchableOpacity style={styles.loginBtn} onPress={() => connect()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      {ssidModal &&
        <SelectOptions
          visible={ssidModal}
          listData={list}
          selectedValue={ssTypeId}
          title='Available SSID Names'
          callBack={handleSSIDChange}
          onClose={() => setSsidModal(false)}
        />}
    </View>
  );
}
export default Login
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#65b8fa",
    // alignItems: "center",
    // justifyContent: "center",
  },

  image: {
    height: '40%',
    marginTop: 10,
    marginBottom: 50,
  },


  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    // width: "70%",
    // height: 45,
    // marginBottom: 20,
    // alignItems: "center",
  },


  loginBtn: {
    width: "50%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 40,
    backgroundColor: "#0465c2",
  },
  picker: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
