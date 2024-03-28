// components/HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// HomeScreen component
const HomeScreen = props => {

  // Placeholder data for notes
  const notes = [
    {id: '1', title: 'First Note', content: 'This is the first note content.'},
    {id: '2', title: 'Second Note', content: 'This is the second note content.'},
    {id: '3', title: 'Third Note', content: 'This is the third note content.'},
    {id: '4', title: 'Fourth Note', content: 'This is the fourth note content.'},
    //add more items as needed
  ];

  //Render UI components
  return(
    <View style={styles.container}>
      <FlatList
      data={notes} //Data source for the list
      keyExtractor={item => item.id} //Unique key for each item
      renderItem={( obj ) => (
        <TouchableOpacity
          style={styles.noteItem}
          onPress={() => props.navigation.navigate('NoteScreen', { noteId: obj.item.id })}
        >
          <Text style={styles.noteTitle}>{ obj.item.title }</Text>
        </TouchableOpacity>
      )}
    />

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('NoteScreen')}
      >
        <Ionicons name='add' size={35} color='white' />
      </TouchableOpacity>

    </View>
  )
}

// StyleSheet //
const styles = StyleSheet.create({
  container: {
    flex: 1, // Use the entire screen
    paddingTop: 20, // Padding from the top of the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteItem: {
    backgroundColor: '#bdbdbd', // Light grey background for each note item
    padding: 20, // Padding inside each note item
    paddingLeft: 120,
    paddingRight: 120,
    marginVertical: 8, // Vertical margin for spacing between items
    marginHorizontal: 16, // Horizontal margin for spacing from the screen edges
    alignSelf: 'stretch', //stretch to match container width
    borderRadius: 10,
  },
  noteTitle: {
    fontSize: 18, // Font size for the note title
  },
  button: {
    position: 'absolue',
    left: 120,
    bottom: 40,
    backgroundColor: 'green',
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 }
    },
  buttonText: {
    color: 'white',
  }
});

export default HomeScreen;
