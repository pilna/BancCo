import { StyleSheet } from 'react-native';

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
  contentContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    paddingVertical: 10,
  }
});