import { View, Text, TouchableOpacity } from 'react-native'
import styles from './accounts.style'

export function Account({ item }) {
    return (
        <View style={styles.container}>
            <Text style={styles.accName}>Cash</Text>
            <Text style={styles.amount} numberOfLines={1}>500.000 VND</Text>
        </View>
    );
}

export default Account;