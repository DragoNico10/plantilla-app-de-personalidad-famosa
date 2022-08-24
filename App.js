import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

export default class App extends Component { 
  render(){
    return(
      <View style={styles.view}>
        <View 
          style={styles.buttonView}>
          <Button 
            title="Charles Babbage"  
            color = "red"
            onPress={() => Alert.alert('El padre de la computación.')}
            style={styles.button}
            />
        </View>
        
        <View
          style={styles.buttonView}>
          <Button 
            title="Mahatma Gandhi"  
            color = "blue"
            onPress={() => Alert.alert('El padre de la nación.')}
            style={styles.button} />
        </View>

        <View
          style={styles.buttonView}>
          <Button 
            title="Nelson Mandela"  
            color = "purple"
            onPress={() => Alert.alert('El primer presidente negro de Sudáfrica.')}
            style={styles.button} />
        </View>
        <View 
          style={styles.buttonView}>
          <Button 
            title="Madre Teresa"  
            color = "green"
            onPress={() => Alert.alert('Santa Teresa de Calcuta.')}
            style={styles.button} />
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  buttonView:{
    alignSelf:'center',
    flex:1,
    marginTop:100
  },
  button:{
  },
  view:{
    alignContent:'center',
    alignSelf:'center',
    alignItems:'center',
  }
})