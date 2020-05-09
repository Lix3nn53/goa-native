import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const TitleText = (props) => (
  <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
  },
});

export default TitleText;
