import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import { HStack, VStack } from "native-base";

const TripList = () => {
  const trips = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} />
  ));

  return <VStack style={styles.container}>{trips}</VStack>;
};

export default observer(TripList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-start",
  },
});
