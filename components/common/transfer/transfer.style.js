import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginBottom: 10,
        padding: 18,
        borderRadius: 15,
    },
    transferContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    info: {
        flexDirection: "column",
    },
    accName: {
        letterSpacing: 1,
        fontSize: 18,
        fontWeight: "500",
        textAlign: "left",       
    },
    receiveAcc: {
        color: "green",
    },
    giveAcc: {
        color: "#ef5354",
    },
    date: {
        letterSpacing: 1,
        fontSize: 12,
        fontWeight: "400",
        textAlign: "center",
        color: "#7d8895",
    },
    amount: {
        letterSpacing: 1,
        fontSize: 16,
        fontWeight: "500",
        textAlign: "right",
        color: "#303841",
    },
});

export default styles;