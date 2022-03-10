import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileView from "./ProfileView";
import authStore from "../../stores/authStore";

const Profile = ({ navigation }) => {
  user = authStore.user;
  return (
    <View style={styles.container}>
      {user ? <ProfileView user={user} /> : navigation.replace("Signin")}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
