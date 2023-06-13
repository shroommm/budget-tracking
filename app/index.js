import { Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage";

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
        {/* <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShadowVisible: false,
            headerShown: false,
            headerTitle: "",
          }}
        /> */}
        <Stack.Screen
          name="MenuPage"
          component={MenuPage}
          options={{
            headerShadowVisible: false,
            headerShown: false,
            headerTitle: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Home;
