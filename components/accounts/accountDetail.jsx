import { ScrollView, FlatList, View } from "react-native";
import { Account } from "../common/account/accounts.jsx"

import styles from './accountDetail.style'
import { getAccounts } from "../../utils/DataHandler.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const AccountDetail = ({style,navigation}) => {
    let accounts = getAccounts();
    const data = accounts;
    const isLoading = false;

    return (
        <View style={[styles.container, style]}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Account item={item} navigation={navigation}/>
                )}
                showsVerticalScrollIndicator={false}    
            />
        </View>
    )
};

export default AccountDetail;