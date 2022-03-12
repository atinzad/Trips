import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { Button, HStack, VStack } from "native-base";
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user, navigation);
  };

  const passwordInput = useRef();
  return (
    <VStack style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Signin</Text>
      <VStack>
        <Text style={styles.title}>Username:</Text>
        <TextInput
          placeholder="username"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordInput.current.focus();
          }}
          style={styles.input}
          onChangeText={(value) => setUser({ ...user, username: value })}
        />
      </VStack>
      <VStack>
        <Text style={styles.title}>Password:</Text>
        <TextInput
          ref={passwordInput}
          placeholder="Password"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          style={styles.input}
          secureTextEntry
          onChangeText={(value) => setUser({ ...user, password: value })}
        />
      </VStack>
      <Button colorScheme="blue" onPress={handleSubmit}>
        Signin
      </Button>
      <HStack style={{ margin: 10 }}>
        <Text>Not a user? </Text>
        <Pressable>
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ fontWeight: "bold" }}
          >
            Signup
          </Text>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default Signin;

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
