import { View } from "react-native";
import EachNote from "./EachNote";

const AllNotes = ({ notes, deleteNote, edit }) => {
  return (
    <View style={{ paddingVertical: 20 }}>
      {notes.map((note) => (
        <EachNote
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          edit={edit}
        />
      ))}
    </View>
  );
};

export default AllNotes;
