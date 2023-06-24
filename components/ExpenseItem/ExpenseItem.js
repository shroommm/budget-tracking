import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { convertCorrectDate } from "../../utils/DateConverter";

export function ExpenseItem({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => {
        navigation.navigate("EditMoney",{
          editMoneyUse:item
        });
      }}
    >
      <View style={styles.info}>
        <Text style={styles.groceryShopping}>{item.category}</Text>
        <Text style={styles.$22July$2021}>{convertCorrectDate(item.date)}</Text>
      </View>
      <View>
        <Text
          style={{
            ...styles.$30049,
            color: item.type === "expense" ? "#ef5354" : "green",
          }}
          numberOfLines={1}
        >
          {`${item.cost.toLocaleString()} VND`}
        </Text>
        <Text style={{ marginLeft: "auto" }}>{item.account}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
  },
  icon: {
    flexDirection: "column",
    width: 20,
    height: 20,
  },
  info: {
    flexDirection: "column",
  },
  groceryShopping: {
    letterSpacing: 1,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    color: "#303841",
  },
  $22July$2021: {
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    color: "#7d8895",
  },
  $30049: {
    letterSpacing: 1,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
    color: "#ef5354",
  },
});
