import { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const AddMoneyPage = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
      </View>
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
});
