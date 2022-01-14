import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
const Contact = ({ navigation }) => {
  return (
    <View style={{}}>
      <Text>Contact</Text>

      <Button
        color="white"
        style={{
          backgroundColor: "red",
          borderRadius: 30,
          margin: 30,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
        onLongPress={() => {
          alert("long pressed");
        }}
      >
        Got to home{" "}
      </Button>
    </View>
  );
};

export default Contact;
