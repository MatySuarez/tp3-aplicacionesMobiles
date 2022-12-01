import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';


function HomeScreen(){
    return(
      <ImageBackground style={styles.container}source={require("../assets/lenguajes.jpeg")} >
        <Text style={styles.bienvenida} >Bienvenido a mi app!</Text>
       
        <StatusBar style="auto" />
      </ImageBackground>
    )

  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
      height:"75%",
      width: "95%",
      borderRadius:"20px"
    },
    bienvenida: {
      fontSize:"35",
      fontWeight:"bold",
      paddingBottom:"15%",
      color:"white",
    },
});

module.exports = HomeScreen;