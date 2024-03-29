// components/NoteScreen.js
import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NotesContext from '../contexts/NotesContext';


const NoteScreen = ({ route, navigation }) => {
    const { note } = route.params || {};

    const [title, setTitle] = useState(note?.title || '');
    const [content, setContent] = useState(note?.content || '');
    const { notes, setNotes } = useContext(NotesContext);//access the addNote function from context

    const saveNote = () => {
        if(note && note.id) {
            //we're editing an existing note
            const updatedNotes = notes.map(n => {
                if (n.id === note.id) {
                    return {...n, title, content};
                }
                return n;
            });
            setNotes(updatedNotes);
        } else {
            //we're adding a new note
            const newNoteId = Date.now().toString();
            const newNote = { id: newNoteId, title, content };
            setNotes(prevNotes => [...prevNotes, newNote]);
        }
        navigation.goBack();
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
            <TouchableOpacity style={styles.button} onPress= {saveNote}>
                <Text style={styles.buttonText}>Save Note</Text>
            </TouchableOpacity>
        </View>
    ) 
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
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
