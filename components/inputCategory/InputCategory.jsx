import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";

import styles from "../inputAccount/inputAccount.style";
import DropDownPicker from "react-native-dropdown-picker";
import { addNewCategory, pause } from "../../utils/DataHandler";

const InputCategory = ({ style, addBtnOnPress }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("income");
  const [items, setItems] = useState([
    { label: "Income", value: "income" },
    { label: "Expense", value: "expense" },
  ]);

  const [inputAmount, setInputAmount] = useState("");
  const [inputName, setInputName] = useState("");

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

  const handleAddBtnPress = async () => {
    let category = {
      id: Math.floor(Date.now() / 100),
      name: inputName,
      usefor: value,
    };

    addNewCategory(category);
    // await pause(1000);
    addBtnOnPress();
    // console.log(forceUpdate)

  };

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
        <Text style={styles.contextInput}>Use for</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          placeholder="Income"
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(value) => {
            console.log(value);
          }}
        />
      </View>
      <View style={[styles.buttonContainer, { marginTop: 70 }]}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddBtnPress}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputCategory;
