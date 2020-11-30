import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
export default function AppStackScreen() {
  const AppStack = createStackNavigator();
  return <AppStack.Navigator headerMode="none"></AppStack.Navigator>;
}
