import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultScreenOptions from "../../constants/defaultScreenOptions";
import HomeScreen from "../../screens/HomeScreen";
import SinglePostScreen from "../../screens/SinglePostScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={SinglePostScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
