import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";

const TripItem = ({ trip }) => {
  return (
    <VStack style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: trip.image,
        }}
      />
      <Text>{trip.title}</Text>
    </VStack>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
});
