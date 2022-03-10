import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { VStack } from "native-base";
import { observer } from "mobx-react";

const TripDetail = ({ route }) => {
  const { trip } = route.params;
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
});
