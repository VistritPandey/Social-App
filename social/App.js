import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import AppStackScreen from "./src/stacks/AppStackScreen";
import SignInScreen from "./src/screens/SignInScreen";

export default function App() {
  return (
    <NavigationContainer>
      <SignInScreen />
    </NavigationContainer>
  );
}
