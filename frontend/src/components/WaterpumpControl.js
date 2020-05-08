import { View, Button, StyleSheet } from "react-native"
import React, { useState } from 'react';
import { DotIndicator } from 'react-native-indicators';

export default function waterpumpControl() {

  const [res, setRes] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const apikey = "XR2Z3K3KE1Q1V3UA";

  const waterOn = () => {
      const url = 'https://api.thingspeak.com/update?api_key=' + apikey+ '&field3=1';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
          while (true) {
              if (parseInt(responseJson) == 0) { 
                  waterOn();
                  console.log(responseJson);
              } 
              if (waterOn != 0) {
                setLoading(true);
              }
              break; 
          }; 
          setRes(responseJson);
      })
      .catch((error) => {
        Alert.alert('Error', error);
      });
  }

    const waterOff = () => {
      const url = 'https://api.thingspeak.com/update?api_key=' + apikey+ '&field3=0';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
          while (true) {
              if (parseInt(responseJson) == 0) { 
                  waterOff();
                  console.log(responseJson);
              }
              if (waterOff != true) {
                setLoading(false);
            }
              break; 
          }; 
          setRes(responseJson);
      })
      .catch((error) => {
        Alert.alert('Error', error);
      });

}

const wait = (ms) => {
  let start = new Date().getTime();
  let end = start;
  console.log("Waiting: " + ms /1000 );

  while(end < start + ms) {
    end = new Date().getTime();
 }
}

const waterControl = () => {

  waterOn();
  console.log(res);
  setRes(100);
  console.log(res);

  wait(20000);

  waterOff();
  console.log(res);
  setRes(100);
  console.log(res);
}

return(

  <View style={styles.box}>
  { isLoading ? res : 
   <DotIndicator 
        color='#63816D'
        style={{marginBottom:15}}
        />}
      <Button buttonStyle={styles.button}
        onPress ={waterControl}
        title="Kastele ruukku"
        />  
  </View>
);


}

const styles = StyleSheet.create({

    box: {
      width:150,
      marginLeft:35,
      marginTop:15,
      color: '#63816D',

    },
    button: {

    }
});