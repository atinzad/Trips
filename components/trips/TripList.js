import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import { Center, HStack, ScrollView, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import authStore from "../../stores/authStore";

const TripList = ({ navigation }) => {
  const trips = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <VStack>{trips}</VStack>
      {authStore.user && (
        <Ionicons
          style={styles.icon}
          name="add-circle-outline"
          size={70}
          color="black"
          onPress={() => navigation.navigate("AddTrip")}
        />
      )}
    </ScrollView>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  icon: {
    left: "42%",
  },
});
