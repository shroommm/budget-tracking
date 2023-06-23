import { View, Text, TouchableOpacity } from 'react-native'
import styles from './accounts.style'

export function Account({ item }) {

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.accName}>{item.name}</Text>
            <Text style={styles.amount} numberOfLines={1}>{item.amount.toLocaleString()} VND</Text>
        </TouchableOpacity>
    );
}

export default Account;