import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      //   console.log(token);
      // localStorage.setItem("token", token);
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  signup = async (user, navigation) => {
    try {
      const res = await instance.post("/users/signup", user);
      const { token } = res.data;
      //   localStorage.setItem("token", token);

      await this.setUser(token);
      navigation.replace("Home");

      //   console.log(token);
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
