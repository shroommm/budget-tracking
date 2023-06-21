import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 10 
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: "space-between",
        columnGap: 40,
        paddingVertical: 10
    },
    totalMoney: {
        fontSize: 45,
    },
    totalCurrency: {
        paddingLeft: 10,
        paddingTop: 8,
        fontSize: 30,
        color: 'grey',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    btnContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    btnContext: {
        marginTop: 3,
        fontSize: 10
    }
})


export default styles