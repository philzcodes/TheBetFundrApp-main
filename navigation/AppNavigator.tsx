/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Home from "../screens/home";
import Deposit from "../screens/deposit";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Profile from "@/screens/profile";
import Referral from "@/screens/referral";
import Login from "@/screens/login";
import Signup from "@/screens/signup";
import SecondWelcomePage from "@/screens/secondWelcomePage";
import ThirdWelcomePage from "@/screens/thirdWelcomePage";
import Transactions from "@/screens/transactions";
import Community from "@/screens/community";
import SharingDeposit from "@/screens/sharingDeposit";
import Withdraw from "@/screens/Withdraw";

function HomeNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

function CommunityNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="community" component={Community} />
    </Stack.Navigator>
  );
}
function ReferralNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="referral" component={Referral} />
    </Stack.Navigator>
  );
}
function ProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}

function MainNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Colors.tabbarIcons,
          borderTopColor: "rgba(128, 128, 128, 0.3)",
        },
        headerShown: false,
        tabBarActiveTintColor: Colors.activeTabbarIcons,
        tabBarInactiveTintColor: Colors.tabbarLabelColor,
        tabBarLabelStyle: {
          fontFamily: "mon-sb",
          fontWeight: "bold",
          paddingBottom: 5,
        },
        tabBarIcon: ({ color }) => {
          if (route.name === "Home") {
            return <FontAwesome5 name="home" color={color} size={18} />;
          } else if (route.name === "Profile") {
            return (
              <Ionicons name="person-circle-sharp" size={21} color={color} />
            );
          } else if (route.name === "Community") {
            return (
              <MaterialCommunityIcons
                name="tray-arrow-down"
                size={22.5}
                color={color}
              />
            );
          } else if (route.name === "Withdraw") {
            return (
              <MaterialCommunityIcons
                name="tray-arrow-up"
                size={22.5}
                color={color}
              />
            );
          } else if (route.name === "Referral") {
            return (
              <FontAwesome6
                name="money-bill-transfer"
                size={18}
                color={color}
              />
            );
          }
        },
      })}
    >
      {/* <Tabs.Screen name='Deposit' component={DepositNavigator} /> */}
      <Tabs.Screen name="Home" component={HomeNavigator} />
      <Tabs.Screen name="Community" component={CommunityNavigator} />
      <Tabs.Screen name="Referral" component={ReferralNavigator} />
      <Tabs.Screen name="Profile" component={ProfileNavigator} />
    </Tabs.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Screen name="withdraw" component={Withdraw} />
        <Stack.Screen name="deposit" component={Deposit} />
        <Stack.Screen name="sharingDeposit" component={SharingDeposit} />

        <Stack.Screen name="transactions" component={Transactions} />
        <Stack.Screen name="secondWelcomePage" component={SecondWelcomePage} />
        <Stack.Screen name="thirdWelcomePage" component={ThirdWelcomePage} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
