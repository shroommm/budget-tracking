import { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const MenuPage = ({ navigation, route }) => {
  // let setAccountHomePage = route.params?.setAccountHomePage;

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.textWrapper}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textWrapper}
          onPress={() => navigation.navigate("Categories")}
        >
          <Text style={styles.text}>Categories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textWrapper}
          onPress={() => navigation.navigate("Account")}
        >
          <Text style={styles.text}>Accounts</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={{...styles.textWrapper, marginTop:'auto'}}>
            <Text style={styles.text}>Log Out</Text>
          </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default MenuPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    paddingVertical: 30,
  },
  textWrapper: {
    backgroundColor: "#94C3F6",
    width: "85%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#575757",
    height: "10%",
    justifyContent: "center",
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "#535151",
  },
});
