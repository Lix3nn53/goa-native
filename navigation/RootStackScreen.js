import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainStackScreen from "./MainStackScreen";
import ModalScreen from "../views/ModalScreen";

const RootStack = createStackNavigator();

function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="MyModal" component={ModalScreen} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
