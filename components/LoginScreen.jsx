import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, Pressable } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        signIn({ username, password });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Please log in</Text>
            <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} keyboardType="email-address" autoCapitalize="none" />
            <TextInput style={styles.input} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry />
            <Pressable style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    input: {
        marginBottom: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        backgroundColor: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
        alignSelf: "center",
    },
    button: {
        backgroundColor: "#333",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});
