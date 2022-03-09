import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const SignoutButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable>
      <HStack>
        <Text
          onPress={() => authStore.signout(navigation)}
          style={styles.signText}
        >
          Signout
        </Text>
        <FontAwesome
          style={styles.icon}
          name="sign-out"
          size={30}
          color="black"
          onPress={() => authStore.signout(navigation)}
        />
      </HStack>
    </Pressable>
  );
};

export default SignoutButton;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
  signText: {
    fontSize: 20,
  },
});
