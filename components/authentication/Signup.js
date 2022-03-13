import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import React, { useRef, useState } from "react";
import { Button, HStack, ScrollView, VStack } from "native-base";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const passwordInput = useRef();
  const emailInput = useRef();
  const firstInput = useRef();
  const lastInput = useRef();

  const handleSubmit = async () => {
    await authStore.signup(user, navigation);
  };

  return (
    <VStack style={styles.container}>
      <KeyboardAvoidingView behavior="position">
        <VStack>
          <Text style={styles.title}>Username:</Text>
          <TextInput
            returnKeyType="next"
            onSubmitEditing={() => {
              passwordInput.current.focus();
            }}
            placeholder="username"
            style={styles.input}
            onChangeText={(username) => setUser({ ...user, username })}
          />
        </VStack>

        <VStack>
          <Text style={styles.title}>Password:</Text>
          <TextInput
            ref={passwordInput}
            returnKeyType="next"
            onSubmitEditing={() => {
              emailInput.current.focus();
            }}
            placeholder="password"
            style={styles.input}
            secureTextEntry
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </VStack>
        <VStack>
          <Text style={styles.title}>Email:</Text>
          <TextInput
            ref={emailInput}
            returnKeyType="next"
            onSubmitEditing={() => {
              firstInput.current.focus();
            }}
            placeholder="email@email.com"
            style={styles.input}
            onChangeText={(email) => setUser({ ...user, email })}
          />
        </VStack>
        <VStack>
          <Text style={styles.title}>firstName:</Text>
          <TextInput
            ref={firstInput}
            returnKeyType="next"
            onSubmitEditing={() => {
              lastInput.current.focus();
            }}
            placeholder="First Name"
            style={styles.input}
            onChangeText={(firstName) => setUser({ ...user, firstName })}
          />
        </VStack>

        <VStack>
          <Text style={styles.title}>LastName:</Text>
          <TextInput
            ref={lastInput}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            placeholder="Last Name"
            style={styles.input}
            onChangeText={(lastName) => setUser({ ...user, lastName })}
          />
        </VStack>
      </KeyboardAvoidingView>
      <Button colorScheme="blue" onPress={handleSubmit}>
        Signup
      </Button>
      <HStack style={{ margin: 10 }}>
        <Text>Already user? </Text>
        <Pressable>
          <Text
            onPress={() => navigation.navigate("Signin")}
            style={{ fontWeight: "bold" }}
          >
            Signin
          </Text>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
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
