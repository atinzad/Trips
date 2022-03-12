import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RemoveTripButton = ({ handleDelete }) => {
  const navigation = useNavigation();

  return (
    <View>
      <AntDesign
        style={styles.icon}
        name="delete"
        size={50}
        color="black"
        onPress={() =>
          Alert.alert("Remove", "Are you sure you want to delete this trip?", [
            { text: "OK", onPress: handleDelete },
            { text: "cancel" },
          ])
        }
      />
    </View>
  );
};

export default RemoveTripButton;

const styles = StyleSheet.create({
  icon: {
    left: "450%",
    bottom: 20,
  },
});
