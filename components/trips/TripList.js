import { RefreshControl, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import { Center, HStack, ScrollView, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import authStore from "../../stores/authStore";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const TripList = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    wait(400).then(() => setRefreshing(false));
    await tripStore.fetchTrips();
  }, []);

  const trips = tripStore.trips.map((trip) => (
    <TripItem key={trip._id} trip={trip} navigation={navigation} />
  ));

  return (
    <VStack style={{ flex: 1 }}>
      <View style={{ flex: 7 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {trips}
        </ScrollView>
      </View>
      <View style={{ flex: 1 }}>
        {authStore.user && (
          <Ionicons
            style={styles.icon}
            name="add-circle-outline"
            size={70}
            color="black"
            onPress={() => navigation.navigate("AddTrip")}
          />
        )}
      </View>
    </VStack>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  trips: {
    flex: 8,
  },
  icon: {
    top: "1%",
    left: "42%",
  },
  iconContainer: {
    flex: 1,
  },
});
