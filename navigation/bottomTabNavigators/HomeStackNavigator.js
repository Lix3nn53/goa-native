import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultScreenOptions from "../../constants/defaultScreenOptions";
import HomeScreen from "../../screens/HomeScreen";
import LoreChapterScreen from "../../screens/lore/LoreChapterScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Post" component={LoreChapterScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
