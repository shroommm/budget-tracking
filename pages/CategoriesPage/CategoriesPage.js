import { useState, useEffect } from "react";
import { SearchBar } from "@rneui/themed";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import { BottomMenu, BottomBack } from "../../components";
import { getCategories } from "../../utils/DataHandler";
import { Input } from "@rneui/base";
import { useCallback } from "react";

const CategoriesPage = ({ navigation, route }) => {
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

  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  let categories = getCategories();

  const updateSearch = (search) => {
    //Handle search categories

    setSearch(search);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <View style={styles.container}>
        <Text>Categories</Text>
        {/* <View style={[styles.view, { width: "100%" }]}>
          <SearchBar
            inputStyle={{ backgroundColor: "white" }}
            containerStyle={{
              backgroundColor: "white",
              borderRadius: 10,
              borderWidth: 2,
            }}
            inputContainerStyle={{ backgroundColor: "white" }}
            placeholderTextColor={"#g5g5g5"}
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
          />
        </View> */}
        {/* <Text>Click to edit</Text> */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
          }}
        >
          <FlatList
            data={categories}
            renderItem={({ item, index }) => (
              <View
                style={{
                  backgroundColor: "#bfecff",
                  width: "47  %",

                  height: 100,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 5,
                }}
              >
                <Text style={{ fontSize: 25 }}>{item.name}</Text>
              </View>
              // <TouchableOpacity
              //   style={{
              //     backgroundColor: "#bfecff",
              //     width: "47  %",

              //     height: 100,
              //     borderRadius: 10,
              //     alignItems: "center",
              //     justifyContent: "center",
              //     margin: 5,
              //   }}
              //   onPress={() => setModalVisible(true)}
              // >
              //   <Text style={{ fontSize: 25 }}>{item.name}</Text>
              // </TouchableOpacity>
            )}
            // contentContainerStyle={{ paddingHorizontal: 20 }}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ width: "100%" }}>
              <Input
                placeholder="Category name"
                containerStyle={{ width: "100%" }}
                inputStyle={{ width: "100%" }}
              />
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.borderButton}>Close</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  //handle store data
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.borderButton}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* <BottomMenu
        menuOnPress={() => {
          navigation.navigate("Menu");
        }}
        addItemOnPress={() => {
          navigation.navigate("AddCategory");
        }}
      /> */}
      <BottomBack
        menuOnPress={() => {
          navigation.navigate("Home");
        }}
      />
    </SafeAreaView>
  );
};

export default CategoriesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginHorizontal: 10,
    paddingVertical: 30,
    // marginLeft: "auto",
    // marginRight: "auto",
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
  view: {
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: "100%",

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  borderButton: {
    borderWidth: 1, // Border width in pixels
    borderColor: "black", // Border color
    borderRadius: 5, // Border radius in pixels (optional)
    padding: 10, // Padding around the component (optional)
  },
});
