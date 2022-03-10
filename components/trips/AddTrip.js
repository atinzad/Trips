import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import tripStore from "../../stores/tripStore";
import { useNavigation } from "@react-navigation/native";
import { Button, VStack } from "native-base";

const AddTrip = () => {
  const [newTrip, setNewTrip] = useState({
    title: "",
    description: "",
    image: "",
  });

  const navigation = useNavigation();

  const handleSubmit = () => {
    tripStore.addTrip(newTrip);
    navigation.navigate("Explore");
  };

  return (
    <VStack style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Add a trip</Text>
      <VStack>
        <Text style={styles.title}>Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setNewTrip({ ...newTrip, title: value })}
        />
      </VStack>
      <VStack>
        <Text style={styles.title}>Description:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) =>
            setNewTrip({ ...newTrip, description: value })
          }
        />
      </VStack>
      <VStack>
        <Text style={styles.title}>Image:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setNewTrip({ ...newTrip, image: value })}
        />
      </VStack>
      <Button colorScheme="blue" onPress={handleSubmit}>
        Add
      </Button>
    </VStack>
  );
};

export default AddTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 80,
  },

  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 12,
  },
  title: {},
});
