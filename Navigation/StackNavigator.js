import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import BookingScreen from "../screens/BookingScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
        
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
      <Stack.Screen name= " History" component={History} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
