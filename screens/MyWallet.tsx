import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const MyWalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Wallet</Text>
      <Text style={styles.subHeaderText}>
        Your central hub for managing your funds and Track your wallet history.
      </Text>

      {/* Wallet Balance Component */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Wallet Balance</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
          }}
        >
          <Text style={styles.balanceAmount}>NGN 0.00</Text>
          <AntDesign name="eyeo" size={18} color="white" />
        </View>
      </View>

      {/* Fund Wallet Button */}
      <TouchableOpacity style={styles.fundButton}>
        <Text style={styles.fundButtonText}>Fund Wallet</Text>
      </TouchableOpacity>

      {/* Wallet Transactions */}
      <View style={styles.transactionContainer}>
        <Text style={styles.transactionHeader}>Wallet Transactions</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Empty Transactions */}
      <View style={styles.emptyContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/pulsar-color/48/image-not-avialable.png",
          }}
          style={styles.emptyImage}
        />
        <Text style={styles.emptyText}>
          Looks like there's no recent activity to show here.
        </Text>
        <Text style={styles.emptySubText}>
          Get started by making a transaction.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeaderText: {
    fontSize: 14,
    marginBottom: 20,
    color: "#848482",
  },
  balanceContainer: {
    backgroundColor: "green",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    height: 150,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    color: "white",
  },
  balanceAmount: {
    fontSize: 24,
    color: "white",
  },
  fundButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  fundButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  transactionHeader: {
    fontSize: 14,
    fontWeight: "500",
  },
  seeAllButton: {},
  seeAllText: {
    color: "#3F704D",
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 70,
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    color: "#777",
  },
  emptySubText: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
});

export default MyWalletScreen;
