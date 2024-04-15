import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface ItemProps {
  iconName: string; // Name of the icon from the icon library
  text: string; // Text to be displayed

  IconName: React.ReactElement;
}

const Item: React.FC<ItemProps> = ({
  iconName,
  text,

  IconName,
}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 8,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#8FBC8F",

          padding: 10,
          borderRadius: 40,
          marginRight: 10,
        }}
      >
        {IconName}
      </View>
      <View>
        <Text style={{ fontWeight: "600", fontSize: 14 }}>{iconName}</Text>
        <Text>{text} </Text>
      </View>
    </View>
    <Ionicons name="chevron-forward" size={24} color="green" />
  </View>
);
const editProfile = () => {
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
        <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
          Edit Profile
        </Text>
        <Text></Text>
      </View>
      <Item
        iconName="Edit Profile"
        text="Edit BetFundr Profile"
        IconName={<Ionicons name="person" size={24} color="green" />}
      />
      <Item
        iconName="Set Bet Id"
        text="Change or Add Bet ID"
        IconName={<Feather name="activity" size={24} color="green" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default editProfile;
