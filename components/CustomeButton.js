import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const CustomButton = (props) =>{
    return(
        <>
            <View style={styles.container}>
                <TouchableOpacity 
                    onPress={()=> props.onPress?.() }
                    style={styles.button}>
                    <Text style={styles.buttonText}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


export default CustomButton;
const styles = StyleSheet.create({
    container:{
        padding:55
    },
    button:{
        borderRadius:10,
        padding:20,
        backgroundColor:'orangered',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff'
    }
});

module.exports = CustomButton;