import { useState, useRef } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import { MenuBtn, InputTransfer } from "../../components";

import left_icon from "../../asset/icons/left.png";

const EditTransferPage = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <View style={styles.container}>
        <MenuBtn
          iconUrl={left_icon}
          dimension={"70%"}
          handlePress={() => {
            navigation.navigate("Account");
          }}
          style={styles.returnBtn}
        />
        <Text style={styles.title}>Edit transfer</Text>
      </View>

      <InputTransfer
        style={styles.input}
        addBtnOnPress={() => {
          navigation.navigate("Account", { shouldRender: true });
        }}
        btnName={'Confirm'}
        inputValue={route}
      />
    </SafeAreaView>
  );
};

export default EditTransferPage;

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
