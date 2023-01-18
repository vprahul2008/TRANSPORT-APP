import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Settings</Text>
              <ImageBackground source={require('../assests/TRANSPORT.jpg')} styles={styles.backgroundImage}>
              </ImageBackground>
                
            </View>
        )
    }

}

const styles=StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  container:{
    flex:1
  },
  backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent:'center'   
    }
}
)