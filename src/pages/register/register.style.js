import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  registerPageContainer: {
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  topContentContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  colorizedText: {
    color: "#4C8C2C",
  },
  registerTitle: {
    fontSize: 24,
  },
  registerInputContainer: {
    width: "100%",
    marginTop: 30,
  },
  registerInputLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  registerInputBox: {
    fontSize: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
    border: "1px solid #777777",
    borderRadius: 4,
  },
});