import { instance } from "./instance";
import { makeAutoObservable } from "mobx";

class TripStore {
  trips = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data.payload;
    } catch (error) {
      console.log("error");
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
