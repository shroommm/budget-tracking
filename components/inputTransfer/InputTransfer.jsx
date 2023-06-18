import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef, useCallback } from "react";
import DropDownPicker from "react-native-dropdown-picker";


import styles from "./InputTransfer.style";


const InputTransfer = ({ style, addBtnOnPress }) => {
    const [inputAmount, setInputAmount] = useState('');

    const [senderOpen, setSenderOpen] = useState(false);
    const [senderValue, setSenderValue] = useState(null);
    const [senderItems, setSenderItems] = useState([
        { label: 'Cash', value: 'cash' },
        { label: 'ACB', value: 'acb' },
        { label: 'VCB', value: 'vcb' },
        { label: 'Momo', value: 'momo' },
    ]);

    const [receiverOpen, setReceiverOpen] = useState(false);
    const [receiverValue, setReceiverValue] = useState(null);
    const [receiverItems, setReceiverItems] = useState([
        { label: 'Cash', value: 'cash' },
        { label: 'ACB', value: 'acb' },
        { label: 'VCB', value: 'vcb' },
        { label: 'Momo', value: 'momo' },
    ]);

    const onSenderOpen = useCallback(() => {
        setReceiverOpen(false);
    }, []);

    const onReceiverOpen = useCallback(() => {
        setSenderOpen(false);
    }, []);


    const handleAmountChange = (event) => {
        const value = event.nativeEvent.text;

        if (isNaN(value) || value.includes(' ')) {
            console.log('Error: Input value is not a number');
            const sanitizedValue = value.slice(0, -1); // Remove the last character
            setInputAmount(sanitizedValue);
        } else {
            setInputAmount(value);
        }
    };


    const handleAddBtnPress = () => {
        const amount = inputAmount.trim() === ''? 0 : inputAmount;

        console.log(senderValue, amount, receiverValue);

        //{----- Check and Update new account (money source) here -----}

        //addBtnOnPress(); //This is for navigating back to Account Page
    }

    return (
        <View style={[styles.container, style]}>
            <View style={styles.inputContainer}>
                <Text style={styles.contextInput}>Sender</Text>
                <DropDownPicker
                    open={senderOpen}
                    value={senderValue}
                    items={senderItems}
                    setOpen={setSenderOpen}
                    setValue={setSenderValue}
                    setItems={setSenderItems}
                    style={styles.picker}
                    dropDownContainerStyle={styles.picker}
                    placeholder="Select the sender"
                    placeholderStyle={{ color: 'grey' }}
                    onOpen={onSenderOpen}
                />
            </View>
            <View style={[styles.inputContainer, { zIndex: 1 }]}>
                <Text style={styles.contextInput}>Amount</Text>
                <TextInput
                    style={styles.sourceInput}
                    value={inputAmount}
                    onChange={handleAmountChange}
                    keyboardType="numeric"
                />
            </View>
            <View style={[styles.inputContainer, { zIndex: 9 }]}>
                <Text style={styles.contextInput}>Receiver</Text>
                <DropDownPicker
                    open={receiverOpen}
                    value={receiverValue}
                    items={receiverItems}
                    setOpen={setReceiverOpen}
                    setValue={setReceiverValue}
                    setItems={setReceiverItems}
                    style={styles.picker}
                    dropDownContainerStyle={styles.picker}
                    placeholder="Select the receiver"
                    placeholderStyle={{ color: 'grey' }}
                    onOpen={onReceiverOpen}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddBtnPress}
                >
                    <Text style={styles.addButtonText}>Transfer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default InputTransfer;