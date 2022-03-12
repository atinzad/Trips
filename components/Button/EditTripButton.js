import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const EditTripButton = () => {
  return (
    <View>
      <Feather style={styles.icon} name="edit" size={50} color="black" />
    </View>
  );
};

export default EditTripButton;

const styles = StyleSheet.create({
  icon: {
    left: "450%",
    bottom: 20,
    marginLeft: 5,
  },
});
