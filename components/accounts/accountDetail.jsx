import { ScrollView, FlatList, View } from "react-native";
import { Account } from "../common/account/accounts.jsx"

import styles from './accountDetail.style'

const AccountDetail = () => {
    const data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
    const isLoading = false;

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Account />
                )}
                showsVerticalScrollIndicator={false}    
            />
        </View>
    )
};

export default AccountDetail;