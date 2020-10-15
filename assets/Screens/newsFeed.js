import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button,
   View, TouchableOpacity, Image } from 'react-native';



export default function newsFeed({ navigation }) {
  

return (
    <View style ={styles.container}>
        <Text> newsFeed </Text>
       
       
      </View>
  );
}
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 18,
    fontStyle: 'italic',
    marginRight: 4,
    
  },
})

