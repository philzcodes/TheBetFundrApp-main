/* eslint-disable */

import ExploreHeader from "../components/ExploreHeader";
import React, {useState, useEffect, useRef} from "react";
import * as Haptics from "expo-haptics";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Animated,
  Easing,
  FlatList,
  useWindowDimensions,
  Pressable,
  Vibration,
  Keyboard,
} from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {FontAwesome6, AntDesign} from "@expo/vector-icons";
import Colors from "../constants/Colors";
<MaterialCommunityIcons name='hand-wave-outline' size={24} color='black' />;
const screenHeight = Dimensions.get("window").height;
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {defaultStyles} from "@/constants/Styles";
const Stack = createNativeStackNavigator();
import data1 from "../components/(userscomponent)/(TransactionTemplateUsers)/data";
import BetIdModalPage from "@/components/(Utils)/BetIdModalPage";
import ExploreHeader3 from "@/components/ExploreHeader3";
import PopInAnimation from "@/components/(Utils)/AnimatedContent";
import Paginator from "@/components/(Utils)/Paginator2";
import slides from "@/components/(Utils)/slide2";
import AdvertItem from "@/components/(userscomponent)/advertItem";
import slides3 from "@/components/(Utils)/slides3";
import {formatNumberWithCommasAndDecimal2} from "../components/(Utils)/formatNumber";
import CountryCode from "@/components/(Utils)/countrySelector";
import VerifyMobileNumber from "@/components/(Utils)/VerifyMobileNumber";
import NetworkModalPage from "@/components/(Utils)/NetworkModalPage";
import ToastNotification from "@/components/(Utils)/toastNotification";

