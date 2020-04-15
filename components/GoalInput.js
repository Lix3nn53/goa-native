import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import CustomModal from "./CustomModal";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler(enteredText) {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <CustomModal visible={props.visible} onCancel={props.onCancel}>
      <View style={styles.container}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.button}>
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
      <View style={styles.space} />
      <View style={styles.container}>
        <View style={styles.button}>
          <Button title="CLEAR" onPress={props.onClearGoals} />
        </View>
        <View style={styles.button}>
          <Button title="CANCEL" color="red" onPress={props.onCancel} />
        </View>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    flex: 2,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  button: {
    flex: 1,
    padding: 5,
    margin: 5,
    justifyContent: "center",
  },
  space: {
    padding: 20,
  },
});

export default GoalInput;
