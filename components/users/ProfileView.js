import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Divider, HStack, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import EditProfile from "./EditProfile";
import authStore from "../../stores/authStore";

const ProfileView = ({ user }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(true);
  };
  return (
    <VStack style={styles.container}>
      <HStack style={styles.topContainer}>
        <VStack>
          <Avatar
            bgColor="white"
            style={styles.pic}
            size="xl"
            source={{
              // uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
              uri: "",
            }}
          >
            <FontAwesome name="user-circle-o" size={90} color="black" />
          </Avatar>
          {user === authStore.user && (
            <Button onPress={handleModal}>Edit Profile</Button>
          )}
        </VStack>
        <VStack style={styles.userContainer}>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.firstName}>
            First Name: {"   "}
            {user.firstName}
          </Text>
          <Text style={styles.lastName}>
            Last Name:{"   "} {user.lastName}
          </Text>
          <Text style={styles.email}>
            Email: {"   "}
            {user.email}
          </Text>
        </VStack>
      </HStack>
      <Text style={styles.bio}>
        bio: {"   "}
        {"this is the bio"}
      </Text>
      <Divider my="3" />
      <View style={styles.line} />
      <Text style={styles.trips}>
        Trips: {"   "}
        {"this is the trips"}
      </Text>
      <EditProfile isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </VStack>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "flex-start",
    alignContent: "center",
  },
  topContainer: {
    flex: 2,
    marginTop: 15,
    marginLeft: 8,
    marginRight: 8,
    borderWidth: 3,
    borderRadius: 20,
    padding: 5,
    borderColor: "gray",
  },
  pic: {
    backgroundColor: "white",
  },
  userContainer: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 20,
    fontWeight: "bold",
    left: "20%",
  },
  firstName: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 18,
  },
  lastName: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 18,
  },
  email: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 18,
  },
  bio: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 18,
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
  },
  trips: {
    flex: 6,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 18,
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
  },
});
