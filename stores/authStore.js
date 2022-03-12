import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    try {
      const decodedToken = decode(token);
      this.user = decodedToken;
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      return this.user;
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  signup = async (user, navigation) => {
    try {
      const res = await instance.post("/users/signup", user);
      const { token } = res.data;

      await this.setUser(token);
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
      const res2 = await this.setUser(token);
      if (!res2) {
        Alert.alert(
          "Authentication failed",
          "username or password is incorrect",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }]
        );
      } else {
        navigation.navigate("Home");
      }
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
