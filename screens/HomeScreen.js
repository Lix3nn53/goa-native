import React from "react";
import { View, Text } from "react-native";
import MainButton from "../components/MainButton";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <MainButton onPress={() => navigation.navigate("MyModal")}>
        Open Modal
      </MainButton>
    </View>
  );
}

export default HomeScreen;
