import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
