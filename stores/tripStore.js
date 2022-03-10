import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import authStore from "./authStore";

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

  addTrip = async (newTrip) => {
    try {
      if (authStore.user) {
        console.log(authStore.user);
        newTrip.owner = authStore.user._id;
        console.log(newTrip);
        const response = await instance.post("/trips", newTrip);
        console.log(response.data);
        this.trips.push(response.data.payload);
        tripStore.fetchTrips();
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: TripStore.js ~ line 16 ~ TripStore ~ addTrip= ~ error",
        error
      );
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
