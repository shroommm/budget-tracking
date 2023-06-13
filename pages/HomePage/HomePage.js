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

import { BottomMenu } from "../../components"

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
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Text style={{ textAlign: "center" }}>Home</Text>
      <View
        style={{
          ...styles.root,
          overflow: "hidden",
          shadowColor: "rgba(0, 0, 0, 0.67)",
          shadowOffset: { width: 10, height: 40 },
          shadowOpacity: 1,
          shadowRadius: 12,
          elevation: 7,
          marginHorizontal: 10,
          paddingTop: 10,
        }}
      >
        <Text style={styles.expense}>
          {isExpenseView ? "Expense" : "Income"}
        </Text>
        <Text
          style={{
            ...styles.$5000000,
            paddingBottom: 28,
            paddingTop: 22,
            color: isExpenseView ? "#ef5354" : "green",
          }}
        >
          {(isExpenseView
            ? expensesSum.toLocaleString()
            : incomesSum.toLocaleString()) + " VND"}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              ...styles.group$79,
              width: "50%",
              backgroundColor: "#EF5354",
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
              backgroundColor: "#A9F4A7",
            }}
            onPress={() => {
              setIsExpenseView(false);
            }}
          >
            <Text style={styles.income}>{`Income`}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <Text>Categories</Text>
        <View>
          <FlatList
            data={isExpenseView ? expenses : incomes}
            renderItem={({ item }) => <ExpenseItem item={item} />}
            keyExtractor={(item) => item?.cost}
          />
        </View>
      </View>
      {/* <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      /> */}

      {/*------ Add events for the 2 buttons: Menu & Add-item ------*/}
      <BottomMenu menuOnPress={null} addItemOnPress={null}/> 
      
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    borderRadius: 34,
    backgroundColor: "#94C3F6",
  },
  expense: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    textAlignVertical: "top",
    color: "#313131",
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
  },
  group$80: {
    flexDirection: "column",
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
});
