import { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import {
  BottomBack,
  BottomMenu,
  AccountTotal,
  AccountDetail,
} from "../../components";

const AccountPage = ({ navigation, route }) => {
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

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <View style={styles.container}>
        <Text>Account Page</Text>
      </View>

      <AccountTotal
        historyOnPress={() => {
          navigation.navigate("TransferHistory");
        }}
        newTransferOnPress={() => {
          navigation.navigate("AddTransfer");
        }}
      />

      <AccountDetail style={{ paddingBottom: 60 }} navigation={navigation} />

      {/* <BottomBack
        menuOnPress={() => {
          navigation.navigate("Home");
        }}
      /> */}
      <BottomMenu
        menuOnPress={() => {
          navigation.navigate("Menu");
        }}
        addItemOnPress={() => {
          navigation.navigate("AddPaymentMethod");
        }}
      />
    </SafeAreaView>
  );
};

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 30,
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
