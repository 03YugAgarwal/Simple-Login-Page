import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Alert } from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  handleLoginClick = (e) => {
    Alert.alert(`Logged in with username ${username} and password ${password}`)
    setUsername('')
    setPassword('')
  };
  
  handleRegisterClick = (e) => {
    Alert.alert(`Registered with username ${username} and password ${password}`)
    setUsername('')
    setPassword('')
    // Alert.alert('Simple Button pressed')
  };

  handleUserChange = (e) => {
    setUsername(e);
  };

  handlePassChange = (e) => {
    setPassword(e);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textPrimary}>VIT-Chat</Text>
      <Text style={styles.textSecondary}>Login</Text>
      <Text style={styles.text}>Username:</Text>
      <TextInput
        value={username}
        onChangeText={handleUserChange}
        style={styles.textInput}
        placeholder="e.g. Yug Agarwal"
      />
      <Text style={styles.text}>Password:</Text>
      <TextInput
        value={password}
        onChangeText={handlePassChange}
        style={styles.textInput}
        placeholder="e.g. 12345678"
      />
      <Button title="Login" style={styles.button} onPress={handleLoginClick}/>
      <Button title="Register" style={styles.button} onPress={handleRegisterClick}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  textPrimary: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textSecondary: {
    fontSize: 20,
    marginBottom: 100,
  },
  textInput: {
    borderColor: "black",
    padding: 5,
    borderWidth: 2,
    width: 200,
    marginBottom: 20,
    borderRadius: 7,
  },
});
