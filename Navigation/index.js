import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Signup from "../components/authentication/Signup";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Signup">
      <Screen name="Home" component={Home} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
