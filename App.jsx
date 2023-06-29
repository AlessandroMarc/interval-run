import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import SettingsScreen from "./components/SettingScreen";
import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react-native";

export default function App() {
    const user = true;
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            {user ? (
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === "Home") {
                                iconName = focused ? "home" : "home-outline";
                            } else if (route.name === "Settings") {
                                iconName = focused ? "settings" : "settings-outline";
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: "#007AFF",
                        tabBarInactiveTintColor: "gray",
                    })}
                >
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
            ) : (
                <LoginScreen />
            )}
        </NavigationContainer>
    );
}
