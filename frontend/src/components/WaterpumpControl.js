// importing all necessary components
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function waterpumpControl() {
  const [res, setRes] = useState(0);

  // define ThingSpeak API-key
  const apikey = "XR2Z3K3KE1Q1V3UA";

  // handles waterpump ON-functionality
  // goes through the conditional statement until the desired value is obtained from ThingSpeak
  // after this WaterOn -function launched
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

  // handles waterpump OFF-functionality
  // goes through the conditional statement until the desired value is obtained from ThingSpeak
  // after this WaterOff -function launched
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

// waits 20 seconds when watering
  const wait = (ms) => {
    let start = new Date().getTime();
    let end = start;
    console.log("Waiting: " + ms /1000 );
  
    while(end < start + ms) {
      end = new Date().getTime();
   }
  }

// controls water pump functionalities
    const waterControl = () => {
      waterOn();
      setRes(100);
      console.log("Waterpump is on.") 
  
      wait(20000);
  
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
  waterpumpButton: {
    color: '#63816D',
    backgroundColor: "#c1dbc9",
    fontSize: 15,
    fontWeight: "bold",
    textAlign:"center",
    borderColor: "#c1dbc9",
    borderWidth: 1,
    borderRadius:10,
    padding:4,
    marginLeft: 7,
    width:150,
    marginTop: 10
  },
    loadingIndicator: {
      justifyContent: 'center',

    }
});