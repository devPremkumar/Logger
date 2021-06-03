import React, { useState, useEffect } from "react";
import wifi from 'react-native-android-wifi'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid
} from "react-native";
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  async function getpermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App permission',
          message: 'We need your permission in order to find wifi networks'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Thank you for your permission! ");
      } else {
        console.log("You will not able to retrieve wifi available networks list");
      }
    } catch (err) {
      console.warn(err)
    }

  }
  useEffect(() => {
    wifi.setEnabled(true),
    getpermission()
  }, [])
  
  const findandconnect = () => {
    console.log('values', ssid, password)
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
  return (
    <View style={styles.container}>
      <Image source={require('./assets/wifi.png')} resizeMode='contain' style={styles.image} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="SSID"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setSsid(value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={findandconnect}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#65b8fa",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: '40%',
    marginTop: 10,
    marginBottom: 50,
  },


  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
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
});
