import React, {useState} from 'react';
import { StyleSheet, Text, TextInput,Button, View, TouchableOpacity } from 'react-native';

export default function SignUp({navigation}) {
  const [Username, setUsername] = useState ('');
  const [Password, setPassword] = useState ('');
  
  return (
    <View style ={styles.container}>
      <View style={styles.container}>
        <Text>Username: {Username}</Text>
      <TextInput style={styles.TextInput} />
      </View>
      <View style={styles.container}>
        <Text>Password: {Password} </Text>
        <TextInput style={styles.TextInput} />  
      </View>
      <TouchableOpacity style={styles.button}>
          <Button title="login" color="green"style={styles.button}/>
          </TouchableOpacity>
          <View style={styles.TextInput}>
        <Text style={styles.Text}>Already have account? Login </Text> 
      </View>
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
    marginRight: 15,
  },
  TextInput: {
    height: 50,
    fontSize: 20,
    margin: 20,
  
  },
  input: {
    borderWidth: 10,
  },
  button: {
    marginBottom: 40,
  }
})