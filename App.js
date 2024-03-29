import 'react-native-gesture-handler'
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotesContext from './contexts/NotesContext.js';

// /* This is where we will import more screens */
import HomeScreen from './components/HomeScreen.js';
import NoteScreen from './components/NoteScreen.js';
import { NotesProvider } from './contexts/NotesContext.js'; //import the provider


const Stack = createStackNavigator(); //Create a stack navigator

export default function App() {
  //wrap the whole app in the NotesProvider to make the context available throughout
  return (
    <NotesProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName = "Home">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="NoteScreen" component={NoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
}
