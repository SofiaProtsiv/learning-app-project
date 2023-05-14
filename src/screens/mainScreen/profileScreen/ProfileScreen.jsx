import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultProfileScreen from "../../nestedScreens/defaultProfileScreen";
import commentsScreen from "../../nestedScreens/commentsScreen";
import mapScreen from "../../nestedScreens/mapScreen";

const NestedScreen = createStackNavigator();
export default function ProfileScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="defaultProfileScreen"
        options={{ title: "Профіль" }}
        component={defaultProfileScreen}
      ></NestedScreen.Screen>
      <NestedScreen.Screen
        name="comments"
        component={commentsScreen}
      ></NestedScreen.Screen>
      <NestedScreen.Screen
        name="map"
        component={mapScreen}
      ></NestedScreen.Screen>
    </NestedScreen.Navigator>
  );
}
