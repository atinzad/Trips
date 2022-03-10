import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { VStack } from "native-base";

const ProfileView = ({ user }) => {
  console.log("user", user);
  return (
    <VStack>
      <Text>{user.username}</Text>
      <Text>{user.firstName}</Text>
      <Text>{user.lastName}</Text>
      <Text>{user.email}</Text>
    </VStack>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "center",
  },
  username: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 30,
  },
  firstName: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 30,
  },
  lastName: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 30,
  },
  email: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 30,
  },
});
