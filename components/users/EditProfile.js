import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";

const EditProfile = ({ isOpenModal, setIsOpenModal }) => {
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
        <View style={styles.container}>
          <Text>Hi this is a Modal</Text>
          <Button onPress={() => setIsOpenModal(false)}> close me</Button>
        </View>
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
});
