// components/HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// HomeScreen component
const HomeScreen = props => {
  return({
    <Button 
      title = "Go To NoteScreen"
      onPress = {() => props.navigation.navigate('NoteScreen')}
    />
  })
}

export default HomeScreen;
