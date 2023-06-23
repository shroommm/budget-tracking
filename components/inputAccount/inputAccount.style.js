import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '7%',
    },
    inputContainer: {
        paddingVertical: 15,
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 12,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 2.54,
        elevation: 3,

        fontSize: 17,
    },
    contextInput: {
        marginLeft: 10,
        marginBottom: 3,
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    addButton: {
        width: 130,
        height: 45,
        backgroundColor: '#e5e5e5',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5
    },
    addButtonText: {
        color: '#393939',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: '#ff8080',
        fontSize: 13,
        marginLeft: 13,
        marginTop: 3,
    },

})

export default styles