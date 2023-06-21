import { useState, useRef } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { MenuBtn, InputCategory } from "../../components";

import left_icon from "../../asset/icons/left.png";

const AddCategoryPage = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <View style={styles.container}>
        <MenuBtn
          iconUrl={left_icon}
          dimension={"70%"}
          handlePress={() => {
            navigation.goBack();
          }}
          style={styles.returnBtn}
        />
        <Text style={styles.title}>Add new category</Text>
      </View>

      <InputCategory
        style={styles.input}
        addBtnOnPress={() => {
          navigation.navigate("Categories", { shouldRender: true });
        }}
      />
    </SafeAreaView>
  );
};

export default AddCategoryPage;

const styles = StyleSheet.create({
  container: {
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
    marginTop: 20,
  },
});
