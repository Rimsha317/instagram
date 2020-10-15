import React,{ Component } from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'




export default function search() {

    return (
        
        <View style={style.container}>
            
            <Image source={{uri:"https://images.vexels.com/media/users/3/147105/isolated/preview/5c38be8d63c0ae0ad034417daaef3bcb-instagram-search-icon-by-vexels.png"}}
            style={style.Image}  />
            <Text>Search here</Text>
            
        </View>

         
        
    );
}


const style = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        marginTop: 100,
        marginLeft: 280, 
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: "center"
      }
    
    
})