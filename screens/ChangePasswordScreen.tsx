import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cNewPassword, setCNewPassword] = useState("");

  const handleUpdate = () => {
    // Implement your update logic here (e.g., send data to server)
    console.log("Updating profile:", password, newPassword, cNewPassword);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Change Password</Text>
        <Text></Text>
      </View>
      {/* Improved structure for reusability and maintainability */}
      <View style={styles.formFieldWrapper}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="password" size={20} color="#808080" />
          <TextInput
            style={styles.textInput}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
          <Entypo name="eye" size={20} color="black" />
        </View>
      </View>
      <View style={styles.formFieldWrapper}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="password" size={20} color="#808080" />
          <TextInput
            style={styles.textInput}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="New Password"
          />
          <Entypo name="eye" size={20} color="black" />
        </View>
      </View>
      <View style={styles.formFieldWrapper}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="password" size={20} color="#808080" />

          <TextInput
            style={styles.textInput}
            value={cNewPassword}
            onChangeText={setCNewPassword}
            placeholder="Confirm New Password"
          />
          <Entypo name="eye" size={20} color="black" />
        </View>
      </View>
      <View style={{ flex: 1 }}></View>

      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
        }}
      >
        <Text style={{ fontWeight: "700", color: "white", fontSize: 16 }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  formFieldWrapper: {
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 10, // Use paddingHorizontal for consistency
    gap: 10,
  },
  textInput: {
    flex: 1,
    paddingBottom: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default ChangePasswordScreen;
