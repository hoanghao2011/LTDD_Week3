import React, {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default function Screen1_b(){
  const [text, setText] = useState('');
  return(
    <View style = {styles.container}>
    <View style = {{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
      <Image source ={require('../assets/khoa.png')} style = {styles.image}/>
    </View>

    <Text style = {{
      fontSize:25,
      fontWeight: 'bold',
      flex:2,
      textAlign: 'center'
    }}>
    FORGET PASSWORD
    </Text>

    <Text style = {{
      fontSize:15,
      fontWeight: 'bold',
      flex:2,
      textAlign: 'center'
    }}>
        'Provide your account’s email for which you want to reset your password'
    </Text>

    <View style={{flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#E0E0E0',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20}}>
    <TextInput
          style={styles.input}
          placeholder="Email"
          value={text}
          onChangeText={setText}
          keyboardType="email-address"
    />
    </View>

    <TouchableOpacity style={{backgroundColor: '#FFD700',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 5}}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image:{
    width: 140,
    height:140
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  }
  });
