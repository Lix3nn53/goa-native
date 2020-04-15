import React, { useState } from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
    //setEnteredGoal("");
  }

  function clearGoalsHandler() {
    setCourseGoals([]);
  }

  function removeGoalHandler(indexToRemove) {
    var a = courseGoals.slice(); //create a copy since we cant edit directly
    a.splice(indexToRemove, 1); //remove
    setCourseGoals(a); //apply
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} onClearGoals={clearGoalsHandler} />
      <FlatList
        keyExtractor={(item, index) => index + ""}
        style={styles.container}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            text={itemData.item}
            index={itemData.index}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}
