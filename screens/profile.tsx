import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

interface ItemProps {
  iconName: string; // Name of the icon from the icon library
  text: string; // Text to be displayed
  IconName: React.ReactElement;
}

const Item: React.FC<ItemProps> = ({ iconName, text, IconName }) => (
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

const Profile = () => {
  const itemsData = [
    {
      iconName: "Personal Information",
      text: "Edit your information",
      IconName: (
        <MaterialCommunityIcons
          name="face-man-profile"
          size={24}
          color="green"
        />
      ),
    },
    {
      iconName: "Settings",
      text: "Account, notification, location tracking",
      IconName: <Feather name="settings" size={24} color="green" />,
    },
    {
      iconName: "My Refferal",
      text: "Refferals, Commission",
      IconName: <Ionicons name="people" size={24} color="green" />,
    },
    {
      iconName: "Help & Support",
      text: "Help or contact us",
      IconName: <MaterialIcons name="support-agent" size={24} color="green" />,
    },
    {
      iconName: "Sign Out",
      text: "sign out of your account",
      IconName: <AntDesign name="logout" size={24} color="green" />,
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "900", fontSize: 24, marginBottom: 7 }}>
          Profile
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 16, color: "#848482" }}>
          Your BillPoint profile is your personal gateway to managing your
          account information.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            gap: 10,
            // justifyContent: "center",
            marginVertical: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain",
            }}
            style={styles.profileImage}
          />
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#8FBC8F",
              padding: 10,

              height: 40,
              borderRadius: 40,
            }}
          >
            <Entypo name="upload" size={24} color="green" />
            <Text style={{ color: "green" }}>Upload Photo</Text>
          </View>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 19, fontWeight: "600" }}>Dike Prosper</Text>
          <Text>dikehprosper@gmail.com</Text>
        </View>
      </View>

      <Text
        style={{
          fontWeight: "400",
          marginTop: 5,
          marginBottom: 10,
          color: "#848482",
        }}
      >
        General Settings
      </Text>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {itemsData.map((item) => (
          <Item
            key={item.text}
            iconName={item.iconName}
            IconName={item.IconName}
            text={item.text}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    borderRadius: 20,
    padding: 5,
  },
  cameraIcon: {
    width: 20,
    height: 20,
    tintColor: "white", // Adjust tint based on icon color
  },
});

export default Profile;
