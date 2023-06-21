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
import TransferHistoryPage from "../pages/TransferHistoryPage/TransferHistoryPage";
import AddTransferPage from "../pages/AddTransferPage/AddTransferPage";
import AddCategoryPage from "../pages/AddCategoryPage/AddCategoryPage";
import { useEffect } from "react";
import { initializeSampleDataSetSyncStorage } from "../utils/DataHandler";
import { useState } from "react";
import { useCallback } from "react";
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
const Stack = createNativeStackNavigator();

initializeSampleDataSetSyncStorage();

const Home = () => {
  // Force update component
  const [count, setCount] = useState(0);

  const forceUpdate = () => {

    setCount(count + 1); // Increment the count to trigger a re-render
  };

  const setOption = {
    headerShown: false,
    forceUpdate:forceUpdate
  };

  return (
    <NavigationContainer
      independent={true}
      screenOptions={{ headerShown: false, headerTitle: "" }}
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={setOption} />
        <Stack.Screen name="Menu" component={MenuPage} options={setOption} />
        <Stack.Screen
          name="AddMoney"
          component={AddMoneyPage}
          options={setOption}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesPage}
          options={setOption}
    
        />
        <Stack.Screen
          name="Account"
          component={AccountPage}
          options={setOption}
        />
        <Stack.Screen
          name="AddPaymentMethod"
          component={AddPaymentMethodPage}
          options={setOption}
        />
        <Stack.Screen
          name="AddCategory"
          component={AddCategoryPage}
          options={setOption}


        />
        <Stack.Screen
          name="TransferHistory"
          component={TransferHistoryPage}
          options={setOption}
        />
        <Stack.Screen
          name="AddTransfer"
          component={AddTransferPage}
          options={setOption}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
