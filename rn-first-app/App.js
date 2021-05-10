import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
 
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

 
  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };  // id 대신 key도 가능

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={ itemData => (
       <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>
      )}>
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }

});
