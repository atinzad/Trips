import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Divider, HStack, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import EditProfile from "./EditProfile";
import authStore from "../../stores/authStore";

import { Feather } from "@expo/vector-icons";

import { observer } from "mobx-react";
import profileStore from "../../stores/profileStore";
import TripListProfile from "./TripListProfile";

const ProfileDetails = ({ route }) => {
  const { user } = route.params;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(true);
  };
  const [profile, setProfile] = useState(
    profileStore.getProfileFromId(user.profile)
  );

  return (
    <VStack style={styles.container}>
      <HStack style={styles.topContainer}>
        <VStack>
          {profile.image === "" ? (
            <FontAwesome name="user-circle-o" size={90} color="black" />
          ) : (
            <Avatar
              bgColor="white"
              style={styles.pic}
              size="xl"
              source={{
                uri: profile.image,
              }}
            ></Avatar>
          )}
          {user._id === authStore.user._id && (
            <Feather
              onPress={handleModal}
              style={styles.icon}
              name="edit"
              size={30}
              color="black"
            />
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
      <Text style={styles.bio}>bio: {profile.bio}</Text>
      <Divider my="3" />
      <View style={styles.line} />
      <View style={styles.trips}>{<TripListProfile user={user} />}</View>
      <EditProfile
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        profile={profile}
        setProfile={setProfile}
      />
    </VStack>
  );
};

export default observer(ProfileDetails);

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
  icon: {
    left: 30,
    top: 15,
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
    right: 2,
    padding: 0,
  },
});
