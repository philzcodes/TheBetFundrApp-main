/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import {TouchableOpacity, View, Text} from "react-native";

const SharingDeposit = ({navigation}: any) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>bjeb</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SharingDeposit;
