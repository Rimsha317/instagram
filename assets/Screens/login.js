import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button,
   View, TouchableOpacity, Image, Dimensions } from 'react-native';



export default function Login({ navigation }) {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Image source={{uri:"https://i.ytimg.com/vi/32Sm8yrkSjI/maxresdefault.jpg"}}
       style={styles.Image} />

      <View style={styles.container}>
        <Text>Username: {Username}</Text>
        <TextInput style={styles.TextInput}  />
      </View>

        <View style={styles.Text}>
        <Text>Password: {Password} </Text>
        <TextInput style={styles.TextInput} secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Button title="login" color="orange" style={styles.button}
          onPress={() => navigation.navigate("Tab")} />
      </TouchableOpacity>
      <View style={styles.Text}>
        <Text style={styles.Text}>Don't have account? SignUp </Text>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 42,
    fontSize: 20,
    width: "90%",
    borderColor: "#9b9b9b",
    borderBottomWidth: 1,
    marginTop: 8,
    
    

},

text: {
    color: "#e93766",
    fontSize: 40,
    marginBottom: 40,
    alignSelf: "center"
  },
  
  button: {
    marginBottom: 40,
  },
  Image: {
    width: 200,
    height: 200,
    
  }
})







