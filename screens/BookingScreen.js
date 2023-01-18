import React, { Component } from 'react';
import { Text, View, StyleSheets } from 'react-native';

export default class BookingScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>BookingScreen</Text>
            </View>
        )
    }
}