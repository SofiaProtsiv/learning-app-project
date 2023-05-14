import { useEffect, useState } from "react";

import { Dimensions } from "react-native";

import { Provider, useSelector } from "react-redux";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

import store from "./src/redux/store";

import Main from "./src/components/main";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [iasReady, setIasReady] = useState(false);

  const [dimensions, setdimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;

      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
