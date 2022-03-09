import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Signup from "../components/authentication/Signup";
import Signin from "../components/authentication/Signin";
import Test from "../components/Test";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Test" component={Test} />
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
