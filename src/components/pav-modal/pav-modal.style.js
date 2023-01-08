import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  closeContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
  },
  modalContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 0,
  },
  pavModelContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  pavModalTitle: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 10,
  },
  pavModalInformationContainer: {
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  pavModalStreet: {
    width: "100%",
    paddingHorizontal: 30,
  },
  pavModalRightSideInformation: {
    height: 100,
    paddingLeft: 20,
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
  pavModalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pavModalTextStatus: {
    marginRight: 5,
    fontWeight: "bold",
  },  
  pavModalOpenStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
  }
});