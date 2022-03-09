import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { HStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Observer } from "mobx-react";

const SigninButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable>
      <HStack>
        <Text
          onPress={() => navigation.navigate("Signin")}
          style={styles.signText}
        >
          Signin
        </Text>
        <FontAwesome
          style={styles.icon}
          name="sign-in"
          size={30}
          color="black"
          onPress={() => navigation.navigate("Signin")}
        />
      </HStack>
    </Pressable>
  );
};

export default SigninButton;

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
  signText: {
    fontSize: 20,
  },
});
