import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";
import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/context.authentication";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDIzq2fMA-ZJ4WrBDRkEVjgIcl1Xgluh8M",
  authDomain: "mealstogo-453f8.firebaseapp.com",
  projectId: "mealstogo-453f8",
  storageBucket: "mealstogo-453f8.appspot.com",
  messagingSenderId: "94577709448",
  appId: "1:94577709448:web:27dfcc8d9fb0c41f02aa3d",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
