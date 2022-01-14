import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./Screens/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerStyle: { backgroundColor: "orange" } }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ headerStyle: { backgroundColor: "lightgreen" } }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerStyle: { backgroundColor: "lightpink" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
