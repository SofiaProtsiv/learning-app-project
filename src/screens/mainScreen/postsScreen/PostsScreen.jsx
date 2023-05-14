import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultPostsScreen from "../../nestedScreens/defaultPostsScreen";
import commentsScreen from "../../nestedScreens/commentsScreen";
import mapScreen from "../../nestedScreens/mapScreen";

const NestedScreen = createStackNavigator();
export default function PostsScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="defaultPostsScreen"
        options={{ title: "Публікації" }}
        component={defaultPostsScreen}
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
