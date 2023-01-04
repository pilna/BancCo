import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  statsModalContainer: {
    width: "100vw",
    backgroundColor: "#DFE2DE",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  statsModalContentContainer: {
    width: "100vw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  statsModalArrowIcon: {
    width: 24,
    height: 24,
  },
  navigationContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100vw",
    backgroundColor: "#DDDFE2"
  }
});