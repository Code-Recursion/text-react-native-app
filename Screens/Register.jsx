import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Checkbox, TextInput } from "react-native-paper";
import { ScrollView } from "react-native-web";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";

const Main = ({ navigation }) => {
  const [checked, setChecked] = useState();
  return (
    <View>
      <Text style={styles.headingStyles}>Register</Text>

      <TextInput placeholder="Full Name" style={styles.inputStyles} />
      <TextInput placeholder="Email" style={styles.inputStyles} />
      <TextInput
        placeholder="Password"
        style={styles.inputStyles}
        secureTextEntry={true}
      />
      <View style={styles.tandc}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked((prev) => !prev)}
          color="blue"
        />
        <Text>Please accept all terms and conditions</Text>
      </View>
      <Button
        color="white"
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Home");
        }}
        onLongPress={() => {
          alert("long pressed");
        }}
        disabled={checked ? false : true}
      >
        Register
      </Button>
      <Button
        color="white"
        style={{
          backgroundColor: "orange",
          borderRadius: 6,
          marginHorizontal: 30,
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
        onLongPress={() => {
          alert("long pressed");
        }}
      >
        Home
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyles: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    margin: 10,
  },
  btn: {
    backgroundColor: "#7510f7",
    borderRadius: 5,
    margin: 20,
    marginHorizontal: 30,
  },
  inputStyles: {
    backgroundColor: "white",
    marginHorizontal: 30,
    marginVertical: 5,
  },
  tandc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginStart: 20,
  },
});

const Register = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Register;
