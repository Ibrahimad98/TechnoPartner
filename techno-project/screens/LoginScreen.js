import { ScrollView, Image, TextInput, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigation.navigate("Home");

    console.log(`email: ${email} Password: ${password}`);
  };

  return (
    <View>
      <Image style={styles.image} source={require("../assets/logotechnopartner.png")} />
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
        <TextInput style={styles.input} placeholder="Password" value={password} secureTextEntry onChangeText={(text) => setPassword(text)} />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonContainer: {
    width: "50%",
    padding: 10,
    margin: 10,
    backgroundColor: "gray",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
