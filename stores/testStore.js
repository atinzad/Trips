import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TestStore {
  users = [];
  constructor() {
    makeAutoObservable(this);
  }
}

const testStore = new TestStore();
// testStore.fetchUsers();
export default testStore;
