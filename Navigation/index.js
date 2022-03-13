import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Signup from "../components/authentication/Signup";
import Signin from "../components/authentication/Signin";
import Test from "../components/Test";
import TripList from "../components/trips/TripList";

import SigninButton from "../components/Button/SigninButton";
import authStore from "../stores/authStore";
import SignoutButton from "../components/Button/SignoutButton";
import { observer } from "mobx-react";

import TripDetail from "../components/trips/TripDetail";
import Profile from "../components/users/Profile";

import AddTrip from "../components/trips/AddTrip";
import ProfileView from "../components/users/ProfileView";
import ProfileDetails from "../components/users/ProfileDetails";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  const handleHeader = () => {
    return !authStore.user ? <SigninButton /> : <SignoutButton />;
  };

  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerRight: handleHeader,
        }}
      />
      <Screen
        name="Test"
        component={Test}
        options={{
          headerRight: handleHeader,
        }}
      />
      <Screen
        name="Explore"
        component={TripList}
        options={{ headerRight: handleHeader }}
      />
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Profile" component={Profile} />
      <Screen name="ProfileDetails" component={ProfileDetails} />
      <Screen name="TripDetail" component={TripDetail} />
      <Screen name="AddTrip" component={AddTrip} />
    </Navigator>
  );
};

export default observer(RootNavigator);

const styles = StyleSheet.create({});
