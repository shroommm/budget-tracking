import { useState } from "react";

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import { Stack } from "expo-router";

import ExpenseItem from "../../components/ExpenseItem/ExpenseItem";
import expenseItemListData from "../../data/ExpenseItemListData";

import { BottomMenu } from "../../components";

const HomePage = ({ navigation }) => {
  let [isExpenseView, setIsExpenseView] = useState(true);
  let expenses = expenseItemListData.data.filter(
    (item) => item.type === "expense"
  );
  let incomes = expenseItemListData.data.filter(
    (item) => item.type === "income"
  );
  const expensesSum = expenses.reduce(
    (accumulator, item) => accumulator + item.cost,
    0
  );
  const incomesSum = incomes.reduce(
    (accumulator, item) => accumulator + item.cost,
    0
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 25,
        backgroundColor: isExpenseView ? "#f7e9e9" : "#e9f7e9",
      }}
    >
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Text style={{ textAlign: "center", marginVertical: 20 }}>Home</Text>

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

      <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <FlatList
          style={{
            height: 1000,
            flexGrow: 0,
            backgroundColor: isExpenseView ? "#f7e9e9" : "#e9f7e9",
          }}
          data={isExpenseView ? expenses : incomes}
          renderItem={({ item }) => <ExpenseItem item={item} />}
          keyExtractor={(item) => item?.cost}
        />
      </View>
      {/* <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      /> */}

      {/*------ Add events for the 2 buttons: Menu & Add-item ------*/}

      <BottomMenu
        menuOnPress={() => {
          navigation.navigate("Menu");
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
  income: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "top",
    color: "#4f4f4f",
    fontWeight: "bold",
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
    height: 100,
    borderTopColor: "green",
    borderTopWidth: 5,
  },
  group$76: {
    flexDirection: "column",
  },
});
