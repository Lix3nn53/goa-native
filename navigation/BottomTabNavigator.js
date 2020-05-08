import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import LoreListScreen from "../screens/lore/LoreListScreen";
import StoreScreen from "../screens/StoreScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Lore" component={LoreListScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
