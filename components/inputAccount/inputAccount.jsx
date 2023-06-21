import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";

import styles from "./inputAccount.style";
import { addAccount } from "../../utils/DataHandler";

const InputAccount = ({ style, addBtnOnPress }) => {
    const [inputAmount, setInputAmount] = useState('');
    const [inputName, setInputName] = useState('');

    const nameInputRef = useRef(null);
    const amountInputRef = useRef(null);

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

    const handleNameChange = (event) => {
        const value = event.nativeEvent.text;

        setInputName(value)
    }

    const handleAddBtnPress = () => {
        const name = inputName;
        const amount = inputAmount.trim() === ''? 0 : inputAmount;

        // Check if the name input is empty
        const isEmpty = name.trim() === '';

        console.log(name, amount, isEmpty);

        //{----- Check and Update new account (money source) here -----}
        let account = {
            id: String(Math.floor(Date.now() / 100)),
            name:inputName,
            amount:Number(amount)
        }

 
        addAccount(account)
        addBtnOnPress();
    }

    return (
        <View style={[styles.container, style]}>
            <View style={styles.inputContainer}>
                <Text style={styles.contextInput}>Name</Text>
                <TextInput
                    style={styles.searchInput}
                    onChange={handleNameChange}
                    ref={nameInputRef}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.contextInput}>Starting amount</Text>
                <TextInput
                    style={styles.searchInput}
                    value={inputAmount}
                    onChange={handleAmountChange}
                    keyboardType="numeric"
                    ref={amountInputRef}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={handleAddBtnPress}
                >
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default InputAccount;