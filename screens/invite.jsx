import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons"; // Replace with your icon library

const invite = () => {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
          width: "100%",
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>
          Help & Support
        </Text>
        <Text></Text>
      </View> */}
      <Image
        source={{ uri: "https://img.icons8.com/color/48/messaging-.png" }}
        style={styles.image}
      />
      <Text style={styles.headerText}>Invite your friends & get 6% bonus</Text>
      <Text style={styles.descriptionText}>
        Refer frends to Betfundr and earn rewards! Share your code and get
        bonuses when they sign up and deposit. You'll also get a 6% bonus on
        your first referral's deposit. Start sharing your unique code now!
      </Text>

      <View style={{ flex: 1 }}></View>

      <View>
        <Text>Your unique referral code</Text>
        <View
          style={{
            borderColor: "orange",
            borderWidth: 1,
            borderRadius: 15,
            flexDirection: "row",
            padding: 16,
            alignItems: "center",
            justifyContent: "space-around",
            gap: 20,
            marginVertical: 6,
          }}
        >
          <Text>betfundr-PHISL9oc</Text>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "grey",
              justifyContent: "space-around",
              borderRadius: 25,
              gap: 8,
            }}
          >
            <FontAwesome name="phone" size={20} style={styles.cardIcon} />
            <Text>Copy referral code</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "grey",
          justifyContent: "center",
          width: "100%",
          padding: 16,
          marginTop: 30,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "600" }}>Refer a friend</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 45,
    marginBottom: 20,
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 13,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default invite;
