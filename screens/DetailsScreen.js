import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomeButton';

const axios = require ('axios').default;

function DetailsScreen(){
  const [autor, setAutor] = React.useState(null);
  const [frase, setFrase] = React.useState(null);
 
  function pegarApi(){

   
    axios.get("https://programming-quotes-api.herokuapp.com/quotes/random")
    .then(function(resp){
      let autor = resp.data.author
      let frase = resp.data.en
      setAutor(autor);
      setFrase(frase);
       console.log(autor);
       console.log(frase);
    })
    .catch(function(err){
        console.log(err);
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Frases sobre Programacion</Text>
      < Image style={styles.Image} source={require("../assets/tp2.png")} />
      <CustomButton onPress={() => pegarApi()} title = 'CLICK'/>
      
      {autor!= null ? <Text style={styles.frase1} >{autor}</Text> : null} 
      
      {frase!= null ? <Text style={styles.frase}>{frase}</Text> : null} 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    height:"30%",
    width: "100%",
  },
  titulo: {
    fontSize:"25",
    fontWeight:"bold",
    paddingBottom:"15%",
  },
  frase:{
    fontWeight:"bold",
    fontStyle:"italic",

  },
  frase1:{
    fontSize:"20%",
    fontWeight:"bold",
    fontStyle:"italic",
    paddingBottom:"5%",

  },
});



module.exports = DetailsScreen;