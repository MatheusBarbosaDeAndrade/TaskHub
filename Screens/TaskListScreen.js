import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Footer from '../components/Footer'
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now().toString(), name: taskName }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Adicione uma tarefa</Text>
        <TaskInput onAddTask={addTask} />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem task={item} onDeleteTask={deleteTask} />
          )}
        />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ebe1c5',
  },
  content: {
    flex: 1,
    padding: 50,
  },
  footer: {
    height: 60, 
    backgroundColor: '#98885F', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default TaskListScreen;
