import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import authStore from "../stores/authStore";

const Test = ({ navigation }) => {
  return (
    <View>
      <Text>Test</Text>
      {!authStore.user && (
        <Button onPress={() => navigation.navigate("Signin")}>Sign in</Button>
      )}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
