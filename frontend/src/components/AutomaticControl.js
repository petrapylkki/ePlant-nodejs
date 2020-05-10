import React from 'react';
import { View,Text, StyleSheet, Switch, Alert } from "react-native"

export default function AutomaticControl() {

  const [res, setRes] = React.useState(0);
  const [isEnabled, setIsEnabled] = React.useState(false);

  // define ThingSpeak API-key
  const apikey = "XR2Z3K3KE1Q1V3UA";

    // goes through the conditional statement until the desired value is obtained from ThingSpeak
    // after this AutomaticOn -function launched
    const AutomaticOn = () => {
        const url = 'https://api.thingspeak.com/update?api_key=' + apikey+ '&field5=1';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            while (true) {
                if (parseInt(responseJson) == 0) { 
                    AutomaticOn();
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

    // goes through the conditional statement until the desired value is obtained from ThingSpeak
    // after this AutomaticOff -function launched
    const AutomaticOff = () => {
      const url = 'https://api.thingspeak.com/update?api_key=' + apikey+ '&field5=0';
      fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
          while (true) {
              if (parseInt(responseJson) == 0) { 
                  AutomaticOff();
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

    // handles toggle switch component 
    const toggleSwitch = () => {
        // setting the isEnabled function
        setIsEnabled(previousState => !previousState);
        
        // goes in reverse order, False is on, and True is off
        if (isEnabled == false) {
            console.log("Automatic-mode is on")
            AutomaticOn();

        }
        else if (isEnabled == true) {
            console.log("Automatic-mode is off");
            AutomaticOff();
        }
    }

// returns toggle switch-button on the screen
return(

  <View style={styles.container}>

    <Text style= {styles.automaticText}>{isEnabled? 'Automatic-mode on' : 'Automatic-mode off'}</Text>

        <View>
            <Switch
            style = {styles.onoff}
            trackColor={{ false: "#ff2a26", true: "#63816D" }}
            thumbColor={isEnabled ? "lightgrey" : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
        </View>
  </View>
);


}

const styles = StyleSheet.create({

    container: {
        alignItems:'center',
        //backgroundColor: 'lightblue',
        textAlign: 'center',
    },
    automaticText: {
        fontWeight: "bold",
        margin: "2%"

    },
    onoff: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        
    }
});