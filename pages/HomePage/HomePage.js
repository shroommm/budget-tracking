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

import ExpenseItem from "../../components/ExpenseItem/ExpenseItem";

import { BottomMenu } from "../../components";
import { getExpenses, getIncomes, initializeSampleDataSetSyncStorage } from "../../utils/DataHandler";


const HomePage = ({ navigation,route }) => {
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

  let [isExpenseView, setIsExpenseView] = useState(true);
  let expenses = getExpenses();
  let incomes = getIncomes();
  // let expenses = null;
  // let incomes = null;

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
            ? "-" + expensesSum.toLocaleString()
            : "+" + incomesSum.toLocaleString()) + " VND"}
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
            keyExtractor={(item) => item?.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
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
});
