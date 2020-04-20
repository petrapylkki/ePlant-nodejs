import { View } from "react-native"




export default function vesipumppu() {

let vesipaalle = "api.thingspeak.com/update?api_key=7NFTTNLSIK37HNCC&field3=1";
let vesipois = "api.thingspeak.com/update?api_key=7NFTTNLSIK37HNCC&field3=0";

fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});
    

return(
<View>


</View>

);


}

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#FCFCFC',
        flex: 1
    }
});