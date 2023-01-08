import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    closeContainer: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10
    },
    modalContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        padding: 10,
    },
    degModelContainer: {
        flexDirection: "column",
        alignItems: "center",
    },
    degModalTitle: {
        fontWeight: "bold",
        fontSize: 16,
        paddingVertical: 10,
    },
    degModalInformationContainer: {
        paddingHorizontal: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    degModalStreet: {
        width: "100%",
        paddingHorizontal: 30,
    },
    degModalRightSideInformation: {
        height: 100,
        paddingLeft: 20,
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
    },
    degModalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    degModalTextStatus: {
        marginRight: 5,
        fontWeight: "bold",
    },
    degModalOpenStatusContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    degInputLabel: {
        fontSize: 16,
        marginBottom: 4,
    },
    degInputBox: {
        fontSize: 20,
        paddingVertical: 4,
        paddingHorizontal: 8,
        border: "1px solid #777777",
        borderRadius: 4,
    },
});