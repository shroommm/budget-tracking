import { View, Text } from 'react-native'

import AccountBtn from '../common/account_btn/accountBtn'

import styles from './accountTotal.style'

import history_icon from '../../asset/icons/history.png' //author: Tempo_doloe (flaticon)
import transfer_icon from '../../asset/icons/transfer.png' //author: Uniconlabs (flaticon)
import add_icon from '../../asset/icons/plus.png' //author: Pixel Perfect (flaticon)


const AccountTotal = ({addPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.totalContainer}>
                <Text style={styles.totalMoney}>500.000.000</Text>
                <Text style={styles.totalCurrency}>VND</Text>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.btnContainer}>
                    <AccountBtn iconUrl={history_icon} dimension='90%' handlePress={null}/>
                    <Text style={styles.btnContext}>Transfer history</Text>
                </View>
                <View style={styles.btnContainer}>
                    <AccountBtn iconUrl={transfer_icon} dimension='90%' handlePress={null}/>
                    <Text style={styles.btnContext}>New transfer</Text>
                </View>
                <View style={styles.btnContainer}>
                    <AccountBtn iconUrl={add_icon} dimension='90%' handlePress={addPress}/>
                    <Text style={styles.btnContext}>New payment method</Text>
                </View>
            </View>
        </View>
    )
}

export default AccountTotal