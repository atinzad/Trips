import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TestStore {
  users = [];
  constructor() {
    console.log("Hello constructor");
    makeAutoObservable(this);
  }

  fetchUsers = async () => {
    try {
      const response = await instance.get("/users");
      console.log(response.data);
    } catch (error) {}
  };
}

const testStore = new TestStore();
testStore.fetchUsers();
export default testStore;
