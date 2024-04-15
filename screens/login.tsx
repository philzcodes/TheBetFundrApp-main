/* eslint-disable */
import React, {useState, useEffect, useRef} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors, {switchConstantValue} from "@/constants/Colors";
import ExploreHeader3 from "@/components/ExploreHeader3";
import {defaultStyles} from "@/constants/Styles";
// Calculate the percentage value

const Login = ({navigation}: any) => {
  const [loading2, setLoading2] = useState(false);
  const [iconVisibility, setIconVisibility] = useState(false);
  const [inputIconColor, setInputIconColor] = useState(
    "rgba(128, 128, 128, 0.7)"
  );
  const [inputIconColor2, setInputIconColor2] = useState(
    "rgba(128, 128, 128, 0.5)"
  );
  const [inputBorderColor, setInputBorderColor] = useState("transparent");
  const [inputBorderColor2, setInputBorderColor2] = useState("transparent");
  const [index, setIndex] = useState(0);

  // EXTRA SETTINGS ........
  // Input fucus and blur setting
  async function setItemOnFocus(index: React.SetStateAction<number>) {
    setIndex(index);
  }

  function setItemOnBlur() {
    setIndex(0);
  }

  function changePasswordVisibility() {
    setIconVisibility((prev) => {
      return !prev;
    });
  }
  //function to close keyboard
  const inputRef = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);
  const inputRef5 = useRef<TextInput>(null);
  const inputRef6 = useRef<TextInput>(null);
  const inputRef7 = useRef<TextInput>(null);
  const handleDismissKeyboard = () => {
    inputRef.current?.blur();
    inputRef2.current?.blur();
    inputRef3.current?.blur();
    inputRef4.current?.blur();
    inputRef5.current?.blur();
    inputRef6.current?.blur();
    inputRef7.current?.blur();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // VERIFYINGING ALL INPUTS ......
  // verifying email field
  const [emailError, setEmailError] = useState(false);
  const [emailLoadingSymbol, setEmailLoadingSymbol] = useState("");
  const [triggerEmailRevalidation, setTriggerEmailRevalidation] =
    useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);
  const SignUpEmailVerification = () => {
    if (email === "") {
      return;
    }
    if (!triggerEmailRevalidation) {
      setEmailLoadingSymbol("true");
      setTimeout(() => {
        if (!isValidEmail) {
          setEmailError(true);
          setEmailLoadingSymbol("");
          setTriggerEmailRevalidation(true);
        } else {
          setEmailError(false);
          setEmailLoadingSymbol("false");
          setTriggerEmailRevalidation(true);
        }
      }, 300);
    }
  };
  // Verifying Password field
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLoadingSymbol, setPasswordLoadingSymbol] = useState("");
  const [triggerPasswordRevalidation, setTriggerPasswordRevalidation] =
    useState(false);
  const isValidPassword = password.length >= 4;
  const SignUpPasswordVerification = () => {
    if (password === "") {
      return;
    }
    if (!triggerPasswordRevalidation) {
      setPasswordLoadingSymbol("true");
      setTimeout(() => {
        if (!isValidPassword) {
          setPasswordError(true);
          setPasswordLoadingSymbol("");
          setTriggerPasswordRevalidation(true);
        } else {
          setPasswordError(false);
          setPasswordLoadingSymbol("false");
          setTriggerPasswordRevalidation(true);
        }
      }, 300);
    }
  };

  // REVERIFYINGING ALL INPUTS ......
  // Re-verifying email field
  const [triggerEmailRevalidation2, setTriggerEmailRevalidation2] =
    useState(false);

  if (triggerEmailRevalidation) {
    setTimeout(() => {
      if (!isValidEmail) {
        if (email === "") {
          setEmailError(false);
        }
        if (email !== "") {
          setEmailError(true);
        }
        setEmailLoadingSymbol("");
      } else {
        setEmailError(false);
        setEmailLoadingSymbol("false");
      }
    }, 300);
  }
  if (triggerEmailRevalidation2) {
    setTimeout(() => {
      if (!isValidEmail) {
        if (email === "") {
          //  setEmailError(false);
        }
        if (email !== "") {
          setEmailError(true);
        }
        setEmailLoadingSymbol("");
      } else {
        setEmailError(false);
        setEmailLoadingSymbol("false");
      }
    }, 300);
  }
  // Re-verifying password field
  const [triggerPasswordRevalidation2, setTriggerPasswordRevalidation2] =
    useState(false);
  if (triggerPasswordRevalidation) {
    setTimeout(() => {
      if (!isValidPassword) {
        if (password === "") {
          setPasswordError(false);
        }
        if (password !== "") {
          setPasswordError(true);
        }
        setPasswordLoadingSymbol("");
      } else {
        setPasswordError(false);
        setPasswordLoadingSymbol("false");
      }
    }, 300);
  }

  if (triggerPasswordRevalidation2) {
    setTimeout(() => {
      if (!isValidPassword) {
        if (password === "") {
          // setPasswordError(false);
        }
        if (password !== "") {
          setPasswordError(true);
        }
        setPasswordLoadingSymbol("");
      } else {
        setPasswordError(false);
        setPasswordLoadingSymbol("false");
      }
    }, 300);
  }

  //HANDLING SUBMISSION
  function handleSubmit() {
    setLoading2(true);
    setTimeout(() => {
      if (emailLoadingSymbol !== "false") {
        setEmailError(true);
        setTriggerEmailRevalidation2(true);
      }
      if (passwordLoadingSymbol !== "false") {
        setPasswordError(true);
        setTriggerPasswordRevalidation2(true);
      }
      const formData = {
        email: email,
        password: password,
      };

      console.log(formData);
      setLoading2(false);
      navigation.push("MainNavigator");
    }, 1000);
  }

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.background,
          position: "relative",
        }}
      >
        <ExploreHeader3 />
        <View style={{display: "flex", height: 190}}>
          <View style={styles.transaction_template_container_header_1}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
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
              <Ionicons
                name='chevron-back'
                size={27}
                color={Colors.welcomeText}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: Colors.welcomeText,
                fontWeight: "600",
                opacity: 1,
                fontSize: 18.5,
                marginLeft: "27%",
              }}
            >
              Connecter
            </Text>
          </View>

          <View style={styles.container2}>
            <Text
              style={{
                color: Colors.welcomeText,
                fontWeight: "600",
                opacity: 1,
                fontSize: 24,
                marginLeft: "2%",
              }}
            >
              Se Connecter
            </Text>
            <Text
              style={{
                color: Colors.welcomeText,
                fontWeight: "400",
                opacity: 0.4,
                fontSize: 14,
                marginLeft: "2%",
              }}
            >
              Connectez-vous à votre compte
            </Text>
          </View>
        </View>
        <ScrollView
          style={{
            display: "flex",
            gap: 10,
            padding: 20,
            backgroundColor: Colors.inputBackground,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flex: 8,
            paddingBottom: 80,
          }}
          scrollEnabled={true}
          automaticallyAdjustKeyboardInsets={true}
          alwaysBounceVertical={true}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
              backgroundColor: Colors.background,
              borderRadius: 8,
              borderColor: emailError
                ? "red"
                : index === 2
                  ? Colors.default1
                  : "transparent",
              borderWidth: 1.5,
              position: "relative",
            }}
          >
            <View style={{position: "absolute", top: -19, right: 2}}>
              {emailError && (
                <Text style={{fontWeight: "600", fontSize: 12, color: "red"}}>
                  * Please enter a valid mail
                </Text>
              )}
            </View>
            <Text style={{paddingLeft: 12, paddingRight: 2, opacity: 1}}>
              <MaterialCommunityIcons
                name='email-fast-outline'
                size={18}
                color={
                  emailError
                    ? "red"
                    : index === 2
                      ? Colors.default1
                      : "rgba(128, 128, 128, 0.5)"
                }
              />
            </Text>
            <TextInput
              ref={inputRef2}
              value={email}
              onChangeText={setEmail}
              onFocus={() => setItemOnFocus(2)}
              onBlur={setItemOnBlur}
              placeholderTextColor={Colors.placeHolderTextColor}
              autoCapitalize='none'
              placeholder='E-mail'
              autoCorrect={false}
              style={[defaultStyles.inputField]}
              onEndEditing={SignUpEmailVerification}
            ></TextInput>
            <View style={{paddingRight: 10.4}}>
              {emailLoadingSymbol === "true" ? (
                <ActivityIndicator size='small' color={Colors.primary3} />
              ) : emailLoadingSymbol === "false" ? (
                <MaterialIcons
                  name='verified'
                  size={19}
                  color={Colors.default1}
                />
              ) : null}
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 18,
              backgroundColor: Colors.background,
              borderRadius: 8,
              borderColor: passwordError
                ? "red"
                : index === 5
                  ? Colors.default1
                  : "transparent",
              borderWidth: 1.5,
              position: "relative",
            }}
          >
            <View style={{position: "absolute", top: -19, right: 2}}>
              {passwordError && (
                <Text style={{fontWeight: "600", fontSize: 12, color: "red"}}>
                  * Password is too short
                </Text>
              )}
            </View>

            <Text style={{paddingLeft: 12, paddingRight: 2, opacity: 1}}>
              <MaterialIcons
                name='password'
                size={18}
                color={
                  passwordError
                    ? "red"
                    : index === 5
                      ? Colors.default1
                      : "rgba(128, 128, 128, 0.5)"
                }
              />
            </Text>
            <TextInput
              ref={inputRef5}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setItemOnFocus(5)}
              onBlur={setItemOnBlur}
              secureTextEntry={iconVisibility}
              autoCorrect={false}
              placeholderTextColor={Colors.placeHolderTextColor}
              autoCapitalize='none'
              placeholder='Mot de passe'
              style={[defaultStyles.inputField]}
              selectionColor={Colors.default1}
              onEndEditing={SignUpPasswordVerification}
            ></TextInput>

            <TouchableOpacity
              style={{paddingRight: 15, paddingLeft: 6, opacity: 1}}
              onPress={changePasswordVisibility}
            >
              {iconVisibility ? (
                <Ionicons
                  name='eye-off'
                  size={18}
                  color={
                    passwordError
                      ? "red"
                      : index === 5
                        ? Colors.default1
                        : "rgba(128, 128, 128, 0.5)"
                  }
                />
              ) : (
                <Ionicons
                  name='eye'
                  size={18}
                  color={
                    passwordError
                      ? "red"
                      : index === 5
                        ? Colors.default1
                        : "rgba(128, 128, 128, 0.5)"
                  }
                />
              )}
            </TouchableOpacity>
            {(passwordLoadingSymbol === "true" ||
              passwordLoadingSymbol === "false") && (
              <View style={{paddingRight: 12}}>
                {passwordLoadingSymbol === "true" ? (
                  <ActivityIndicator size='small' color={Colors.primary3} />
                ) : passwordLoadingSymbol === "false" ? (
                  <MaterialIcons
                    name='verified'
                    size={19}
                    color={Colors.default1}
                  />
                ) : null}
              </View>
            )}
          </View>
          <View
            style={{
              marginTop: 5,
              marginBottom: 60,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "800",
                  color: Colors.default1,
                }}
              >
                Mot de passe oublié?
              </Text>
            </TouchableOpacity>
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
              marginTop: 10,
              marginBottom: 40,
              opacity: loading2 ? 0.5 : 1,
            }}
            onPress={handleSubmit}
          >
            {loading2 && <ActivityIndicator size='small' color='white' />}
            <Text style={defaultStyles.btnText}>Continuer</Text>
          </TouchableOpacity>
          <View
            style={{
              marginTop: 10,
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginBottom: 40,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                color: Colors.welcomeText,
                marginRight: 5,
              }}
            >
              Vous n'avez pas de compte?
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: Colors.default1,
                }}
              >
                Inscrivez-vous ici
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 10,
    padding: 20,
    backgroundColor: "red",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 8,
    paddingBottom: 300,
  },
  transaction_template_container_header_1: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    fontWeight: "700",
    gap: 12,
    flexDirection: "row",
    marginBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    flex: 0.5,
  },
  container2: {
    display: "flex",
    gap: 3,
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 8,
    flex: 1.2,
  },
});

export default Login;
