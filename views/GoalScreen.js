import React, { useState } from "react";
import { View, FlatList, Button } from "react-native";
import styles from "../styles";
import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";

const HomeScreen = (props) => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModelVisible, setAddModelVisible] = useState(false);

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setAddModelVisible(false);
  }

  function clearGoalsHandler() {
    setCourseGoals([]);
  }

  function removeGoalHandler(indexToRemove) {
    var a = courseGoals.slice(); //create a copy since we cant edit directly
    a.splice(indexToRemove, 1); //remove
    setCourseGoals(a); //apply
  }

  function cancelAddGoalHandler() {
    setAddModelVisible(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setAddModelVisible(true)} />
      <GoalInput
        visible={isAddModelVisible}
        onAddGoal={addGoalHandler}
        onClearGoals={clearGoalsHandler}
        onCancel={cancelAddGoalHandler}
      />
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
};

export default HomeScreen;
