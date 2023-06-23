import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef, useCallback } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import styles from "./InputTransfer.style";
import { addNewTransfer, getAccounts, processTransferMoney } from "../../utils/DataHandler";
import { acc, log } from "react-native-reanimated";
import { useEffect } from "react";

const InputTransfer = ({ style, addBtnOnPress, btnName, inputValue }) => {
    const accounts = getAccounts();
    const accountItems = accounts.map((account) => {
        return {
            amount: account.amount,
            label: account.name,
            value: account.id,
        };
    });
    const [sender, setSender] = useState(null);
    const [receiver, setReceiver] = useState(null);
    //above => của duy

    const [inputAmount, setInputAmount] = useState("");

    useEffect(() => {
        if (inputValue !== null) {
            const value = inputValue.params.param1;
            setInputAmount(value);
            console.log(inputAmount, value);
        }
    }, [])



    const [senderOpen, setSenderOpen] = useState(false);
    const [senderValue, setSenderValue] = useState(null);
    const [senderItems, setSenderItems] = useState(accountItems);

    const [receiverOpen, setReceiverOpen] = useState(false);
    const [receiverValue, setReceiverValue] = useState(null);
    const [receiverItems, setReceiverItems] = useState(accountItems);

    const onSenderOpen = useCallback(() => {
        setReceiverOpen(false);
    }, []);

    const onReceiverOpen = useCallback(() => {
        setSenderOpen(false);
    }, []);

    const handleSelectSender = (item) => {
        const excludedId = item?.value;
        const receiverItems = accountItems.filter(item => item.value !== excludedId);
        setReceiverItems(receiverItems);
        //console.log(receiverItems);

        setSender(item);
    };

    const handleSelectReceiver = (item) => {
        const excludedId = item?.value;
        const senderItems = accountItems.filter(item => item.value !== excludedId);
        setSenderItems(senderItems);

        setReceiver(item);
    };

    const onSenderClose = useCallback(() => {
    }, [])

    const handleAmountChange = (event) => {
        const value = event.nativeEvent.text;

        if (isNaN(value) || value.includes(" ")) {
            console.log("Error: Input value is not a number");
            const sanitizedValue = value.slice(0, -1); // Remove the last character
            setInputAmount(sanitizedValue);
        } else {
            setInputAmount(value);
        }
    };

    const handleAddBtnPress = () => {
        const amount = inputAmount.trim() === "" ? 0 : inputAmount;

        console.log(senderValue, amount, receiverValue);
        if (receiver == null || sender == null)
            return

        //{----- Check and Update new account (money source) here -----}

        let dateFormat = new Date(Date.now());
        let date = `${dateFormat.getDate()}/${dateFormat.getMonth() + 1}/${dateFormat.getFullYear()}`;
        let transfer = {
            id: String(Math.floor(Date.now() / 100)),
            sender: sender.label,
            receiver: receiver.label,
            senderId: sender.value,
            receiverId: receiver.value,
            amount: Number(amount),
            date: date
        };

        if ((transfer.amount > sender.amount)) {
            console.log("Error");
            return;
        }

        addNewTransfer(transfer)
        processTransferMoney(transfer);
        addBtnOnPress(); //This is for navigating back to Account Page



        //console.log(transfer);
    };

    const renderErrorMessage = () => {
        if (sender !== null)
            if (inputAmount !== '' && inputAmount <= 0)
                return <Text style={styles.errorText}>Transfer amount has to be more than 0.</Text>;
            else
                if (inputAmount > sender.amount) {
                    return <Text style={styles.errorText}>Transfer amount exceeds the available budget.</Text>;
                }
                else
                    return null;
    };

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
                    placeholderStyle={{ color: "grey" }}
                    onOpen={onSenderOpen}
                    onSelectItem={handleSelectSender}
                    onClose={onSenderClose}
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
                {renderErrorMessage()}
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
                    placeholderStyle={{ color: "grey" }}
                    onOpen={onReceiverOpen}
                    onSelectItem={handleSelectReceiver}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addButton} onPress={handleAddBtnPress}>
                    <Text style={styles.addButtonText}>{btnName}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default InputTransfer;
