import { View, Text, Button, Image, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { mainStyle } from "./styles/mainStyle";
import Header from "./components/Header";
import NoteInput from "./components/notes/NoteInput";
import { useState } from "react";
import AllNotes from "./components/notes/AllNotes";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [showGoalInput, setShowGoalInput] = useState(false);
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const resetStates = () => {
    setShowGoalInput(false);
    setNoteToEdit(null);
    setEditNote(false);
  };

  const saveNote = (newNote) => {
    if (!newNote) {
      return;
    }
    const newNoteObject = {
      text: newNote,
      id: uuidv4(),
    };
    setNotes([...notes, newNoteObject]);
    setShowGoalInput(false);
  };

  const handleNoteDelete = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  const handleEdit = (id) => {
    setEditNote(true);
    setShowGoalInput(true);
    setNoteToEdit(notes.filter((note) => note.id === id)[0]);
  };

  const handleNoteUpdate = (updatedNote) => {
    setNotes((notes) =>
      notes.map((note) => (note.id !== updatedNote.id ? note : updatedNote))
    );
    resetStates();
  };

  return (
    <View style={mainStyle.appContainer}>
      <StatusBar style="auto" />

      <View style={[mainStyle.flexOne]}>
        <View style={mainStyle.flexColumnCenter}>
          <View style={[mainStyle.iconText, mainStyle.flexCenter]}>
            <Image
              source={require("./assets/note-icon.png")}
              style={{ width: 30, height: 30, marginRight: 8 }}
            />
            <Header title="Keep-Note" align="center" />
          </View>

          {notes.length < 1 ? (
            <View style={mainStyle.pt12}>
              <Text style={{ fontSize: 20, textAlign: "center" }}>
                Why don't you add some notes ?
              </Text>
            </View>
          ) : (
            ""
          )}

          <Modal
            visible={showGoalInput}
            onRequestClose={() => setShowGoalInput(false)}
            animationType="slide"
          >
            <NoteInput
              hideModal={() => resetStates()}
              handleNewNote={(newNote) => saveNote(newNote)}
              editNote={editNote}
              noteToEdit={noteToEdit}
              updateNote={(updatedNote) => {
                handleNoteUpdate(updatedNote);
              }}
            />
          </Modal>

          <AllNotes
            notes={notes}
            deleteNote={(id) => handleNoteDelete(id)}
            edit={(id) => handleEdit(id)}
          />
        </View>
      </View>

      <View style={{ paddingTop: 16 }}>
        <Button
          title="Add Note"
          color="steelblue"
          onPress={() => setShowGoalInput(true)}
        />
      </View>
    </View>
  );
};

export default App;
