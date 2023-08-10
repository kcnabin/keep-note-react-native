import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Image } from "react-native";
import { mainStyle } from "../../styles/mainStyle";
import Header from "../Header";

const NoteInput = ({
  hideModal,
  handleNewNote,
  editNote,
  noteToEdit,
  updateNote,
}) => {
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    if (noteToEdit) {
      setNewNote(noteToEdit.text);
    }
  }, [noteToEdit]);

  return (
    <View
      style={[
        mainStyle.appContainer,
        mainStyle.flexColumnCenter,
        mainStyle.bgLavender,
      ]}
    >
      <View>
        <View style={mainStyle.flexCenter}>
          <View style={[mainStyle.flexCenter, mainStyle.alignCenter]}>
            <Image
              source={require("../../assets/note-icon.png")}
              style={{ width: 30, height: 30, marginEnd: 8 }}
            />
            <Header title={editNote ? "Update Note" : "Add Task"} />
          </View>
        </View>

        <TextInput
          style={mainStyle.textInput}
          placeholder={"Something on your mind?"}
          value={newNote}
          onChangeText={(text) => setNewNote(text)}
        />

        <View>
          <View style={mainStyle.flexCenter}>
            <View style={{ marginEnd: 24 }}>
              <Button
                title={editNote ? "Update" : "Save"}
                onPress={() => {
                  if (editNote) {
                    updateNote({ ...noteToEdit, text: newNote });
                  } else {
                    handleNewNote(newNote);
                  }
                  setNewNote("");
                }}
                disabled={!newNote}
              />
            </View>
            <Button title="Cancel" onPress={hideModal} color="tomato" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NoteInput;
