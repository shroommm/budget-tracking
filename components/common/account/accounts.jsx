import { View, Text, TouchableOpacity } from 'react-native'
import styles from './accounts.style'

export function Account({ item,navigation }) {

    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            navigation.navigate("EditPaymentMethod",{
                editAccount:item
            })
        }}>
            <Text style={styles.accName}>{item.name}</Text>
            <Text style={styles.amount} numberOfLines={1}>{item.amount.toLocaleString()} VND</Text>
        </TouchableOpacity>
    );
}

export default Account;