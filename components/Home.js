import { StyleSheet, Text, View } from "react-native";
import React from "react";
import testStore from "../stores/testStore";

const Home = () => {
  console.log(testStore.users);
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
