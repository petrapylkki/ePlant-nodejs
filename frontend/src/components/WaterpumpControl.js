import { View, TouchableOpacity, StyleSheet, Text } from "react-native"
import React from 'react';

export default function waterpumpControl() {

  const [res, setRes] = React.useState(0);
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

  <View>
      <TouchableOpacity
        onPress={waterControl}
        >
          <Text style= {styles.waterpumpButton}>Vesi päälle</Text>
      </TouchableOpacity>  
  </View>
);


}

const styles = StyleSheet.create({

    waterpumpButton: {
      color: '#63816D',
      backgroundColor: "#c1dbc9",
      fontSize: 15,
      fontWeight: "bold",
      marginRight: 15,
      borderColor: "#c1dbc9",
      borderWidth: 1,
      borderRadius:10,
      padding:4
    }
});