import React,{ Component } from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

export default function home() {

    return (
        <View style={style.container}>
            <Text>Home</Text>
            <Ionicons name="ios-home"
             size={24} color="black" />
        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})