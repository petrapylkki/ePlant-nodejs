import { View, Button, StyleSheet } from "react-native"




export default function vesipumppu() {



/*fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
})
.then((response) => response.json())
.then((responseData) => {
  console.log(
    "POST Response",
    "Response Body -> " + JSON.stringify(responseData)
  )
})
.done()*/

const [res, setRes] = React.useState("123123123")
    
const vaterOn = () => {

  let vesipaalle = "api.thingspeak.com/update?api_key=7NFTTNLSIK37HNCC&field3=1";
  let vesipois = "api.thingspeak.com/update?api_key=7NFTTNLSIK37HNCC&field3=0";

  fetch(vesipaalle)
  .then (response => response.json())
  .then (data => setRes(data.content))
  .catch(err => console.error(err))
  }

return(
<View>
<Button
onPress ={vaterOn}
title="Vesi päälle"
style={styles.button}
/>
</View>

);


}

const styles = StyleSheet.create({

    button: {
        margin: 50,
        backgroundColor: '#FCFCFC',
        textAlign: 'center',
    }
});