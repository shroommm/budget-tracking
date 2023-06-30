import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Alert
} from "react-native";

import ExpenseItem from "../../components/ExpenseItem/ExpenseItem";

import { BottomMenu } from "../../components";
import {
  getAccounts,
  getExpenses,
  getIncomes,
  initializeSampleDataSetSyncStorage,
} from "../../utils/DataHandler";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect } from "react";

const HomePage = ({ navigation, route }) => {
  //Force render page start
  const [refreshKey, setRefreshKey] = useState(0);
  const forceRender = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };
  if (route.params?.shouldRender) {
    forceRender();
    route.params.shouldRender = false;
  }
  //Force render page end

  let accounts = getAccounts();
  // useEffect(() => {
  //   accounts = getAccounts();

  //   accounts = accounts.map((account) => {
  //     return {
  //       id: account.id,
  //       label: account.name,
  //       value: account.id,
  //       amount: account.amount,
  //     };
  //   });
  //   setAccount(accounts[0]);
  //   setAccountsItems(accounts)
  // },[accounts])
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      console.log("screen is focused");
      accounts = getAccounts();
      accounts = accounts.map((account) => {
        return {
          id: account.id,
          label: account.name,
          value: account.id,
          amount: account.amount,
        };
      });
      setAccount(accounts.length > 0 ? accounts[0] : null);
      setAccountsItems(accounts);

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log("screen are not focused");
      };
    }, [])
  );

  accounts = accounts.map((account) => {
    return {
      id: account.id,
      label: account.name,
      value: account.id,
      amount: account.amount,
    };
  });
  const [account, setAccount] = useState(
    accounts.length > 0 ? accounts[0] : null
  );

  const [accountOpen, setAccountOpen] = useState(false);
  const [accountValue, setAccountValue] = useState(null);
  const [accountItems, setAccountsItems] = useState(accounts);

  let [isExpenseView, setIsExpenseView] = useState(true);
  let expenses = getExpenses();
  let incomes = getIncomes();
  expenses = expenses.filter((expense) => expense.accountId == account?.id);
  incomes = incomes.filter((expense) => expense.accountId == account?.id);
  const expensesSum = expenses.reduce(
    (accumulator, item) => accumulator + item.cost,
    0
  );
  const incomesSum = incomes.reduce(
    (accumulator, item) => accumulator + item.cost,
    0
  );
  const getAmountOfAccount = (id) => {
    let accounts = getAccounts();
    let account = accounts.find((account) => account?.id === id);
    return account ? account.amount : 0;
  };

  const handleSelectAccountItem = (account) => {
    setAccount(account);
  };

  if (!account) {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: 40, paddingBottom: 60 }}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>
          See you again!
        </Text>
        <BottomMenu
          menuOnPress={() => {
            navigation.navigate("Menu", {
              setAccountHomePage: setAccount,
            });
          }}
        />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: isExpenseView ? "#f7e9e9" : "#e9f7e9",
      }}
    >
      <StatusBar animated={true} backgroundColor="#61dafb" />
      {/* <Text style={{ textAlign: "center" }}>Home</Text> */}
      <View style={{ paddingHorizontal: 20, zIndex: 30 }}>
        <View style={[styles.inputContainer, { zIndex: 30 }]}>
          <Text style={styles.contextInput}>Account</Text>
          <DropDownPicker
            open={accountOpen}
            value={accountValue}
            items={accountItems}
            setOpen={setAccountOpen}
            setValue={setAccountValue}
            setItems={setAccountsItems}
            style={styles.picker}
            dropDownContainerStyle={styles.picker}
            placeholder={account.label}
            placeholderStyle={{ color: "grey" }}
            // onOpen={onReceiverOpen}
            onSelectItem={handleSelectAccountItem}
          />
          <Text
            style={{
              ...styles.$5000000,
              paddingTop: 10,
              color: "black",
              zIndex: -1,
            }}
          >
            {getAmountOfAccount(account.id).toLocaleString() + " VND"}
          </Text>
        </View>
      </View>

      <View
        style={{
          ...styles.root,
          overflow: "hidden",
          shadowColor: "rgba(0, 0, 0, 0.67)",
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.5,
          shadowRadius: 15,
          elevation: 7,
          marginHorizontal: 10,
          paddingTop: 30,
          marginTop: 15,
          height: 203,
          flexShrink: 0,
          borderStyle: "solid",
          borderColor: "#828282",
          borderWidth: 1,
        }}
      >
        <Text style={styles.expenseHeader}>
          {isExpenseView ? "Expense" : "Income"}
        </Text>
        <Text
          style={{
            ...styles.$5000000,
            paddingBottom: 28,
            paddingTop: 20,
            marginBottom: 2,
            fontSize: 40,
            color: isExpenseView ? "#eb3f3f" : "#209639",
          }}
        >
          {(isExpenseView
            ? "-" + expensesSum.toLocaleString()
            : "+" + incomesSum.toLocaleString()) + " VND"}
        </Text>
        <View style={styles.expenseButton}>
          <TouchableOpacity
            style={{
              ...styles.group$79,
              width: "50%",
              backgroundColor: "#ffe3e0",
              borderTopColor: isExpenseView ? "red" : "",
              borderTopWidth: isExpenseView ? 5 : 0,
            }}
            onPress={() => {
              setIsExpenseView(true);
            }}
          >
            <Text style={styles.expense}>{`Expense`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.group$80,
              width: "50%",
              backgroundColor: "#d9ffdb",
              borderTopColor: isExpenseView ? "" : "green",
              borderTopWidth: isExpenseView ? 0 : 5,
            }}
            onPress={() => {
              setIsExpenseView(false);
            }}
          >
            <Text style={styles.income}>{`Income`}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 30 ,flex:1 }}>
        <FlatList
          style={{
            height: 1000,
            flexGrow: 0,
            backgroundColor: isExpenseView ? "#f7e9e9" : "#e9f7e9",
          }}
          data={isExpenseView ? expenses : incomes}
          renderItem={({ item }) => (
            <ExpenseItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item?.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomMenu
        menuOnPress={() => {
          navigation.navigate("Menu", {
            setAccountHomePage: setAccount,
          });
        }}
        addItemOnPress={() => {
          navigation.navigate("AddMoney");
        }}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    borderRadius: 34,
    backgroundColor: "#ffffff",
  },
  expense: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "top",
    fontWeight: "bold",
    color: "#4f4f4f",
  },
  expenseHeader: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "top",
    color: "#545454",
  },
  expenseButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  $5000000: {
    letterSpacing: 1,
    fontSize: 35,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "top",
    color: "#ef5354",
  },
  group$79: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  group$80: {
    flexDirection: "column",
    paddingVertical: 10,
  },
  group$76: {
    flexDirection: "column",
  },
  income: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "top",
    color: "#313131",
  },
  inputContainer: {
    paddingVertical: 15,
    zIndex: 10,
  },
  contextInput: {
    marginBottom: 3,
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
    zIndex: 999,
  },
});
