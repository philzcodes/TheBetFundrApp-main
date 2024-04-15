import { SafeAreaView, StatusBar} from "react-native";
import React from "react";

import Colors from "../constants/Colors";

const ExploreHeader = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
        backgroundColor: Colors.background,
      }}
    >
      <StatusBar barStyle={Colors.statusBar} />

    </SafeAreaView>
  );
};

export default ExploreHeader;
