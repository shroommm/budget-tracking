import { View, Text, TouchableOpacity } from 'react-native'
import styles from './transfer.style'

export function Transfer({ item }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.transferContainer}>
                <Text style={[styles.accName, styles.giveAcc]}>{item.sender}</Text>
                <View>
                    <Text style={styles.amount} numberOfLines={1}>{item.amount.toLocaleString()} VND</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
                <Text style={[styles.accName, styles.receiveAcc]}>{item.receiver}</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Transfer;