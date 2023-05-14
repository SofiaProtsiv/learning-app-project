import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import defaultCreatePostScreen from "../../nestedScreens/defaultCreatePostScreen";
import cameraScreen from "../../nestedScreens/cameraScreen";

const NestedScreen = createStackNavigator();

export default function CreatePostScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        options={{ headerShown: false }}
        name="defaultCreatePostScreen"
        component={defaultCreatePostScreen}
      ></NestedScreen.Screen>
      <NestedScreen.Screen
        options={{ title: "Камера" }}
        name="camera"
        component={cameraScreen}
      ></NestedScreen.Screen>
    </NestedScreen.Navigator>
  );
}
