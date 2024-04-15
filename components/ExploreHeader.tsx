import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";

import Colors from "../constants/Colors";
// import { Link } from "@react-navigation/native";

 // Get the screen height
  const screenHeight = Dimensions.get("window").height;

  // Calculate the percentage value
  const percentageHeight = screenHeight * 0.055;
const ExploreHeader = () => {
 
  return (
    <SafeAreaView
      style={{
        // paddingTop: StatusBar.currentHeight,
        backgroundColor: Colors.background,
      }}
    >
      <StatusBar barStyle={Colors.statusBar} />

        <View style={styles.container}>
          <View style={styles.actionRow}>
            <TouchableOpacity>
              <Ionicons
                name='person-circle-sharp'
                size={34}
                color={Colors.welcomeText}
              />
            </TouchableOpacity>
            <View style={styles.overallactionRow_2}>
              <View style={styles.actionRow_2}>
                {/* <Text style={styles.actionRow_2_text2}>
                {data?.betId}
              </Text> */}
                <View style={styles.actionRow_2_background1}>
                  <Text style={styles.actionRow_2_text1}>4345677654</Text>
                </View>

                <View style={styles.actionRow_2_background2}>
                  <Text style={styles.actionRow_2_text2}>
                    <MaterialIcons
                      name='file-copy'
                      size={14}
                      color={Colors.primary4}
                    />
                  </Text>
                </View>
              </View>
              <TouchableOpacity >
                <View style={styles.NotificationBox}>
                  <MaterialIcons
                    name='notifications'
                    size={21}
                    color={Colors.welcomeText}
                  />
                </View>
                {/* <Image source={Logo} style={styles.imageProfile} /> */}
              </TouchableOpacity>
            </View>
          </View>
        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: percentageHeight,
    backgroundColor: Colors.background,
    // alignContent: "center",
    // justifyContent: "center"
  },
  actionRow: {
    flexDirection: "row",
    margin: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 4,
  },
  overallactionRow_2: {
    display: "flex",
    flexDirection: "row",
    gap: 7,

  },
  actionRow_2: {
    flexDirection: "row",
    display: "flex",
    width: "auto",
    alignItems: "center",
    textAlign: "auto",
    borderRadius: 4,
    height: 23,
    backgroundColor: Colors.betIdAllBackgroundColor,
  },
  actionRow_2_background1: {
    backgroundColor: Colors.betIdBackgroundColor,
    display: "flex",
    paddingLeft: 6,
    height: 23,
    paddingRight: 6,
    flexDirection: "row",
    alignItems: "center",
    borderTopStartRadius: 4,
    borderBottomLeftRadius: 4,
  },
  actionRow_2_text1: {
    // fontFamily: "mon-b",
    fontWeight: "900",
    color: Colors.betIdTextColor,
  },
  actionRow_2_background2: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: Colors.betIdBackgroundIconColor,
    height: 23,
    paddingRight: 6,
    paddingLeft: 6,
  },
  actionRow_2_text2: {
    color: Colors.primary4,
    alignSelf: "center",
  },
  imageProfile: {
    width: 84,
    height: 25,
  },
  NotificationBox: {
    padding: 2.5,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 4,
  },
});

export default ExploreHeader;
