import { View, Text } from "react-native";
import { mainStyle } from "../styles/mainStyle";

const Header = ({ title, color = "black", align = "left" }) => {
  return (
    <View>
      <Text style={{ ...mainStyle.header, color, textAlign: align }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
