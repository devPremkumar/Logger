import wifi from 'react-native-android-wifi'

const loadlist = () => {
    return (
      wifi.loadWifiList((wifiStringList) => {
        JSON.parse(wifiStringList);
        console.log('arr',wifiStringList);
      },
        (error) => {
          console.log(error);
        }
      )
    )
}
export default loadlist