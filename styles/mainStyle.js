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
  alignCenter: {
    alignItems: "center",
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
  textInput: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 24,
    borderRadius: 20,
    fontSize: 20,
  },
  bgLavender: {
    backgroundColor: "honeydew",
  },
  card: {
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  cardItem: {
    marginTop: 4,
    marginBottom: 8,
  },
});
