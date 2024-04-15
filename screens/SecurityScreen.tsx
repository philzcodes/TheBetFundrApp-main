import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

interface ItemProps {
  iconName: string; // Name of the icon from the icon library
  text: string; // Text to be displayed
  isSwitch: boolean;
  isEnabled: boolean;
  toggleSwitch: any;
  IconName: React.ReactElement;
}

const Item: React.FC<ItemProps> = ({
  iconName,
  text,
  isSwitch,
  isEnabled,
  toggleSwitch,
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
    {!isSwitch ? (
      <Ionicons name="chevron-forward" size={24} color="green" />
    ) : (
      <Switch
        trackColor={{ false: "#767577", true: "#f4f3f4" }}
        ios_backgroundColor={"#3e3e3e"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    )}
  </View>
);
const SecurityScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="green" />
        <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
          Security
        </Text>
        <Text></Text>
      </View>
      <Item
        iconName="Reset password"
        text="Update your password"
        IconName={
          <MaterialIcons name="my-library-books" size={24} color="green" />
        }
        isSwitch={false}
        toggleSwitch={toggleSwitch}
        isEnabled={isEnabled}
      />
      <Item
        iconName="Reset BetFundr PIN"
        text="Update your security PIN"
        IconName={
          <MaterialIcons name="my-library-books" size={24} color="green" />
        }
        isSwitch={false}
        toggleSwitch={toggleSwitch}
        isEnabled={isEnabled}
      />

      <Item
        iconName="Biometrics"
        text="Activate FaceId or Biometrics"
        IconName={
          <MaterialCommunityIcons
            name="passport-biometric"
            size={24}
            color="green"
          />
        }
        isSwitch={true}
        toggleSwitch={toggleSwitch}
        isEnabled={isEnabled}
      />
      <Item
        iconName="Wallet balance"
        text="Hide or show your wallet balance"
        IconName={<AntDesign name="eye" size={24} color="green" />}
        isSwitch={true}
        toggleSwitch={toggleSwitch}
        isEnabled={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default SecurityScreen;
