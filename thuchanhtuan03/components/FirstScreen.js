import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
export default function screen1a (){
  return (
    <View style = {styles.container}>
      <View style = {{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('../assets/circle.png')} style={styles.image} />
      </View>

      <Text style ={{
        fontSize:25,
        fontWeight: 'bold',
        flex: 3,
        textAlign: 'center'
      }}>GROW {'\n'} YOUR BUSINESS
      </Text>

      <Text style ={{
        fontSize:15,
        fontWeight: 'bold',
        flex: 2,
        textAlign: 'center'
      }}>We will help you to grow your business using{'\n'}online server
      </Text>

      <View style = {{flex: 2, flexDirection: 'row'}}>
        <TouchableOpacity style ={styles.button}>
          <Text style = {styles.buttonText}>Login </Text>
        </TouchableOpacity>

        <TouchableOpacity style ={styles.button}>
          <Text style = {styles.buttonText}>Sign up </Text>
        </TouchableOpacity>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex :1,
    alignItems :'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#00CCF9'
  },
  image:{
    width: 140,
    height:140
  },
  button:{
    borderRadius: 10,
    margin:30,
    width:100,
    textAlign: 'center',
    backgroundColor: '#FFD700',
    height:52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign: 'center',
    alignItems: 'center',
  }
});