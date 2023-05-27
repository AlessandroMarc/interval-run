import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingScreen";
import LoginScreen from "./components/LoginScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                        } else if (route.name === "Settings") {
                            iconName = focused ? "ios-list" : "ios-list-outline";
                        } else if (route.name === "Login") {
                            iconName = focused ? "ios-list" : "ios-list-outline";
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Login" component={LoginScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
