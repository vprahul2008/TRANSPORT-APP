import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';

export default class History extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>History</Text>
              <View> 
               <TextInput 
                style={styles.textinput}
                placeholder={"Search history"}
                placeholderTextColor={"gray"}
              />

            </View>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "#FFFFFF"
  },
  container:{
    flex:1
  }
})













