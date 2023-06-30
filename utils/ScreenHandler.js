import { Alert } from "react-native";

export const showNotification = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: "OK",
        onPress: () => console.log("OK pressed"),
        style: "default",
      },
    ],
    {
      type: "success",
      backgroundColor: "green",
      color: "white",
    }
  );
};
