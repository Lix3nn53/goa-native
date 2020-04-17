import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import LoreScreen from "../screens/LoreScreen";
import StoreScreen from "../screens/StoreScreen";

const Tab = createBottomTabNavigator();

function MainStackScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <FontAwesome
                name={focused ? "home" : "home"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Lore") {
            return (
              <FontAwesome
                name={focused ? "book" : "book"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Store") {
            return (
              <FontAwesome
                name={focused ? "shopping-bag" : "shopping-bag"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Login") {
            return (
              <FontAwesome
                name={focused ? "sign-in" : "sign-in"}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Lore" component={LoreScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Login" component={StoreScreen} />
    </Tab.Navigator>
  );
}

export default MainStackScreen;
