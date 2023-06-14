import { Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage";
import AddMoneyPage from "../pages/AddMoneyPage/AddMoneyPage";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";
import AddPaymentMethodPage from "../pages/AddPaymentMethodPage/AddPaymentMethodPage";
import AccountPage from "../pages/AccountPage/AccountPage";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};


const Home = () => {
  return (
    <NavigationContainer
      independent={true}
      screenOptions={{ headerShown: false, headerTitle: "" }}
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={setOption} />
        <Stack.Screen name="Menu" component={MenuPage} options={setOption} />
        {/* <Stack.Screen name="AddMoney" component={AddMoneyPage} options={setOption} /> */}
        {/* <Stack.Screen name="Categories" component={CategoriesPage} options={setOption} /> */}
        {/* <Stack.Screen name="Account" component={AccountPage} options={setOption} /> */}
        {/* <Stack.Screen name="AddPaymentMethod" component={AddPaymentMethodPage} options={setOption} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;