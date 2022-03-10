import { Image, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import { Divider, HStack, VStack } from "native-base";

const TripItem = ({ trip, navigation }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("TripDetail", { trip })}
    >
      <VStack style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: trip.image,
          }}
        />
        <Text>{trip.title}</Text>
      </VStack>
    </Pressable>
  );
};

export default TripItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: "100%",
    height: 80,
  },
});
