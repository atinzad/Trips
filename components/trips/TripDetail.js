import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Button, HStack, VStack } from "native-base";
import { observer } from "mobx-react";
import { AntDesign } from "@expo/vector-icons";
import RemoveTripButton from "../Button/RemoveTripButton";
import EditTripButton from "../Button/EditTripButton";
import tripStore from "../../stores/tripStore";
import { useNavigation } from "@react-navigation/native";
import authStore from "../../stores/authStore";

const TripDetail = ({ route }) => {
  const { trip } = route.params;

  const navigation = useNavigation();

  const handleDelete = () => {
    tripStore.deleteTrip(trip._id);
    navigation.navigate("Explore");
  };

  const handleUpdate = () => {
    tripStore.updateTrip(trip);
    navigation.navigate("Explore");
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
      <Text style={styles.owner}>Trip by: {trip.owner.username}</Text>
      <Text style={styles.description}>{trip.description}</Text>
      {authStore.user && authStore.user._id === trip.owner._id && (
        <HStack style={styles.icon}>
          <RemoveTripButton handleDelete={handleDelete}></RemoveTripButton>
          <EditTripButton></EditTripButton>
        </HStack>
      )}
    </VStack>
  );
};

export default TripDetail;

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
});
