import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import ModalScreen from "../screens/ModalScreen";
import Colors from "../constants/colors";
import { BlurView } from "expo-blur";

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="MyModal"
        component={ModalScreen}
        options={{
          headerStyle: { backgroundColor: Colors.accent },
        }}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
