import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent_dark,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.primary,
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
