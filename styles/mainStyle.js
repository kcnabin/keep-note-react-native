import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "seashell",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textCenter: {
    textAlign: "center",
  },
  iconText: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  flexColumnCenter: {
    flex: 1,
    justifyContent: "center",
  },
  flexOne: {
    flex: 1,
  },
  pt12: {
    paddingTop: 12,
  },
});
