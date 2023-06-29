import * as React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Interval Run app!</Text>
            <Text style={styles.subtitle}>Alessandro Marchesin</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 18,
        color: "#888",
    },
});
