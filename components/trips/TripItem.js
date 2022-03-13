import { Image, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import { Button, Divider, HStack, VStack } from "native-base";
import { View } from "react-native-web";
import { observer } from "mobx-react";

const TripItem = ({ trip, navigation }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("TripDetail", { trip })}
    >
      <VStack style={styles.container}>
        <Image style={styles.shadow} />
        <Image
          style={styles.image}
          source={{
            uri: trip.image,
          }}
        />
        <Text style={styles.title}>{trip.title}</Text>
      </VStack>
    </Pressable>
  );
};

export default observer(TripItem);

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
    height: 200,
    position: "relative",
    borderRadius: 20,
  },
  shadow: {
    position: "absolute",
    width: "100%",
    height: 200,
    backgroundColor: "rgba(0, 0, 0, 0.450)",
    bottom: 10,
    zIndex: 1,
    borderRadius: 20,
  },
  title: {
    position: "absolute",
    color: "white",
    fontSize: 25,
    zIndex: 2,
    fontWeight: "bold",
  },
});
