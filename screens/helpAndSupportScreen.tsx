import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons"; // Replace with your icon library

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <View
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
      </View>
      <Image
        source={{ uri: "https://img.icons8.com/color/48/messaging-.png" }}
        style={styles.image}
      />
      <Text style={styles.headerText}>How can we help you?</Text>
      <Text style={styles.descriptionText}>
        At Betfundr, we're committed to providing you with the best possible
        experience. If you have any questions, concerns, or issues, we're here
        to help.
      </Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <FontAwesome name="instagram" size={35} style={styles.cardIcon} />
          <Text style={styles.cardHeader}>Instagram</Text>
          <Text style={styles.cardSubheader}>@betfundr</Text>
        </View>
        {/* Repeat the card structure for other sections */}
        <View style={styles.card}>
          <FontAwesome name="envelope" size={35} style={styles.cardIcon} />
          <Text style={styles.cardHeader}>Email</Text>
          <Text style={styles.cardSubheader}>support@betfundr.com</Text>
        </View>
        <View style={styles.card}>
          <AntDesign name="twitter" size={35} style={styles.cardIcon} />
          <Text style={styles.cardHeader}>Twitter</Text>
          <Text style={styles.cardSubheader}>@Betfundr</Text>
        </View>
        <View style={styles.card}>
          <FontAwesome name="phone" size={35} style={styles.cardIcon} />
          <Text style={styles.cardHeader}>FAQ</Text>
          <Text style={styles.cardSubheader}>Visit our Help Center</Text>
        </View>
      </View>
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
  },
  headerText: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 13,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 5,
    backgroundColor: "#848482",
    borderRadius: 15,
    height: 170,
    width: "48%",
    opacity: 0.7,
  },
  cardIcon: {
    marginBottom: 5,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSubheader: {
    fontSize: 14,
    color: "#777",
  },
});

export default HelpScreen;
