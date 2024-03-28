// components/NoteScreen.js
import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NoteScreen = (props) => {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const saveNote = () => {
        //logic to save the note will go here
        //I want to display the new note on the HomeScreen once it is 'saved'
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Note Title'
                value={title}
                onChangeText={setTitle}
                style={styles.titleInput}
            />
            <TextInput 
                placeholder='Note Content'
                value={content}
                onChangeText={setContent}
                style={styles.contentInput}
                multiline
            />
            {/* <Button title="Save Note" onPress={saveNote} /> */}
            <TouchableOpacity style={styles.button} onPress= {() => {saveNote}}>
                <Text style={styles.buttonText}>Save Note</Text>
            </TouchableOpacity>
        </View>
    ) 
}

const styles = StyleSheet.create ({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 10,
    },
    titleInput: {
        margin: 10,
        fontSize: 30,
        fontWeight: "bold",
    },
    contentInput: {
        margin: 10,
        fontSize: 20,
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        width: 200, // Adjust width as needed
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
      },
})

export default NoteScreen;
