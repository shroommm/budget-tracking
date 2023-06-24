import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";

import styles from "./inputAccount.style";
import { addAccount, changeAccount, deleteAccount } from "../../utils/DataHandler";

const InputAccount = ({
  style,
  addBtnOnPress,
  btnName,
  isEdit,
  editAccount,
}) => {
  const [inputAmount, setInputAmount] = useState(
    editAccount ? String(editAccount.amount) : ""
  );
  const [inputName, setInputName] = useState(
    editAccount ? editAccount.name : ""
  );

  const nameInputRef = useRef(null);
  const amountInputRef = useRef(null);

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

  const handleNameChange = (event) => {
    const value = event.nativeEvent.text;

    setInputName(value);
  };

  const handleAddBtnPress = () => {
    const name = inputName;
    const amount = inputAmount.trim() === "" ? 0 : inputAmount;

    // Check if the name input is empty
    const isEmpty = name.trim() === "";
    console.log(name, amount, isEmpty);

    if (name === "") return;

    //{----- Check and Update new account (money source) here -----}
    let account = {
      id: String(Math.floor(Date.now() / 100)),
      name: inputName,
      amount: Number(amount),
    };

    if (inputAmount !== "" && inputAmount <= 0) return;

    addAccount(account);
    addBtnOnPress();
  };

  const handleEditBtnPress = () => {
    const name = inputName;
    const amount = inputAmount.trim() === "" ? 0 : inputAmount;

    // Check if the name input is empty
    const isEmpty = name.trim() === "";
    console.log(name, amount, isEmpty);

    if (name === "") return;

    //{----- Check and Update new account (money source) here -----}
    let account = {
      id: editAccount.id,
      name: inputName,
      amount: Number(amount),
    };

    if (inputAmount !== "" && inputAmount <= 0) return;

    changeAccount(account);
    addBtnOnPress();
  };

  const handleDeleteAccountPress = () => {
    deleteAccount(editAccount.id)
    addBtnOnPress();
  }

  const renderErrorMessage = () => {
    if (inputAmount !== "" && inputAmount <= 0)
      return (
        <Text style={styles.errorText}>
          Starting amount has to be more than 0.
        </Text>
      );
    return null;
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.inputContainer}>
        <Text style={styles.contextInput}>Name</Text>
        <TextInput
          style={styles.searchInput}
          onChange={handleNameChange}
          ref={nameInputRef}
          value={inputName}
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
        {renderErrorMessage()}
      </View>
      <View
        style={[
          styles.buttonContainer,
          isEdit ? { flexDirection: "row", gap:30 } : null,
        ]}
      >
        {isEdit ? (
          <TouchableOpacity
            style={[styles.addButton,{ backgroundColor: "#e33243"}]}
            onPress={handleDeleteAccountPress}
          >
            <Text style={styles.addButtonText}>Delete</Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          style={styles.addButton}
          onPress={isEdit ? handleEditBtnPress : handleAddBtnPress}
        >
          <Text style={styles.addButtonText}>{btnName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputAccount;
