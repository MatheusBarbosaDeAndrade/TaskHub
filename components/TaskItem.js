import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TaskItem = ({ task, onDeleteTask }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.name}</Text>
      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  text: {
    fontSize: 18,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default TaskItem;
