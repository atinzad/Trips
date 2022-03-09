import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const Test = ({ navigation }) => {
  return (
    <View>
      <Text>Test</Text>
      {!authStore.user ? (
        <Button onPress={() => navigation.navigate("Signin")}>Sign in</Button>
      ) : (
        <Button onPress={authStore.signout}>Sign Out</Button>
      )}
    </View>
  );
};

export default observer(Test);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
