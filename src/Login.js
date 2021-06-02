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
          console.log("wifi is not in range");
        }
      })
    )
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo.png")} />
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginTop: 50,
    marginBottom: 50,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "50%",
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 300,
    backgroundColor: "#FF1493",
  },
});
