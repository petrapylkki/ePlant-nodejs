import { View, Button, StyleSheet } from "react-native"

export default function vesipumppu() {

/*fetch('https://api.thingspeak.com/update?api_key=7NFTTNLSIK37HNCC&field3=1', {
  method: 'POST',
  headers: {
    Accept: 'text/plain',
    'Content-Type': 'text/plain',
  },
  body: JSON.stringify({
    firstParam: 'field3',
    secondParam: '1',
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
    
const waterOn = () => {
  let vesipaalle = "https://api.thingspeak.com/update?api_key=7NFTTNLSIK37HNCC&field3=1";

  fetch(vesipaalle)
  .then (response => response.json())
  .then (data => setRes(data.content))
  .catch(err => console.error(err))
  }

const waterOff = () => {
  let vesipois = "https://api.thingspeak.com/update?api_key=7NFTTNLSIK37HNCC&field3=0";

  fetch(vesipois)
  .then(response => response.json())
  .then(data => setRes(data.content))
  .catch(err => console.error(err))
}

return(
<View>
<Button
onPress ={waterOn}
title="Vesi päälle"
style={styles.button}
/>
<Button
onPress ={waterOff}
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