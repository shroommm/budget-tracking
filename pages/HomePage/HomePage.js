import { useState } from "react";

import {
  View,
  Text,

  FlatList,
  StyleSheet,
} from "react-native";

import ExpenseItem from "../../components/ExpenseItem/ExpenseItem";
import expenseItemListData from "../../data/ExpenseItemListData";

const HomePage = ({ navigation }) => {
  let [isExpenseView, setIsExpenseView] = useState(true);

  return (
    <View>
      <Text style={{ textAlign: "center" }}>Home</Text>
      <View style={styles.root}>
        <Text style={styles.expense}>{`Expense`}</Text>
        <Text style={styles.$5000000}>{`-5.000.000`}</Text>
        <View style={styles.group$79}>
          <Text style={styles.expense}>{`Expense`}</Text>
        </View>
        <View style={styles.group$80}>
          <View style={styles.group$76}></View>
          <Text style={styles.income}>{`Income`}</Text>
        </View>
      </View>

      <View>
        <Text>Categories</Text>
        <View>
          <FlatList
            data={expenseItemListData.data}
            renderItem={({ item }) => <ExpenseItem item={item} />}
            keyExtractor={(item) => item?.cost}
          />
        </View>
      </View>
      {/* <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      /> */}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    borderRadius: 34,
  },
  expense: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: '400',
    textAlign: "center",
    textAlignVertical: "top",
    color: "#313131",
  },
  $5000000: {

    letterSpacing: 1,
    fontSize: 50,
    fontWeight: '400',
    textAlign: "center",
    textAlignVertical: "top",
    color: "#ef5354",
  },
  group$79: {
    flexDirection: "column",
    width: 193,
    height: 51,
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
    fontWeight: '400',
    textAlign: "center",
    textAlignVertical: "top",
    color: "#313131",
  },
});
