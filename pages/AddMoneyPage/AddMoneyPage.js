import { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { Input } from "@rneui/themed";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { BottomMenu } from "../../components";

const AddMoneyPage = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const modalComponent = (props) => {
    return (
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    );
  };

  const handleInputChange = (text) => {
    // Remove any non-numeric characters from the input value
    const numericValue = text.replace(/[^0-9]/g, "");
    setInputValue(numericValue);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 25 }}>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            backgroundColor: "#94C3F6",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 15,
            padding: 10,
            backgroundColor: "#94C3F6",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={handleInputChange}
            placeholder="Enter money"
            keyboardType="numeric"
          />
          <Text style={{ fontSize: 30 }}>VND</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 15,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              width: "50%",
              backgroundColor: "#F89999",
              borderRadius: 15,
              paddingVertical: 8,
              borderWidth: 2, // Adjust the border width as desired
              borderColor: "#FE4848",
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Expense
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              width: "50%",
              backgroundColor: "#A9F4A7",
              borderRadius: 15,
              paddingVertical: 8,
              borderWidth: 2, // Adjust the border width as desired
              borderColor: "#009900",
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Income
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            gap: 30,
          }}
        >
          <View>
            <Text>Today 06/14</Text>
          </View>

          <View>
            <Button title="Choose date" onPress={showDatePicker} />

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>

        <View>
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
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            gap: 15,
            marginBottom: 10,
          }}
        >
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Method</Text>
          </Pressable>
          <Text>Cash</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            gap: 15,
            marginBottom: 10,
          }}
        >
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Category</Text>
          </Pressable>
          <Text>Shopping</Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "red",
            paddingHorizontal: "10%",
            paddingVertical: 10,
            borderRadius:15
          }}
        >
          <Text>Add</Text>
        </TouchableOpacity>
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

export default AddMoneyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  input: {
    borderWidth: 1,
    paddingVertical: 10,
    flex: 1,
    borderWidth: 0,
    textAlign: "center",
    fontSize: 30,
    width: "100%",
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
    height: "80%",
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
    width: "30%",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
