import { Text, FlatList, View } from "react-native";
import { Transfer } from "../common/transfer/transfer"

import styles from './transferHistory.style'
import { getTransfers } from "../../utils/DataHandler";

const TransferHistory = () => {
    const data = getTransfers();
    const isLoading = false;

    return (
        <View style={styles.container}>
            <View style={styles.notation}>
                <Text style={styles.notationText}>From</Text>
                <Text style={[styles.notationText, styles.amount]}>Amount</Text>
                <Text style={[styles.notationText, styles.receiver]}>To</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Transfer item={item} />
                )}
                showsVerticalScrollIndicator={false}    
            />
        </View>
    )
};

export default TransferHistory;