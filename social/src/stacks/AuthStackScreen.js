import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

export default function AuthStackScreen() {
  const AuthStack = createStackNavigator();
  return <AuthStack.Navigator headerMode="none"></AuthStack.Navigator>;
}
