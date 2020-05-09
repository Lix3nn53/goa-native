import * as React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./bottomTabNavigators/HomeStackNavigator";
import LoreStackNavigator from "./bottomTabNavigators/LoreStackNavigator";
import StoreStackNavigator from "./bottomTabNavigators/StoreStackNavigator";
import LoginStackNavigator from "./bottomTabNavigators/LoginStackNavigator";

const Tab = createBottomTabNavigator();

export default function TestNavigator() {
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
        activeTintColor: "#ffa04d",
        inactiveTintColor: "#f5f3f0",
        activeBackgroundColor: "#493c37",
        inactiveBackgroundColor: "#3a312c",
      }}
    >
      <Tab.Screen name="Home">{() => <HomeStackNavigator />}</Tab.Screen>
      <Tab.Screen name="Lore">{() => <LoreStackNavigator />}</Tab.Screen>
      <Tab.Screen name="Store">{() => <StoreStackNavigator />}</Tab.Screen>
      <Tab.Screen name="Login">{() => <LoginStackNavigator />}</Tab.Screen>
    </Tab.Navigator>
  );
}
