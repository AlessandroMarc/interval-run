import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Perform login logic here
        console.log("Login pressed");
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => setEmail(text)} value={email} keyboardType="email-address" autoCapitalize="none" />
            <TextInput style={styles.input} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

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
    },
});

export default LoginScreen;
