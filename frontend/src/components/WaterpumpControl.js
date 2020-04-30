import { View, Button, StyleSheet } from "react-native"
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
              // Loading icon off                                     //            //
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

  <View style= {styles.waterpumpButton}>
      <Button
        onPress ={waterControl}
        title="Vesi päälle"
        style={styles.button}
        />  
  </View>
);


}

const styles = StyleSheet.create({

    waterpumpButton: {
        margin: 50,
        backgroundColor: '#FCFCFC',
        textAlign: 'center',
    }
});