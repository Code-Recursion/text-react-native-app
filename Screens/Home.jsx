import React from "react";
import { View, Text } from "react-native";
import { Appbar, Avatar, Button, Headline } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import SafeAreaViewAndroid from "../components/SafeAreaViewAndroid";
import { ScrollView } from "react-native";

const Main = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Appbar style={{ padding: 10 }}>
        <Appbar.Action
          icon="heart"
          onPress={() => {
            alert("Thanks for liking this app");
          }}
        />
        <Appbar.Content title="Welcome" subtitle="thanks for visiting" />
        <Appbar.Action icon="account" />
        <Appbar.Action icon="login-variant" />
      </Appbar>
      <TouchableOpacity>
        <Avatar.Image
          source={{
            uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=980:*",
          }}
          size={150}
          style={{
            alignSelf: "center",
            marginTop: 15,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          margin: 10,
        }}
      >
        Home
      </Text>
      <Button
        color="white"
        style={{
          backgroundColor: "tomato",
          borderRadius: 5,
          marginHorizontal: 80,
        }}
        onPress={() => {
          navigation.navigate("Contact");
        }}
      >
        got to contact{" "}
      </Button>
      <Button
        color="white"
        style={{
          backgroundColor: "tomato",
          borderRadius: 5,
          margin: 10,
          marginHorizontal: 80,
        }}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Register
      </Button>
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Headline>About</Headline>
        <Text>
          deeply passionated about software engineering and looking for some
          exciting opportunities for the same
        </Text>
      </View>
    </View>
  );
};

const Home = ({ navigation }) => {
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />;
};

export default Home;
