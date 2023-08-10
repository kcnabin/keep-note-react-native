import { View, Text, Pressable, Alert } from "react-native";
import { mainStyle } from "../../styles/mainStyle";

const EachNote = ({ note, deleteNote, edit }) => {
  const handleEachNote = (id) => {
    Alert.alert("What you want to do?", "", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Edit",
        onPress: () => edit(id),
      },
      {
        text: "Delete",
        onPress: () => deleteNote(id),
      },
    ]);
  };

  return (
    <Pressable onPress={() => handleEachNote(note.id)}>
      <View style={[mainStyle.card, mainStyle.cardItem]}>
        <Text style={{ fontSize: 20 }}>{note.text}</Text>
      </View>
    </Pressable>
  );
};

export default EachNote;
