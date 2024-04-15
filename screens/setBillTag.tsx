import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const setBillTag = () => {
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
        <Text style={{ fontSize: 18, fontWeight: "600" }}></Text>
        <Text></Text>
      </View>

      <Text style={{ fontSize: 18, fontWeight: "600" }}>Set BillTag</Text>
      <Text style={{ fontSize: 16, fontWeight: "400", marginVertical: 7 }}>
        Choose your @BillTag, your unique tag to get paid by anyone using
        BillPoint{" "}
      </Text>

      <View style={[styles.formFieldWrapper, { marginBottom: 15 }]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="@"
            placeholderTextColor={"black"}
            textAlign="center"
          />
        </View>
      </View>

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
          Set BillTag
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
});

export default setBillTag;
