import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    padding: 10,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  filterLabel: {
    marginLeft: 4
  },
  closeContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10
  },
});