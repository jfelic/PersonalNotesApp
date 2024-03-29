import React, { createContext, useState } from 'react';

//Create context object with default values
const NotesContext = createContext({
    notes: [], //array of note objects
    setNotes: () => {}, //function to update the notes
    addNote: (title, content) => {}, //add a new note, no implementation
});

//create a provider component that holds the state and functions
export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);//state to store the actual notes

    //implement the addNote function that will update the notes state
    const addNote = (title, content) => {
        setNotes(prevNotes => {
            const newNote = { id: Date.now().toString(), title, content };
            return [...prevNotes, newNote];
        })
    };

    //return the Provider component with the state and function as values
    return (
        <NotesContext.Provider value={{ notes, setNotes,addNote }}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesContext;