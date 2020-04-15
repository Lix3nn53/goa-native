import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={[styles.goalContainer, styles.listItem]}>
      <Text>{props.text}</Text>

      <TouchableOpacity onPress={props.onDelete.bind(this, props.index)}>
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  deleteButton: {
    padding: 10,
    margin: 10,
  },
});

export default GoalItem;
