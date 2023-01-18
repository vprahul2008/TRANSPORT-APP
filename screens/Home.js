import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native';
import StackNavigator from '../Navigation/StackNavigator';




export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Home</Text>
              <ImageBackground source={require('../assests/TRANSPORT.jpg')} styles={styles.backgroundImage}>
              </ImageBackground>
              <TouchableOpacity style={styles.icon}>
              <Image source={require('../assests/settings.jpg')}/>
              </TouchableOpacity>
            </View>  
              
            
              
        )
    }
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent:'center'
        
        
    },
    text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  icon:{
    resizeMode:'cover',
    alignContent:'right',
    marginTop:50,
    height:10,
    width:30
  }
}
)



















