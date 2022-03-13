import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import { observer } from "mobx-react";
import { AntDesign } from "@expo/vector-icons";
import RemoveTripButton from "../Button/RemoveTripButton";
import EditTripButton from "../Button/EditTripButton";
import tripStore from "../../stores/tripStore";
import { useNavigation } from "@react-navigation/native";
import authStore from "../../stores/authStore";
import EditTrip from "./EditTrip";

const TripDetail = ({ route }) => {
  // const { trip } = route.params;
  const [trip, setTrip] = useState(route.params.trip);

  const navigation = useNavigation();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = () => {
    setIsOpenModal(true);
  };

  const handleDelete = () => {
    tripStore.deleteTrip(trip._id);
    navigation.navigate("Explore");
  };

  const handleProfileView = () => {
    navigation.navigate("ProfileDetails", { user: trip.owner });
  };

  return (
    <VStack style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: trip.image,
        }}
      />
      <Text style={styles.title}>{trip.title}</Text>
      <HStack>
        <Text style={styles.owner}>Trip by: </Text>
        <Button onPress={handleProfileView} style={styles.btn}>
          {trip.owner.username}
        </Button>
      </HStack>
      <Text style={styles.description}>{trip.description}</Text>
      {authStore.user && authStore.user._id === trip.owner._id && (
        <HStack style={styles.icon}>
          <RemoveTripButton handleDelete={handleDelete}></RemoveTripButton>
          <EditTripButton handleModal={handleModal}></EditTripButton>
        </HStack>
      )}
      <EditTrip
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        trip={trip}
        setTrip={setTrip}
      />
    </VStack>
  );
};

export default observer(TripDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    flex: 6,
    width: Dimensions.get("window").width,
    height: "90%",
  },
  title: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 30,
  },
  owner: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 20,
  },
  description: {
    flex: 6,
    width: Dimensions.get("window").width,
    height: "100%",
    fontSize: 20,
  },
  icon: {
    right: "13%",
  },
  btn: {
    right: 250,
  },
});
