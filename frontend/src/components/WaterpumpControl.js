import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { DotIndicator } from 'react-native-indicators';

export default function waterpumpControl() {
  const [res, setRes] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const apikey = "XR2Z3K3KE1Q1V3UA";

  const waterOn = async () => {
      const url = 'https://api.thingspeak.com/update?api_key=' + apikey + '&field3=1';  
      try {
        let response = await fetch(url)
        let responseJson = await response.responseJson()
        while (responseJson === true) {
              if (parseInt(responseJson) == 0) { 
                  waterOn();
                  console.log(responseJson);
              }
              break; 
          };  
          setRes(responseJson);
      } catch (error) {
        console.log(error)
      }
  }

    const waterOff = async () => {
      const url = 'https://api.thingspeak.com/update?api_key=' + apikey + '&field3=0';
      try {
        let response = await fetch(url)
        let responseJson = await response.responseJson()
        while (responseJson === true) {
              if (parseInt(responseJson) == 0) { 
                  waterOff();
                  console.log(responseJson);
              }
              break; 
          };  
          setRes(responseJson);
      } catch (error) {
        console.log(error)
      }
  }

    const wait = async (ms) => {
      try {
      let start = new Date().getTime();
      let end = start;
      console.log("Waiting: " + ms /1000 );

      while(end < start + ms) {
        end = new Date().getTime()
    }
    } catch (error) {
      Alert.alert('Error', error);
    } 
  }

    const waterControl = () => {
      waterOn();
      setRes(100);
      console.log(res);
  
      waterOff();
      setRes(100);
      console.log(res);
};

return(

  <View style= {styles.box}>
      <Button
        onPress ={waterControl}
        title="Kastele ruukku"
        color='#63816D'
        />  
    <DotIndicator
         animating={isLoading}
         color='#63816D'
         hidesWhenStopped={true}
       />
  </View>
);
}

const styles = StyleSheet.create({

    box: {
      width:150,
      marginLeft:"10%",
      marginTop:10,
    },
    loadingIndicator: {
      justifyContent: 'center',

    }
});