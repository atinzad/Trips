import { StyleSheet, Text, View } from "react-native";
import React from "react";
import testStore from "../stores/testStore";
import { Button } from "native-base";
import { observer } from "mobx-react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button style={styles.btn} onPress={() => navigation.navigate("Explore")}>
        Explore
      </Button>
      <Button style={styles.btn} onPress={() => navigation.navigate("Profile")}>
        Profile
      </Button>
    </View>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    margin: 5,

    width: 120,
  },
});
