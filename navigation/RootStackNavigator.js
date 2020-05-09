import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import LoreChapterScreen from "../screens/lore/LoreChapterScreen";
import Colors from "../constants/colors";

const RootStack = createStackNavigator();

function RootStackNavigator() {
  return (
    <RootStack.Navigator mode="card">
      <RootStack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Modal"
        component={LoreChapterScreen}
        options={{
          headerStyle: { backgroundColor: Colors.accent_dark },
        }}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;

/*function getTabHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";

  return routeName;
}*/
