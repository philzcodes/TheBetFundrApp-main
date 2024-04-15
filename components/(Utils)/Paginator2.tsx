/* eslint-disable @typescript-eslint/no-explicit-any */
import Colors from "@/constants/Colors";
import React from "react";
import {View, Animated, useWindowDimensions, StyleSheet} from "react-native";

const Paginator = ({data, scrollX}: any) => {
  const {width} = useWindowDimensions();
  return (
    <View style={{flexDirection: "row", height: 10, justifyContent: "center",  position: "absolute", bottom: 0, alignSelf: "center"}}>
      {data.map((_: any, i: any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          ></Animated.View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  dot: {
    height: 3,
    width: 3,
    borderRadius: 1.5,
    backgroundColor: Colors.default1,
    marginHorizontal: 4,

  },
});
export default Paginator;
