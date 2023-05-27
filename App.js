import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingScreen";
import LoginScreen from "./components/LoginScreen";

const Tab = createBottomTabNavigator();

const user = false;

function MainScreen() {
    const navigationState = useNavigationState((state) => state);
    const isLoginScreenSelected = navigationState.index === 0 && navigationState.routes.length === 1;

    return (
        <NavigationContainer>
            {isLoginScreenSelected ? (
                <LoginScreen />
            ) : (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === "Home") {
                                iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                            } else if (route.name === "Settings") {
                                iconName = focused ? "ios-list" : "ios-list-outline";
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: "tomato",
                        tabBarInactiveTintColor: "gray",
                    })}
                >
                    <>
                        <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="Settings" component={SettingsScreen} />
                    </>
                </Tab.Navigator>
            )}
        </NavigationContainer>
    );
}

export default MainScreen;
