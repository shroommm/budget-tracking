import { View, Text, TouchableOpacity } from 'react-native'
import styles from './transfer.style'

export function Transfer({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.transferContainer}>
                <Text style={[styles.accName, styles.giveAcc]}>Cash</Text>
                <View>
                    <Text style={styles.amount} numberOfLines={1}>500.000 VND</Text>
                    <Text style={styles.date}>18/06/2023</Text>
                </View>
                <Text style={[styles.accName, styles.receiveAcc]}>Momo</Text>

            </View>

        </View>
    );
}

export default Transfer;