import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homePageContainer: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  colorized: {
    color: "#4C8C2C",
  },
  createAccountText: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
  termOfUseContainer: {
    width: "80%",
  },
  termOfUseText: {
    textAlign: "center",
    fontSize: 14,
  },
  loginText: {
    fontSize: 20,
    textAlign: "center",
  },
  descriptionText: {
    textAlign: "center",
    color: "#777777",
    width: "80%",
    fontSize: 17,
  },
});