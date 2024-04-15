/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-var-requires */

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import Colors, {switchConstantValue} from "@/constants/Colors";
import {defaultStyles} from "@/constants/Styles";
import ExploreHeader4 from "@/components/ExploreHeader4";
const image = require("@/assets/images/Logo.webp");
const image1 = require("@/assets/images/Logo1.webp");
// Calculate the percentage value

const ThirdWelcomePage = ({navigation}: any) => {
  function handleSubmit(value: any) {
    if (value === 1) {
      navigation.push("signup");
    } else if (value === 2) {
      navigation.push("login");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        position: "relative",
      }}
    >
      <View style={{display: "flex", height: 150}}>
     <ExploreHeader4 />
      </View>
      <View
        style={{
          display: "flex",
          gap: 10,
          padding: 20,
          backgroundColor: Colors.inputBackground,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flex: 1,
          paddingBottom: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={Colors.background === "#0C121D" ? image1 : image}
          style={{width: 125, height: 30, marginBottom: 30}}
        />

        <Text
          style={{
            color: Colors.welcomeText,
            fontWeight: "600",
            opacity: 1,
            fontSize: 16,
            marginLeft: "2%",
            marginBottom: 10,
          }}
        >
          Bienvenue chez BetFundr
        </Text>
        <Text
          style={{
            color: Colors.welcomeText,
            fontWeight: "300",
            opacity: 0.4,
            fontSize: 14,
            marginLeft: "2%",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Rejoignez la communauté BetFundr aujourd'hui et simplifiez votre
          transaction avec 1xbet, obtenez des prédictions précises et discutez
          avec d'autres utilisateurs. Pour commencer, veuillez vous connecter à
          votre compte ou en créer un nouveau.
        </Text>

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
            width: "100%",
          }}
          onPress={() => handleSubmit(1)}
        >
          <Text style={defaultStyles.btnText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "transparent",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            marginBottom: 20,
            borderWidth: 1.6,
            borderColor: Colors.default1,
            width: "100%",
          }}
          onPress={() => handleSubmit(2)}
        >
          <Text
            style={{
              color: Colors.default1,
              fontSize: 16,
              fontFamily: "mon-b",
            }}
          >
            Se connecter
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            marginBottom: 4,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: Colors.welcomeText,
              marginRight: 5,
              textAlign: "center",
              opacity: 0.6,
            }}
          >
            En appuyant sur "Créer un compte" ou "Connexion", vous acceptez nos
            conditions.
          </Text>
        </View>
      </View>
    </View>
  );
};


export default ThirdWelcomePage;
