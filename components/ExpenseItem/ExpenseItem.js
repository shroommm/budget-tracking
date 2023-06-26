import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export function ExpenseItem({ item }) {
  return (
    <TouchableOpacity
      style={{
        ...styles.root,
        // borderStyle: "solid",
        // borderColor: "#828282",
        // borderWidth: 5,
        // borderRadius: 10,
      }}
    >
      <View style={styles.info}>
        <Text style={styles.groceryShopping}>{item.category}</Text>
        <Text style={styles.$22July$2021}>{item.date}</Text>
      </View>
      <Text
        style={{
          ...styles.$30049,
          color: item.type === "expense" ? "#f22727" : "green",
        }}
        numberOfLines={1}
      >{`${item.cost.toLocaleString()} VND`}</Text>
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
  },
});
