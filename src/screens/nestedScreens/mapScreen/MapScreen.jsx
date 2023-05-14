import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

import styles from "./styles";

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location.coords);
    })();
  }, []);

  let message = "Waiting..";
  if (errorMsg) {
    message = errorMsg;
  }

  return (
    <View style={styles.container}>
      {!location ? (
        <Text style={styles.paragraph}>{message}</Text>
      ) : (
        location && (
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.02,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
            />
          </MapView>
        )
      )}
    </View>
  );
}
