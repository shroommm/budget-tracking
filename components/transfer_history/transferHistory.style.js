import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 30,
    },
    notation: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        backgroundColor: "white",
        marginBottom: 8,
        paddingHorizontal: 25,
        paddingVertical: 6,
        borderRadius: 15,
        alignItems: 'center',

    },
    notationText: {
        fontSize: 14,
        letterSpacing: 1,
        textAlign: 'center',
        fontWeight: '700'
    },
    amount: {
        right: 10,
    },
    receiver: {
        right: 12,
    },

});

export default styles;