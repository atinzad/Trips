import { RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import tripStore from "../../stores/tripStore";
import TripItem from "../trips/TripItem";
import { observer } from "mobx-react";
import { Center, HStack, ScrollView, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";

const TripListProfile = ({ user }) => {
  const navigation = useNavigation();

  const trips = tripStore.trips
    .filter((trip) => trip.owner._id === user._id)
    .map((trip) => (
      <TripItem key={trip._id} trip={trip} navigation={navigation} />
    ));

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View>{trips}</View>
    </ScrollView>
  );
};

export default observer(TripListProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  trips: {
    flex: 8,
  },
  icon: {
    top: "1%",
    left: "42%",
  },
  iconContainer: {
    flex: 1,
  },
});
