import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import userStore from "./userStore";

class ProfileStore {
  profiles = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchProfiles = async () => {
    try {
      const response = await instance.get("/profiles");
      this.profiles = response.data.payload;
    } catch (error) {
      console.log("error");
    }
  };

  getProfileFromId = (profile_id) => {
    return this.profiles.find((profile) => profile._id === profile_id);
  };

  updateProfile = async (profile) => {
    const updateProfile = { image: profile.image, bio: profile.bio };
    try {
      const response = await instance.put(
        `/profiles/${profile._id}`,
        updateProfile
      );
      if (response) {
        this.profiles = this.profiles.map((prof) =>
          prof._id === profile._id ? profile : prof
        );
      }
    } catch (error) {}
  };
}

const profileStore = new ProfileStore();
profileStore.fetchProfiles();
export default profileStore;
