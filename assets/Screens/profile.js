import React,{ Component } from 'react'
import {View, Text, StyleSheet , Image} from 'react-native'


export default function profile() {

    return (
        <View style={style.container}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTr1k1n7Cbuh8uZ7GJriZam08ADoFhvd3AbNQ&usqp=CAU"}}
            style={style.Image}  />

            <Text >WELCOME TO PROFILE  </Text>
         <Text>Rimsha Mehmood</Text>
         <Text>SSUETIAN</Text>
         <Text>Software Engineer</Text>
         <Text>Aries</Text>
            
            
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        justifyContent: 'center'
    },
    
    
    Image: {
        marginTop: 100,
        marginLeft: 280, 
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: "center"
      },
    Text: {
        fontWeight: "bold",
        marginRight: 200,
        marginTop: 50,
         
       
        
    }

})