/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Colors from "@/constants/Colors";
import React, {useEffect, useRef} from "react";
import {Animated, StyleSheet, View, Text} from "react-native";

const ToastNotification = ({
  startPositionY,
  positionAnimationSpeed,
  children,
  text,
  show,
  icon,
  textColor,
}: any) => {
  const translateYAnim = useRef(
    new Animated.Value(startPositionY ? startPositionY : show ? 0 : -400)
  ).current;
  function showNotification() {
    Animated.parallel([
      Animated.spring(translateYAnim, {
        toValue: show ? -400 : 0,
        useNativeDriver: true,
        speed: positionAnimationSpeed ? positionAnimationSpeed : 3,
      }),
    ]).start();
  }

  useEffect(() => {
    showNotification();
  });

  const styles = StyleSheet.create({
    container: {
      zIndex: 50,
    },
  });

  return (
    <Animated.View
      style={{
        transform: [{translateY: translateYAnim}],
        width: "100%",
        height: 90,
        position: "absolute",
        zIndex: 50,
        paddingHorizontal: 12,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.toastModalBackgroundColor,
          flex: 1,
          width: "100%",
          borderRadius: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          // elevation: 5, // For Android
          // shadowColor: "#000", // For iOS
          // shadowOffset: {
          //   width: 0,
          //   height: 10,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,
        }}
      >
        <View style={{marginLeft: 15}}>
          <Text>{icon}</Text>
        </View>
        <View style={{marginLeft: 15, width: "80%"}}>
          <Text
            style={{
              color: textColor,
              fontSize: 15,
              width: "100%", // Adjust width to match parent View's width
            }}
            numberOfLines={2} // Set maximum number of lines
            ellipsizeMode='tail' // Specify how text should be truncated if it overflows
          >
            {text}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default ToastNotification;
