import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginBottom: 10,
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
    },
    info: {
        flexDirection: "column",
    },
    accName: {
        letterSpacing: 1,
        fontSize: 19,
        fontWeight: "500",
        textAlign: "left",
        color: "#303841",
    },
    date: {
        letterSpacing: 1,
        fontSize: 12,
        fontWeight: "400",
        textAlign: "left",
        color: "#7d8895",
    },
    amount: {
        letterSpacing: 1,
        fontSize: 17,
        fontWeight: "500",
        textAlign: "right",
        color: "green",

    },
});

export default styles;