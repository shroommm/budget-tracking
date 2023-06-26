import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 30,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 40,
    paddingVertical: 10,
    marginTop: 20,
  },
  totalMoney: {
    fontSize: 45,
  },
  totalCurrency: {
    paddingLeft: 10,
    paddingTop: 8,
    fontSize: 30,
    color: "grey",
    alignSelf: "center",
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "14%",
    textAlign: "center",
  },
  btnContext: {
    marginTop: 3,
    fontSize: 10,
    textAlign: "center",
  },
});

export default styles;
