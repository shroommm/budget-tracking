import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export function ExpenseItem({ item }) {
  return (
    <View style={styles.root}>
      <View style={styles.info}>
        <Text style={styles.groceryShopping}>{item.category}</Text>
        <Text style={styles.$22July$2021}>{item.date}</Text>
      </View>
      <Text
        style={{
          ...styles.$30049,
          color: item.type === "expense" ? "#ef5354" : "green",
        }}
        numberOfLines={1}
      >{`${item.cost.toLocaleString()} VND`}</Text>
    </View>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
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
