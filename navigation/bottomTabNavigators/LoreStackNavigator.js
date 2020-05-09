import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import defaultScreenOptions from "../../constants/defaultScreenOptions";
import LoreListScreen from "../../screens/lore/LoreListScreen";
import LoreChapterScreen from "../../screens/lore/LoreChapterScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="Lore" component={LoreListScreen} />
      <Stack.Screen name="LoreChapter" component={LoreChapterScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
