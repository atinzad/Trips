import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import { configure } from "mobx";
import profileStore from "./profileStore";

configure({
  enforceActions: "never",
});

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    try {
      const decodedToken = decode(token);
      console.log("decodedToken", decodedToken);
      this.user = decodedToken;
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem("token", token);
      return this.user;
    } catch (error) {
      console.log(error);
    }
  };

  signup = async (user, navigation) => {
    try {
      console.log(user);
      const res = await instance.post("/users/signup", user);
      const { token } = res.data;
      console.log(token);

      await this.setUser(token);
      profileStore.fetchProfiles();

      navigation.replace("Home");
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (user, navigation) => {
    try {
      const res = await instance.post("/users/signin", user);
      const { token } = res.data;

      //   localStorage.setItem("token", token);
      await this.setUser(token);

      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "username or password is incorrect",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
      console.log(error);
    }
  };

  signout = async (navigation) => {
    try {
      // localStorage.removeItem("token");
      await AsyncStorage.removeItem("token");
      this.user = null;
      Alert.alert("Signed out", "See you later", [
        { text: "OK", onPress: () => navigation.navigate("Home") },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        const decodedToken = decode(token);
        console.log(+decodedToken.exp);
        console.log(Date.now());

        if (Date.now() < +decodedToken.exp) {
          await this.setUser(token);
        } else {
          this.signout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
