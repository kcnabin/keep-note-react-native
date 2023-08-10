import { View } from "react-native";
import EachNote from "./EachNote";

const AllNotes = ({ notes, deleteNote }) => {
  return (
    <View style={{ paddingVertical: 20 }}>
      {notes.map((note) => (
        <EachNote key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </View>
  );
};

export default AllNotes;
