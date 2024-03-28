// components/HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

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
    <View>
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

        <Button
          style={styles.buttonStyle}
          title = "New Note"
          onPress={() => props.navigation.navigate('NoteScreen')}
        />

    </View>
  )
}

// StyleSheet for styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Use the entire screen
    paddingTop: 20, // Padding from the top of the screen
  },
  noteItem: {
    backgroundColor: '#f0f0f0', // Light grey background for each note item
    padding: 20, // Padding inside each note item
    marginVertical: 8, // Vertical margin for spacing between items
    marginHorizontal: 16, // Horizontal margin for spacing from the screen edges
  },
  noteTitle: {
    fontSize: 18, // Font size for the note title
  },
  buttonStyle: {
    color: "black",
    backgroundColor: "black"
  }
});

export default HomeScreen;
