import { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { Input } from "@rneui/themed";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { BottomMenu, MenuBtn } from "../../components";
import DropDownPicker from "react-native-dropdown-picker";
import left_icon from "../../asset/icons/left.png";
import {
  addMoneyUse,
  getAccounts,
  getCategories,
  getExpenseCategories,
  getIncomeCategories,
} from "../../utils/DataHandler";
import { convertDateInAddMoney } from "../../utils/DateConverter";

const AddMoneyPage = ({ navigation }) => {
  //getData
  let accounts = getAccounts();
  let expenseCategories = getExpenseCategories();
  let incomeCategories = getIncomeCategories();

  accounts = accounts.map((account) => {
    return {
      label: account.name,
      value: account.id,
      amount: account.amount,
    };
  });

  expenseCategories = expenseCategories.map((category) => {
    return {
      label: category.name,
      value: category.id,
    };
  });

  incomeCategories = incomeCategories.map((category) => {
    return {
      label: category.name,
      value: category.id,
    };
  });

  const [inputValue, setInputValue] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isExpense, setIsExpense] = useState(true);

  const [category, setCategory] = useState(null);
  const [account, setAccount] = useState(null);

  const [accountOpen, setAccountOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const [accountValue, setAccountValue] = useState(null);
  const [categoryValue, setCategoryValue] = useState(null);

  const [accountItems, setAccountsItems] = useState(accounts);
  const [categoryItems, setCategoryItems] = useState(
    isExpense ? expenseCategories : incomeCategories
  );

  const handleInputChange = (text) => {
    // Remove any non-numeric characters from the input value
    const numericValue = text.replace(/[^0-9]/g, "");
    setInputValue(numericValue);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  const handleSelectAccount = (account) => {
    setAccount(account);
  };
  const handleSelectCategory = (category) => {
    setCategory(category);
  };

  const handleAddMoneyUse = () => {
    console.log(inputValue);

    if (inputValue === '' || accountValue === null || accountValue === null)
      return;

    let moneyUse = {
      id: String(Date.now()),
      category: category.label,
      categoryId: categoryValue,
      accountId: accountValue,
      account: account.label,
      date: String(date),
      cost: Number(inputValue),
      type: isExpense ? "expense" : "income",
    };

    addMoneyUse(moneyUse);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <View style={styles.containerReturnBtn}>
        <MenuBtn
          iconUrl={left_icon}
          dimension={"70%"}
          handlePress={() => {
            navigation.navigate("Home", { shouldRender: true });
          }}
          style={styles.returnBtn}
        />
        <Text style={styles.title}>Add money use</Text>
      </View>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#94C3F6",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 15,
            padding: 10,
            backgroundColor: "#94C3F6",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={handleInputChange}
            placeholder="Enter money"
            keyboardType="numeric"
          />
          <Text style={{ fontSize: 30 }}>VND</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 15,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              width: "50%",
              backgroundColor: isExpense ? "#F89999" : null,
              borderRadius: 15,
              paddingVertical: 8,
              borderWidth: 2, // Adjust the border width as desired
              borderColor: "#FE4848",
            }}
            onPress={() => {
              setIsExpense(true);
              setCategoryItems(expenseCategories);
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Expense
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              width: "50%",
              backgroundColor: !isExpense ? "#A9F4A7" : null,
              borderRadius: 15,
              paddingVertical: 8,
              borderWidth: 2, // Adjust the border width as desired
              borderColor: "#009900",
            }}
            onPress={() => {
              setIsExpense(false);
              setCategoryItems(incomeCategories);
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Income
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            gap: 30,
          }}
        >
          <View>
            <Text>{convertDateInAddMoney(date)}</Text>
          </View>

          <View>
            <Button title="Choose date" onPress={showDatePicker} />
            <DateTimePickerModal
              value={date}
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>

        <View style={[styles.inputContainer, { zIndex: 30 }]}>
          <Text style={styles.contextInput}>Method</Text>
          <DropDownPicker
            open={accountOpen}
            value={accountValue}
            items={accountItems}
            setOpen={setAccountOpen}
            setValue={setAccountValue}
            setItems={setAccountsItems}
            style={styles.picker}
            dropDownContainerStyle={styles.picker}
            placeholder="Select the source"
            placeholderStyle={{ color: "grey" }}
            // onOpen={onReceiverOpen}
            onSelectItem={handleSelectAccount}
          />
        </View>
        <View style={[styles.inputContainer, { zIndex: 20 }]}>
          <Text style={styles.contextInput}>Category</Text>
          <DropDownPicker
            open={categoryOpen}
            value={categoryValue}
            items={categoryItems}
            setOpen={setCategoryOpen}
            setValue={setCategoryValue}
            setItems={setCategoryItems}
            style={styles.picker}
            dropDownContainerStyle={styles.picker}
            placeholder="Select the category"
            placeholderStyle={{ color: "grey" }}
            // onOpen={onReceiverOpen}
            onSelectItem={handleSelectCategory}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "red",
            paddingHorizontal: "10%",
            paddingVertical: 10,
            borderRadius: 15,
          }}
          onPress={handleAddMoneyUse}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      {/* <BottomMenu
        menuOnPress={() => {
          navigation.navigate("Menu");
        }}
        addItemOnPress={null}
      /> */}
    </SafeAreaView>
  );
};

export default AddMoneyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  containerReturnBtn: {
    alignItems: "flex-start",
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {},
  returnBtn: {
    position: "absolute",
    height: 40,
    width: 40,
    top: 22,
    left: "4%",
  },
  input: {
    borderWidth: 1,
    paddingVertical: 10,
    flex: 1,
    borderWidth: 0,
    textAlign: "center",
    fontSize: 30,
    width: "100%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "100%",
    height: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    width: "30%",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  picker: {
    borderWidth: 0,
    backgroundColor: "white",
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 12,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,

    fontSize: 17,
  },
  inputContainer: {
    paddingVertical: 15,
    zIndex: 10,
  },
  contextInput: {
    marginLeft: 10,
    marginBottom: 3,
  },
});
