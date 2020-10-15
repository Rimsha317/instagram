import React, {useState} from 'react';
import { StyleSheet, Text, Button, View,
   TouchableOpacity , Image, ImageBackground} from 'react-native';


export default function Welcome({navigation}) {
  
  return (
    <View style ={styles.container}>
      
    <ImageBackground source={{ uri: "assets\images\images.jpg" }} style={styles.image}>
    </ImageBackground>

    <Image source={{uri:"https://i.ytimg.com/vi/32Sm8yrkSjI/maxresdefault.jpg"}}
       style={styles.Image} />
      
      <View style={styles.header}>
        <Text style={styles.boldText}>*Welcome To Instagram*</Text>
      </View>
    
      <TouchableOpacity style={styles.button}>
      <Button title="login Here" color="blue"style={styles.button} 
      onPress={() => navigation.navigate("Login")}/>
      </TouchableOpacity>
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
  header: {
    backgroundColor: 'violet',
    padding: 20,
    margin: 30,

  },
  boldText: {
    fontWeight: 'bold',
  },
  Image: {
    width: 200,
    height: 200,
  },
   image: {
    resizeMode: "cover",
    justifyContent: "center"
  }
})