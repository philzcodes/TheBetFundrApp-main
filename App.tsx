/* eslint-disable react/react-in-jsx-scope */

import { useEffect } from 'react';
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
import {useFonts} from "expo-font";
import AppNavigator from './navigation/AppNavigator';
import {store} from "./redux/store";
import {Provider} from "react-redux";
export default function App() {
  const [loaded, error] = useFonts({
    mon: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "mon-sb": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "mon-b": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "mon-i": require("./assets/fonts/Roboto/Roboto-Italic.ttf"),
    "new-mon-i": require("./assets/fonts/Roboto/Peralta/Peralta-Regular.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}




