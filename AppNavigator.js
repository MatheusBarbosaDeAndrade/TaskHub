import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import TaskListScreen from './Screens/TaskListScreen';
import AboutScreen from './Screens/AboutScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TaskListScreen" 
          component={TaskListScreen} 
          options={({ navigation })=>({
            title: 'T A S K H U B',
            headerStyle: {
              backgroundColor: '#98885F', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 20, 
              fontFamily: 'Arial', 
              textAlign: 'center', 
            },
             headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('AboutScreen')}
                style={{ marginRight: 10 }}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>Sobre</Text>
              </TouchableOpacity>
      ),
          })} 
        />
         <Stack.Screen 
          name="AboutScreen" 
          component={AboutScreen} 
          options={({ navigation })=>({
            title: 'T A S K H U B',
            headerStyle: {
              backgroundColor: '#98885F', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 20, 
              fontFamily: 'Arial', 
              textAlign: 'center', 
            },
             headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('AboutScreen')}
                style={{ marginRight: 10 }}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>Sobre</Text>
              </TouchableOpacity>
      ),
          })} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;