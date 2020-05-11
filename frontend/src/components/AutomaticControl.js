import React from 'react';
import { View,Text, StyleSheet, Switch, Alert } from "react-native"

export default function AutomaticControl() {

  const [res, setRes] = React.useState(0);
  const [isEnabled, setIsEnabled] = React.useState(false);

  const apikey = "XR2Z3K3KE1Q1V3UA";

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


const toggleSwitch = () => {
    
    setIsEnabled(previousState => !previousState);
    
    // These goes in reverse order! False is on, and true is off
    if (isEnabled == false) {
        console.log("Automatic-mode is on")
        AutomaticOn();

    }
    else if(isEnabled == true) {
        console.log("Automatic-mode is off");
        AutomaticOff();
    }
}

return(
  <View style={styles.container}>
        <View style={styles.switch}>
            <Text style= {styles.automaticText}>{isEnabled? 'Automatic-mode on' : 'Automatic-mode off'}</Text>
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
        alignItems:"center",
        textAlign: 'center',
        marginRight: "5%",
        marginLeft:50
    },
    switch: {
        flexDirection:"row",
    },
    automaticText: {
        fontSize: 12,
        fontWeight: "bold",
        alignSelf:"center",
        marginRight:15
    },
    onoff: {
        transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }],
        
    }
});