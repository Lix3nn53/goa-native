import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import styles from "./styles";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoal);
    var length = courseGoals.length;
    setCourseGoals((courseGoals) => [...courseGoals, enteredGoal]);
    //setEnteredGoal("");
  }

  function clearGoalsHandler() {
    setCourseGoals([]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
        <Button title="CLEAR" onPress={clearGoalsHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => index + ""}
        style={styles.container}
        data={courseGoals}
        renderItem={(itemData) => (
          <Text style={styles.listItem}>{itemData.item}</Text>
        )}
      />
    </View>
  );
}