const data = data1[0];
// Calculate the percentage value
const percentageHeight = screenHeight * 0.375;
const percentageHeight2 = screenHeight * 1;
const Deposit = (props: any, {navigation, title}: any) => {
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  // EXTRA SETTINGS ........
  // Input fucus and blur setting
  async function setItemOnFocus(index: React.SetStateAction<number>) {
    setIndex(index);
  }

  function setItemOnBlur() {
    setIndex(0);
  }

  //function to close keyboard
  const inputRef = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);

  const handleDismissKeyboard = () => {
    inputRef.current?.blur();
    inputRef2.current?.blur();
    inputRef3.current?.blur();
    inputRef4.current?.blur();
  };

  const [betId, setBetId] = useState<any>(data?.supplementaryBetId[0]);
  const [amount, setAmount] = useState<any>();
  const [number, setNumber] = useState(data?.number);

  function runNetworkCheck(value: React.SetStateAction<number | undefined>) {
    Vibration.vibrate(50);
    setCurrentNetwork(value);
  }

  //VERIFYING INPUTS
  // Verifying Bet-Id field
  const [betIdError, setBetIdError] = useState(false);
  const [betIdError1, setBetIdError1] = useState(false);
  const [betIdError2, setBetIdError2] = useState(false);
  const [betIdError3, setBetIdError3] = useState(false);
  const [betIdLoadingSymbol, setBetIdLoadingSymbol] = useState("");
  const [triggerBetIdRevalidation, setTriggerBetIdRevalidation] =
    useState(false);
  const isValidBetId = betId?.length !== 0;
  const isValidBetId1 = betId?.length >= 4;
  const isValidBetId2 = /^\d+$/.test(betId);
  const SignUpBetIdVerification = () => {
    if (betId === "") {
      return;
    }
    if (!triggerBetIdRevalidation) {
      setBetIdError(false);
      setBetIdError1(false);
      setBetIdError2(false);
      setBetIdError3(false);
      setBetIdLoadingSymbol("true");
      setTimeout(() => {
        if (!isValidBetId) {
          setBetIdError(true);
          setBetIdLoadingSymbol("");
          setTriggerBetIdRevalidation(true);
        } else if (!isValidBetId1 && isValidBetId2) {
          setBetIdError1(true);
          setBetIdLoadingSymbol("");
          setTriggerBetIdRevalidation(true);
        } else if (!isValidBetId2 && isValidBetId1) {
          setBetIdError2(true);
          setBetIdLoadingSymbol("");
          setTriggerBetIdRevalidation(true);
        } else if (!isValidBetId1 && !isValidBetId2) {
          setBetIdError3(true);
          setBetIdLoadingSymbol("");
          setTriggerBetIdRevalidation(true);
        } else {
          setBetIdError(false);
          setBetIdLoadingSymbol("false");
          setTriggerBetIdRevalidation(true);
        }
      }, 300);
    }
  };

  // verifying amount
  const [amountError, setAmountError] = useState(false);
  const [amountLoadingSymbol, setAmountLoadingSymbol] = useState("");
  const [triggerAmountRevalidation, setTriggerAmountRevalidation] =
    useState(false);

  const isValidAmount = amount >= 500;
  const SignUpAmountVerification = () => {
    if (amount === "") {
      return;
    }
    if (!triggerAmountRevalidation) {
      setAmountLoadingSymbol("true");
      setTimeout(() => {
        if (!isValidAmount) {
          setAmountError(true);
          setAmountLoadingSymbol("");
          setTriggerAmountRevalidation(true);
        } else {
          setAmountError(false);
          setAmountLoadingSymbol("false");
          setTriggerAmountRevalidation(true);
        }
      }, 300);
    }
  };

  // Verifying Phone-Number field

  // Actual Phone Number Verification
  const [countryFlag, setCountryFlag] = useState("🇧🇯");
  const [countryCode, setCountryCode] = useState("+229");

  function changeCountryCode(value: any) {
    setCountryCode(value);
  }
  function changeCountryFlag(value: any) {
    setCountryFlag(value);
  }

  // Getting the Network
  const numberPrefix = number.substring(0, 2).toString();
  const network = VerifyMobileNumber({numberPrefix});
  const [network2, setNetwork2] = useState<any>();
  const [currentNetwork, setCurrentNetwork] = useState<any>();
  const [networkModal, setNetworkModal] = useState<string>("");
  function openNetworkModal() {
    if (network.length === 0) {
      triggerHapticFeedback();
      setNetworkModal("first");
    } else if (network.length === 1) {
      triggerHapticFeedback();
      setNetworkModal("second");
    } else if (network.length > 2 || network.length === 2) {
      triggerHapticFeedback();
      setNetworkModal("third");
    }
  }

  useEffect(() => {
    console.log(network);
  });

  // Verifying Phone Number field
  const [numberCollector, setNumberCollector] = useState<any>();
  const [numberCollectorCorrect, setNumberCollectorCorrect] =
    useState<any>(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [phoneNumberLoadingSymbol, setPhoneNumberLoadingSymbol] = useState("");
  const [triggerPhoneNumberRevalidation, setTriggerPhoneNumberRevalidation] =
    useState(false);
  const isValidPhoneNumber = /^\d{8}$/.test(number);

  function wrapperSignUpPhoneNumberVerification() {
    setNumberCollector(number);
    if (!triggerPhoneNumberRevalidation) {
      SignUpPhoneNumberVerification();
    }
  }
  const SignUpPhoneNumberVerification = () => {
    if (number === "") {
      return;
    }

    setTimeout(() => {
      if (!isValidPhoneNumber) {
        setPhoneNumberError(true);
        setPhoneNumberLoadingSymbol("");
      } else {
        setPhoneNumberError(false);
        setCurrentNetwork(network);
        setPhoneNumberLoadingSymbol("false");
        setTriggerPhoneNumberRevalidation(true);
      }
    }, 300);
  };

  function closeNetworkModal() {
    setIndex(0);
    setNetworkModal("");
    setPhoneNumberLoadingSymbol("");
  }

  function closeNetworkModal2() {
    setIndex(0);
    setNetworkModal("");
    setPhoneNumberLoadingSymbol("false");
  }

  function changeNetworkModal() {
    closeNetworkModal();
    // setNetworkModal(false);
  }
  function proceedWithNetworkModal() {
    setIndex(0);
    setNetworkModal("");
    setPhoneNumberLoadingSymbol("false");
  }
  function proceedWithNetworkModal2(value: any) {
    setIndex(0);
    setNetworkModal("");
    setPhoneNumberLoadingSymbol("false");
    setNetwork2(value);
  }

  // REVERIFY ALL INPUTS .........
  // reverifying betid entry
  const [triggerBetIdRevalidation2, setTriggerBetIdRevalidation2] =
    useState(false);
  if (triggerBetIdRevalidation) {
    setTimeout(() => {
      if (!isValidBetId) {
        setBetIdError1(false);
        setBetIdError2(false);
        setBetIdError3(false);
        if (betId !== "") {
          setBetIdError(true);
        }
        if (betId === "") {
          setBetIdError(false);
        }
        setBetIdLoadingSymbol("");
      } else if (!isValidBetId1 && isValidBetId2) {
        setBetIdError1(true);
        setBetIdError(false);
        setBetIdError2(false);
        setBetIdError3(false);
        setBetIdLoadingSymbol("");
      } else if (!isValidBetId2 && isValidBetId1) {
        setBetIdError2(true);
        setBetIdError(false);
        setBetIdError1(false);
        setBetIdError3(false);
        setBetIdLoadingSymbol("");
      } else if (!isValidBetId1 && !isValidBetId2) {
        setBetIdError3(true);
        setBetIdError(false);
        setBetIdError2(false);
        setBetIdError1(false);
        setBetIdLoadingSymbol("");
      } else {
        setBetIdError(false);
        setBetIdError1(false);
        setBetIdError2(false);
        setBetIdError3(false);
        setBetIdLoadingSymbol("false");
      }
    }, 300);
  }
  if (triggerBetIdRevalidation2) {
    setTimeout(() => {
      if (!isValidBetId) {
        setBetIdError1(false);
        setBetIdError2(false);
        setBetIdError3(false);
        if (betId !== "") {
          setBetIdError(true);
        }
        if (betId === "") {
          // setBetIdError(false);
        }
        setBetIdLoadingSymbol("");
      } else if (!isValidBetId1 && isValidBetId2) {
        setBetIdError1(true);
        setBetIdError(false);
        setBetIdError2(false);
        setBetIdError3(false);
        setBetIdLoadingSymbol("");
      } else if (!isValidBetId2 && isValidBetId1) {
        setBetIdError2(true);
        setBetIdError(false);
        setBetIdError1(false);
        setBetIdError3(false);
        setBetIdLoadingSymbol("");
      } else if (!isValidBetId1 && !isValidBetId2) {
        setBetIdError3(true);
        setBetIdError(false);
        setBetIdError2(false);
        setBetIdError1(false);
        setBetIdLoadingSymbol("");
      } else {
        setBetIdError(false);
        setBetIdError1(false);
        setBetIdError2(false);
        setBetIdError3(false);
        setBetIdLoadingSymbol("false");
      }
    }, 300);
  }

  //reverifying amount entry
  const [triggerAmountRevalidation2, setTriggerAmountRevalidation2] =
    useState(false);

  if (triggerAmountRevalidation) {
    setTimeout(() => {
      if (!isValidAmount) {
        if (amount === "") {
          setAmountError(false);
        }
        if (amount !== "") {
          setAmountError(true);
        }
        setAmountLoadingSymbol("");
      } else {
        setAmountError(false);
        setAmountLoadingSymbol("false");
      }
    }, 300);
  }
  if (triggerAmountRevalidation2) {
    setTimeout(() => {
      if (!isValidAmount) {
        if (amount === "") {
          //  setEmailError(false);
        }
        if (amount !== "") {
          setAmountError(true);
        }
        setAmountLoadingSymbol("");
      } else {
        setAmountError(false);
        setAmountLoadingSymbol("false");
      }
    }, 300);
  }

  // Re-verifying phone number field
  const [reoccur, setReOccur] = useState(false);
  const [triggerPhoneNumberRevalidation2, setTriggerPhoneNumberRevalidation2] =
    useState(false);
  if (numberCollector !== number) {
    // if (reoccur) {
    if (triggerPhoneNumberRevalidation) {
      setTimeout(() => {
        if (!isValidPhoneNumber) {
          if (number === "") {
            setPhoneNumberError(false);
          }
          if (number !== "") {
            setPhoneNumberError(true);
          }
          setPhoneNumberLoadingSymbol("");
        } else {
          Keyboard.dismiss();
          setPhoneNumberError(false);
          if (network.length === 0) {
            setPhoneNumberLoadingSymbol("");
          } else if (network.length === 1) {
            setPhoneNumberLoadingSymbol("true");
          } else if (network.length > 2 || network.length === 2) {
            setPhoneNumberLoadingSymbol("true");
          }
          setIndex(0);
          openNetworkModal();
          setReOccur(false);
        }
      }, 300);
    }
    // }
  }

  useEffect(() => {
    if (numberCollector === number) {
      SignUpPhoneNumberVerification();
    }
    const network = VerifyMobileNumber({numberPrefix});
    setNetwork2(network);
  }, [number]);

  if (triggerPhoneNumberRevalidation2) {
    setTimeout(() => {
      if (!isValidPhoneNumber) {
        if (number === "") {
          // setPhoneNumberError(false);
        }
        if (number !== "") {
          setPhoneNumberError(true);
        }
        setPhoneNumberLoadingSymbol("");
      } else {
        handleDismissKeyboard();
        setPhoneNumberError(false);
        if (network.length === 0) {
          setPhoneNumberLoadingSymbol("");
        } else if (network.length === 1) {
          setPhoneNumberLoadingSymbol("true");
        } else if (network.length > 2 || network.length === 2) {
          setPhoneNumberLoadingSymbol("true");
        }
        setIndex(0);
        openNetworkModal();
        setReOccur(false);
      }
    }, 300);
  }

  const [loading2, setLoading2] = useState(false);

  function handleSubmit() {
    setLoading2(true);
    setTimeout(() => {
      if (betIdLoadingSymbol !== "false") {
        triggerHapticFeedback();
        setBetIdError(true);
        setTriggerBetIdRevalidation2(true);
      }
      if (phoneNumberLoadingSymbol !== "false") {
        triggerHapticFeedback();
        setPhoneNumberError(true);
        setTriggerPhoneNumberRevalidation2(true);
      }
      if (amountLoadingSymbol !== "false") {
        triggerHapticFeedback();
        setAmountError(true);
        setTriggerAmountRevalidation2(true);
      }

      if (
        betIdLoadingSymbol !== "false" ||
        phoneNumberLoadingSymbol !== "false" ||
        amountLoadingSymbol !== "false"
      ) {
        setLoading2(false);
        return;
      }

      const formData = {
        betId: betId,
        number: number,
        amount: amount,
      };
      console.log(formData);
    }, 1000);
  }

  function handleSubmit2(value: any) {
    setLoading2(true);
    setTimeout(() => {
      if (betIdLoadingSymbol !== "false") {
        triggerHapticFeedback();
        setBetIdError(true);
        setTriggerBetIdRevalidation2(true);
      }
      if (phoneNumberLoadingSymbol !== "false") {
        triggerHapticFeedback();
        setPhoneNumberError(true);
        setTriggerPhoneNumberRevalidation2(true);
      }
      if (
        betIdLoadingSymbol !== "false" ||
        phoneNumberLoadingSymbol !== "false"
      ) {
        setLoading2(false);
        return;
      }

      const formData = {
        betId: betId,
        number: number,
        amount: value,
      };
      console.log(formData);
    }, 1000);
  }

  ///For BetId Modal Operations
  const [betIdModal, setBetIdModal] = useState<boolean>(false);
  function openBetIdModal() {
    setBetIdModal(true);
  }

  function closeBetIdModal() {
    setBetIdModal(false);
  }

  function chooseBetId(value: any) {
    console.log(value);
    const value2 = value.toString();
    setBetId(value2);
    setBetIdModal(false);
  }

  //animation adverts
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slidesRef = useRef<any>(null);
  const {width} = useWindowDimensions();
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef?.current?.scrollToIndex({index: currentIndex + 1});
    } else if (currentIndex === slides.length - 1) {
      slidesRef?.current?.scrollToIndex({index: 0});
    } else {
      console.log("Last item.");
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     scrollTo();
  //   }, 4000);
  // }, [scrollTo]);

  // Auto-Verifying inputs on first load
  useEffect(() => {
    SignUpBetIdVerification();
    wrapperSignUpPhoneNumberVerification();
  }, []);

  const [show, setShow] = useState(true);
  function displayNotification() {
    setShow(false);
    triggerHapticFeedback();
    setTimeout(() => {
      setShow(true);
    }, 3800);
  }

  const triggerHapticFeedback = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <ExploreHeader3 />
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.background,
        }}
      >
        <View style={styles.transaction_template_container_header_1}>
          <TouchableOpacity
            onPressIn={() => props.navigation.goBack()}
            style={{
              paddingTop: 3,
              paddingBottom: 3,
              paddingRight: 3,
              backgroundColor: "transparent",
              borderColor: Colors.welcomeText,
              opacity: 0.6,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <MaterialIcons
              name='arrow-back-ios-new'
              size={21}
              color={Colors.welcomeText}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.welcomeText,
              fontWeight: "600",
              opacity: 0.8,
              fontSize: 21,
            }}
          >
            Dépôts
          </Text>
          <View></View>
        </View>
        <ToastNotification
          show={show}
          text='Désolé Seuls les numéros béninois sont autorisés'
          textColor={Colors.toastText}
          icon={
            <AntDesign
              name='exclamationcircleo'
              size={40}
              color={Colors.toastText}
            />
          }
        />

        <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
          <ScrollView
            scrollEnabled={true}
            automaticallyAdjustKeyboardInsets={true}
            alwaysBounceVertical={true}
            showsVerticalScrollIndicator={false}
            style={styles.container3}
          >
            <View style={styles.container2}>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: Colors.background,
                }}
              >
                <FlatList
                  renderItem={({item}) => <AdvertItem item={item} />}
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
                />
              </View>
              <Paginator data={slides} scrollX={scrollX} />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: Colors.depositBackground,
                padding: 18,
                borderRadius: 5,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 30,
                  backgroundColor: Colors.inputBackground,
                  borderRadius: 8,
                  borderColor:
                    betIdError || betIdError1 || betIdError2 || betIdError3
                      ? "red"
                      : index === 1
                        ? Colors.default1
                        : betIdLoadingSymbol === "false"
                          ? Colors.default1
                          : "transparent",
                  borderWidth: 1.5,
                  position: "relative",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: -34,
                    right: 2,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "700",
                      color: Colors.welcomeText,
                      opacity: 0.7,
                    }}
                  >
                    Bet Id
                  </Text>
                </View>
                <View
                  style={{
                    position: "absolute",
                    top: -18,
                    right: 2,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  {betIdError && (
                    <Text
                      style={{fontWeight: "600", fontSize: 12, color: "red"}}
                    >
                      * Please enter a valid Bet Id
                    </Text>
                  )}
                  {betIdError1 && (
                    <Text
                      style={{fontWeight: "600", fontSize: 12, color: "red"}}
                    >
                      * Bet Id too short
                    </Text>
                  )}
                  {betIdError2 && (
                    <Text
                      style={{fontWeight: "600", fontSize: 12, color: "red"}}
                    >
                      * Bet Id must be numbers
                    </Text>
                  )}
                  {betIdError3 && (
                    <Text
                      style={{fontWeight: "600", fontSize: 12, color: "red"}}
                    >
                      * Too short and not numbers
                    </Text>
                  )}
                </View>
                <TextInput
                  // ref={inputRef}
                  value={betId}
                  onChangeText={setBetId}
                  onFocus={() => setItemOnFocus(1)}
                  onBlur={setItemOnBlur}
                  autoCorrect={false}
                  placeholderTextColor={Colors.placeHolderTextColor}
                  autoCapitalize='none'
                  placeholder='1xBet identifiant'
                  style={[defaultStyles.inputField]}
                  selectionColor={Colors.default1}
                  onEndEditing={SignUpBetIdVerification}
                  keyboardType='number-pad'
                ></TextInput>
                <Text style={{paddingLeft: 2, paddingRight: 2, opacity: 1}}>
                  <FontAwesome6
                    name='id-card'
                    size={16}
                    color={
                      betIdError || betIdError1 || betIdError2 || betIdError3
                        ? "red"
                        : index === 1
                          ? Colors.default1
                          : betIdLoadingSymbol === "false"
                            ? Colors.default1
                            : "rgba(128, 128, 128, 0.5)"
                    }
                  />
                </Text>
                <TouchableOpacity
                  onPress={openBetIdModal}
                  style={{paddingRight: 10.4, paddingLeft: 5}}
                >
                  <MaterialIcons
                    name='arrow-drop-down'
                    size={30}
                    color={Colors.primary3}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundColor: Colors.depositBackground,
                paddingVertical: 18,
                paddingHorizontal: 18,
                paddingTop: 32,
                borderRadius: 5,
                marginTop: 18,
                position: "relative",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 18,
                  backgroundColor: Colors.inputBackground,
                  borderRadius: 8,
                  borderColor: phoneNumberError
                    ? "red"
                    : index === 3
                      ? Colors.default1
                      : phoneNumberLoadingSymbol === "false"
                        ? Colors.default1
                        : "transparent",
                  borderWidth: 1.5,
                  position: "relative",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: -34,
                    right: 2,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "700",
                      color: Colors.welcomeText,
                      opacity: 0.7,
                    }}
                  >
                    Number
                  </Text>
                </View>
                <View style={{position: "absolute", top: -19, right: 2}}>
                  {phoneNumberError && (
                    <Text
                      style={{fontWeight: "600", fontSize: 12, color: "red"}}
                    >
                      * Please enter a valid phone number
                    </Text>
                  )}
                </View>

                <PopInAnimation
                  scaleSpeed={0.6}
                  opacitySpeed={800}
                  style={{
                    position: "absolute",
                    top: -15,
                    right: 2,
                    borderRadius: 2,
                    backgroundColor: Colors.default1,
                  }}
                >
                  {numberCollector === number && !network2 && (
                    <Text
                      style={{
                        fontWeight: "900",
                        fontSize: 8,
                        color: "white",

                        paddingLeft: 4,
                        paddingRight: 4,
                      }}
                    >
                      {currentNetwork}
                    </Text>
                  )}

                  {network2 && network.length === 1 && !phoneNumberError && (
                    <Text
                      style={{
                        fontWeight: "900",
                        fontSize: 8,
                        color: "white",

                        paddingLeft: 4,
                        paddingRight: 4,
                      }}
                    >
                      {network2}
                    </Text>
                  )}
                </PopInAnimation>

                <CountryCode
                  displayNotification={displayNotification}
                  countryFlag={countryFlag}
                  countryCode={countryCode}
                  changeCountryCode={changeCountryCode}
                  changeCountryFlag={changeCountryFlag}
                />
                <View
                  style={{
                    paddingVertical: 1,
                    paddingHorizontal: 5,
                    borderRadius: 3.5,
                    margin: 3,
                    marginRight: 5,
                    backgroundColor: Colors.primary3,
                    opacity: 0.8,
                  }}
                >
                  <Text
                    style={{
                      color: Colors.countrySelectionTextColor,
                      fontWeight: "800",
                      fontSize: 12,
                    }}
                  >
                    {countryCode}
                  </Text>
                </View>
                <TextInput
                  value={number}
                  onChangeText={setNumber}
                  onFocus={() => setItemOnFocus(2)}
                  onBlur={setItemOnBlur}
                  autoCorrect={false}
                  placeholderTextColor={Colors.placeHolderTextColor}
                  autoCapitalize='none'
                  placeholder='Numéro de téléphone'
                  style={{
                    height: 44,
                    opacity: 1,
                    backgroundColor: "transparent",
                    color: Colors.welcomeText,
                    flex: 1,
                    fontWeight: "800",
                    fontSize: 12,
                  }}
                  selectionColor={Colors.default1}
                  onEndEditing={wrapperSignUpPhoneNumberVerification}
                  keyboardType='number-pad'
                ></TextInput>
                <View style={{paddingRight: 10.4}}>
                  <Feather
                    name='phone-call'
                    size={15}
                    color={
                      phoneNumberError
                        ? "red"
                        : index === 2
                          ? Colors.default1
                          : phoneNumberLoadingSymbol === "false"
                            ? Colors.default1
                            : "rgba(128, 128, 128, 0.5)"
                    }
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginTop: 18,
                backgroundColor: Colors.depositBackground,
                padding: 18,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "700",
                  color: Colors.welcomeText,
                  opacity: 0.7,
                }}
              >
                Amount
              </Text>
              <View
                style={{
                  height: 135,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                  gap: 10,
                  marginTop: 15,
                }}
              >
                {slides3.map((choice, index) => {
                  return (
                    <TouchableOpacity
                      style={{
                        width: 110,
                        height: 62,
                        backgroundColor: Colors.inputBackground,
                        borderRadius: 8,
                      }}
                      onPress={() => handleSubmit2(choice.amount)}
                    >
                      <View
                        style={{
                          height: 20,
                          width: "100%",
                          backgroundColor: "rgba(73, 166, 106, 0.2)",
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 12,
                            color: Colors.default1,
                            fontWeight: "500",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 11,
                            }}
                          >
                            {" "}
                            Pay
                          </Text>
                          <Text
                            style={{
                              fontSize: 11,
                            }}
                          >
                            {" "}
                            XOF
                          </Text>{" "}
                          {formatNumberWithCommasAndDecimal2(choice.amount)}
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 4,
                          alignItems: "center",
                          justifyContent: "center",
                          flex: 1,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            color: Colors.welcomeText,
                            fontWeight: "900",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 9,
                              fontWeight: "900",
                            }}
                          >
                            {" "}
                            XOF
                          </Text>{" "}
                          {formatNumberWithCommasAndDecimal2(choice.amount)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 22,
                  backgroundColor: Colors.inputBackground,
                  borderRadius: 8,
                  borderColor: amountError
                    ? "red"
                    : index === 2
                      ? Colors.default1
                      : amountLoadingSymbol
                        ? Colors.default1
                        : "transparent",
                  borderWidth: 1.5,
                  position: "relative",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    top: -18,
                    right: 2,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  {amountError && (
                    <Text
                      style={{fontWeight: "600", fontSize: 12, color: "red"}}
                    >
                      * Please enter a valid Amount
                    </Text>
                  )}
                </View>

                <TextInput
                  value={amount}
                  onChangeText={setAmount}
                  onFocus={() => setItemOnFocus(2)}
                  onBlur={setItemOnBlur}
                  autoCorrect={false}
                  placeholderTextColor={Colors.placeHolderTextColor}
                  autoCapitalize='none'
                  placeholder='500 et plus'
                  style={[defaultStyles.inputField]}
                  selectionColor={Colors.default1}
                  onEndEditing={SignUpAmountVerification}
                  keyboardType='number-pad'
                ></TextInput>
                <Text style={{paddingLeft: 2, paddingRight: 10.4, opacity: 1}}>
                  <FontAwesome6
                    name='money-bill-wave'
                    size={16}
                    color={
                      amountError
                        ? "red"
                        : index === 2
                          ? Colors.default1
                          : amountLoadingSymbol
                            ? Colors.default1
                            : "rgba(128, 128, 128, 0.5)"
                    }
                  />
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.default1,
                height: 50,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                marginTop: 30,
                marginBottom: 27,
                opacity: loading2 ? 0.5 : 1,
              }}
              onPress={handleSubmit}
            >
              {loading2 && <ActivityIndicator size='small' color='white' />}
              <Text style={defaultStyles.btnText}>Procéder</Text>
            </TouchableOpacity>
            {/* <View
              style={{
                backgroundColor: Colors.welcomeText,
                marginBottom: 40,
                height: 1.5,
                width: "70%",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                opacity: 0.4,
                // position: "relative",
              }}
            >
              <Text
                style={{
                  position: "absolute",
                  width: 50,
                  backgroundColor: Colors.background,
                  textAlign: "center",
                  color: Colors.welcomeText,
                  opacity: 2,
                }}
              >
                ou
              </Text>
            </View> */}
            <TouchableOpacity
              style={{
                // backgroundColor: "white",
                // height: 50,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                marginBottom: 150,
                opacity: loading2 ? 0.5 : 1,
                // borderColor: Colors.default1,
                // borderWidth: 1.3,
              }}
              onPress={() => props.navigation.push("sharingDeposit")}
            >
              <Text
                style={[
                  defaultStyles.btnText,
                  {
                    color: Colors.welcomeText,
                    marginLeft: 2,
                  },
                ]}
              >
                <Text style={{textDecorationLine: "underline"}}>
                  Partager à un ami.
                </Text>{" "}
                <MaterialCommunityIcons name='share' size={20} />
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </View>
      {betIdModal ? (
        <BetIdModalPage
          closeBetIdModal={closeBetIdModal}
          chooseBetId={chooseBetId}
        />
      ) : null}
      {networkModal === "" ? null : (
        <NetworkModalPage
          changeNetworkModal={changeNetworkModal}
          networkModal={networkModal}
          network={network}
          runNetworkCheck={runNetworkCheck}
          currentNetwork={currentNetwork}
          closeNetworkModal={closeNetworkModal}
          closeNetworkModal2={closeNetworkModal2}
          proceedWithNetworkModal={proceedWithNetworkModal}
          proceedWithNetworkModal2={proceedWithNetworkModal2}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 8,
    height: percentageHeight,
  },
  container2: {
    alignSelf: "center",
    height: 100,
    position: "relative",
    marginBottom: 10,

    width: "100%",
    borderRadius: 12,
  },
  container3: {
    display: "flex",
    borderRadius: 8,
    flex: 1,
    height: percentageHeight2,
    paddingHorizontal: 12,
  },
  xxxx: {
    fontWeight: "900",
    color: Colors.welcomeText,
    fontSize: 28,
  },
  xxxxx: {
    fontWeight: "300",
    color: Colors.welcomeText,
    fontSize: 16,
  },
  transaction_template_container_header_1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "700",
    flexDirection: "row",
    padding: 15,
  },
  child: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
});

export default Deposit;
