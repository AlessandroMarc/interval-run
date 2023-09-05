import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

import LoginScreen from "./components/LoginScreen";
import SignedInNavigation from "./components/SignedInNavigation";
import SplashScreen from "./components/SplashScreen";

export default function App() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [userToken, setUserToken] = React.useState(true);
    const AuthContext = React.createContext();

    if (isLoading) {
        return <SplashScreen />;
    } else {
        return <NavigationContainer>{userToken ? <SignedInNavigation /> : <LoginScreen />}</NavigationContainer>;
    }
}
