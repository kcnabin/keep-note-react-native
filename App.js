import { View, Text, Button, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { mainStyle } from "./styles/mainStyle";
import Header from "./components/Header";

const App = () => {
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

          <View style={mainStyle.pt12}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Why don't you add some notes ?
            </Text>
          </View>
        </View>
      </View>

      <View style={{ paddingTop: 16 }}>
        <Button title="Add Note" color="steelblue" onPress={() => {}} />
      </View>
    </View>
  );
};

export default App;
