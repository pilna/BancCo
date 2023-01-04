import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginPageContainer: {
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    height: "100vh",
    alignItems: "center",
    display: "column",
    justifyContent: "space-between",
  },
  loginTitle: {
    fontSize: 24,
  },
  loginInputContainer: {
    width: "100%",
    marginTop: 30,
  },
  loginInputLabel: {
    fontSize: 16,
    marginBottom: 4,
  },
  loginInputBox: {
    fontSize: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
    border: "1px solid #777777",
    borderRadius: 4,
  },
  colorizedText: {
    color: "#4C8C2C",
  },
  topContentContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  }
});