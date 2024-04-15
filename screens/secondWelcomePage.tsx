/* eslint-disable */
import ExploreHeader4 from "@/components/ExploreHeader4";
import Colors from "@/constants/Colors";
import React, {useEffect, useRef, useState} from "react";
import {View, Text, Image, FlatList, Animated} from "react-native";
import slides from "@/components/(Utils)/slide";
import OnboardingItem from "@/components/OnboardingItem";
import NextButton from "@/components/(Utils)/NextButton";
import Paginator from "@/components/(Utils)/Paginator";
import ExploreHeader5 from "@/components/ExploreHeader5";
import PopInAnimation from "@/components/(Utils)/AnimatedContent";
const image = require("@/assets/images/Logo.webp");
const image1 = require("@/assets/images/Logo1.webp");
const image2 = require("@/assets/images/depositAndWithdraw.png");
;
const SecondWelcomePage = ({navigation}: any) => {
  const [state, setState] = useState<any>(1);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slidesRef = useRef<any>(null);

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({index: currentIndex + 1});
    } else if (currentIndex === slides.length - 1) {
      navigation.push("thirdWelcomePage");
    } else {
      console.log("Last item.");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setState(2);
    }, 4000);
  });

  return state === 1 ? (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <ExploreHeader5 />
      <View style={{display: "flex", flex: 1, height: 400}}>
        <View
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            //   backgroundColor: "green",
          }}
        >
          <PopInAnimation
            scaleSpeed={0.4}
            opacitySpeed={950}
            style={{position: "relative"}}
          >
            <View
              style={{
                borderRadius: 7,
                borderWidth: 1,
                position: "absolute",
                width: 14,
                height: 14,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: -5,
                right: -7,
                borderColor:
                  Colors.background === "#0C121D" ? "white" : "black",
              }}
            >
              <Text
                style={{
                  fontSize: 5,
                  color: Colors.background === "#0C121D" ? "white" : "black",
                }}
              >
                TM
              </Text>
            </View>
            <Image
              source={Colors.background === "#0C121D" ? image1 : image}
              style={{width: 170, height: 44}}
            />
          </PopInAnimation>
        </View>
        <View
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            //   paddingBottom: 100,
            //   backgroundColor: "red",
          }}
        >
          {/* <Text
          style={{
            color: "rgba(256, 256, 256, .8)",
            fontWeight: "400",
            fontSize: 11.5,
            lineHeight: 13.5,
            textAlign: "center",
            width: "60%",
          }}
        >
          Gérez en toute transparence les dépôts et les retraits de 1xBet dans
          un seul endroit sécurisé.
        </Text> */}
        </View>
      </View>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
 <ExploreHeader4 />
   
      {image2 && (
        <View
          style={{
            flex: 3,
            backgroundColor: Colors.background,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.background,
            }}
          >
            <FlatList
              renderItem={({item}) => <OnboardingItem item={item} />}
              data={slides}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              bounces={false}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false}
              )}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={slidesRef}
              style={{backgroundColor: "red"}}
            />
          </View>
          <Paginator data={slides} scrollX={scrollX} />
        </View>
      )}
      <NextButton
        percentage={(currentIndex + 1) * (100 / (slides.length + 1))}
        scrollTo={scrollTo}
      />
    </View>
  );
};

export default SecondWelcomePage;
