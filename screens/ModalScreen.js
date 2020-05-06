import React from "react";
import { View, Text, Button } from "react-native";
import MainButton from "../components/MainButton";

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <MainButton onPress={() => navigation.goBack()}>Dismiss Modal</MainButton>
    </View>
  );
}

export default ModalScreen;
