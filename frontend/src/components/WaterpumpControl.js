// importing all necessary components
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { DotIndicator } from 'react-native-indicators';

export default function waterpumpControl() {
  const [res, setRes] = useState(0);
  const [isLoading, setLoading] = useState(false);

  // define ThingSpeak API-key
  const apikey = "XR2Z3K3KE1Q1V3UA";

  // handles waterpump ON-functionality asynchronously
  // goes through the conditional statement until the desired value is obtained from ThingSpeak
  // after this WaterOn -function launched
  const waterOn = async () => {
      const url = 'https://api.thingspeak.com/update?api_key=' + apikey + '&field3=1';  
      try {
        let response = await fetch(url)
        let responseJson = await response.json()
        while (true) {
              if (parseInt(responseJson) == 0) { 
                  waterOn();
              }
              break; 
          }; 
         
          setRes(responseJson);
      } catch (error) {
        console.log(error)
      }
  }

  // handles waterpump OFF-functionality asynchronously
  // goes through the conditional statement until the desired value is obtained from ThingSpeak
  // after this WaterOff -function launched
    const waterOff = async () => {
      const url = 'https://api.thingspeak.com/update?api_key=' + apikey + '&field3=0';
      try {
        let response = await fetch(url)
        let responseJson = await response.json()
        while (true) {
              if (parseInt(responseJson) == 0) { 
                  waterOff();
              }
              break; 
          };
          setRes(responseJson);
      } catch (error) {
        console.log(error)
      }
  }

// controls water pump functionalities
    const waterControl = () => {
      waterOn();
      setRes(100);
      console.log("Waterpump is on.") 
      
  
      waterOff();
      setRes(100);
      console.log("Waterpump is off.")
      
};

// returns Water ON -button and loading indicator on the screen
return(

  <View style= {styles.waterpumpButton}>
      <Button
        onPress ={waterControl}
        title="Water the plant"
        style={styles.button}
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
      marginLeft:35,
      marginTop:15,
      color: '#63816D',
      backgroundColor: "#c1dbc9",
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
      borderColor: "#c1dbc9",
      borderWidth: 1,
      borderRadius:10,
      padding:4,
      margin: 7,
      width:150
    },
    loadingIndicator: {
      justifyContent: 'center',

    }
});