import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import profileStore from "../../stores/profileStore";

const EditProfile = ({ isOpenModal, setIsOpenModal, profile, setProfile }) => {
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleSaveChanges = () => {
    profileStore.updateProfile(updatedProfile);
    setProfile(updatedProfile);
    setIsOpenModal(false);
  };

  return (
    <View>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isOpenModal}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed.");
        }}
      >
        <VStack style={styles.container}>
          <Text style={styles.bio}>Current Bio: {profile.bio}</Text>
          <TextInput
            style={styles.input}
            placeholder={profile.bio}
            onChangeText={(value) =>
              setUpdatedProfile({ ...updatedProfile, bio: value })
            }
          />
          <HStack>
            <Button
              colorScheme="blue"
              style={styles.btn}
              onPress={handleSaveChanges}
            >
              save
            </Button>
            <Button
              colorScheme="blue"
              style={styles.btn}
              onPress={() => setIsOpenModal(false)}
            >
              cancel
            </Button>
          </HStack>
        </VStack>
      </Modal>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignContent: "center",
    top: 200,
  },
  bio: {
    width: Dimensions.get("window").width,
    fontSize: 18,
    marginLeft: 8,
    marginRight: 8,
    padding: 8,
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 12,
  },
  btn: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 12,
  },
});
