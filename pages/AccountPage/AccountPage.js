import { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { BottomMenu } from "../../components";

const AccountPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <View style={styles.container}>
        <Text>Account Page</Text>
      </View>
      <BottomMenu
        menuOnPress={() => {
          navigation.navigate("Menu");
        }}
        addItemOnPress={null}
      />
    </SafeAreaView>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 15,
    paddingVertical: 30,
  },
  textWrapper: {
    backgroundColor: "#94C3F6",
    width: "85%",
    borderRadius: 7,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#535151",
  },
});
