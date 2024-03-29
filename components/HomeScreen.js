// components/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NotesContext from '../contexts/NotesContext';


// HomeScreen component
const HomeScreen = props => {

  // Placeholder data for notes
  const { notes } = useContext(NotesContext);

  //Render UI components
  return(
    <View style={styles.container}>
      <FlatList
      data={notes} //Data source for the list
      keyExtractor={item => item.id} //Unique key for each item
      renderItem={( {item} ) => (
        <TouchableOpacity
          style={styles.noteItem}
          onPress={() => props.navigation.navigate('NoteScreen', { note: item })}
        >
          <Text style={styles.noteTitle}>{ item.title }</Text>
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
    position: 'absolute',
    right: 20,
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
