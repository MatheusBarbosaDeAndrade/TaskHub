import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Footer from "../components/Footer"
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones

const HomeScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <Text style={styles.title}> T A S K H U B </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TaskListScreen')}
        >
          <Ionicons name="play" size={32} color="#fff" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebe1c5',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#045071',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
   title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default HomeScreen;
