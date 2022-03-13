import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

class UserStore {
  users = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchUsers = async () => {
    try {
      const response = await instance.get("/users");
      this.users = response.data.payload;
    } catch (error) {
      console.log("error");
    }
  };

  getUserFromId = (user_id) => {
    return this.users.find((user) => user._id === user_id);
  };
}

const userStore = new UserStore();
userStore.fetchUsers();
export default userStore;
