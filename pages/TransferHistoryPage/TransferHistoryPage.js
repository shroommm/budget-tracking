import { useState, useRef } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import { MenuBtn, TransferHistory } from "../../components";

import left_icon from "../../asset/icons/left.png"

const TransferHistoryPage = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>

      <View style={styles.container}>
        <MenuBtn
          iconUrl={left_icon}
          dimension={'70%'}
          handlePress={() => { navigation.navigate("Account") }}
          style={styles.returnBtn}
        />
        <Text style={styles.title}>Transfer history</Text>
      </View>

      <TransferHistory/>
    </SafeAreaView>
  );
};

export default TransferHistoryPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
  },
  returnBtn: {
    position: 'absolute',
    height: 40,
    width: 40,
    top: 22,
    left: '4%',
  },
  input: {
    marginTop: 20,
  },
});
