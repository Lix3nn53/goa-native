import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Button, Text } from "react-native";
import RootStackScreen from "./navigation/RootStackScreen";

export default function App() {
  const themeSelection = "dark";

  const MyDarkTheme = {
    dark: true,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "rgb(242, 242, 242)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
    },
  };

  return (
    <NavigationContainer
      theme={themeSelection === "dark" ? MyDarkTheme : DefaultTheme}
    >
      <RootStackScreen />
    </NavigationContainer>
  );
}
