import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 12 / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: 12 / 1.25,
  }),
});

export default styles;
