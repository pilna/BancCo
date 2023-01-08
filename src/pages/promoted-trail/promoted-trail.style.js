import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    profilePageContainer: {
        paddingHorizontal: "5%",
        paddingVertical: "5%",
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    profileTitle: {
        marginTop: 10,
        fontSize: 24,
    },
    profileInputContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 90,
    },
    profileInputLabel: {
        fontSize: 20,
        marginBottom: 4,

    },
    profileInputBox: {
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
    },
    backgroundImage: {
        height: '100%',
        width: '120%',//c'est moche à changer mais ca marche
    },
    profileImage: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        width: 100,
        height: 100
    },
    sugdeg:{
        flexDirection: 'row',
    },
    sugdegflex:{

        alignItems: "center",
        marginTop: 10,
        flex: 1
    },
    back:{
        width: '80%',
        backgroundColor: "#fff",

    },
    loginInputBox: {
        fontSize: 20,
        paddingVertical: 4,
        paddingHorizontal: 8,
        border: "1px solid #777777",
        borderRadius: 4,
    },

});