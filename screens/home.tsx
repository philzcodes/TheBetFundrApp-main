/* eslint-disable */

import ExploreHeader from "../components/ExploreHeader";
import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Display from "../components/(userscomponent)/(display)/display";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {FontAwesome6} from "@expo/vector-icons";
import Colors, {switchConstantValue} from "../constants/Colors";
import TransactionTemplate from "../components/(userscomponent)/(TransactionTemplateUsers)/TransactionTemplateHome";
import Spinner from "react-native-loading-spinner-overlay";
import { Link } from "@react-navigation/native";
<MaterialCommunityIcons name='hand-wave-outline' size={24} color='black' />;
const screenHeight = Dimensions.get("window").height;
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from "@/redux/home/firstSlice";
import data from '../components/(userscomponent)/(TransactionTemplateUsers)/data';
const Stack = createNativeStackNavigator();

// Calculate the percentage value
const percentageHeight = screenHeight * 0.375;
const percentageHeight2 = screenHeight * 1;
const Home = (props: any, {navigation}: any) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulating a delay or async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [data, setData] = useState<any>();
  const [isOnline, setIsOnline] = useState(true);

  // Filter deposit transactions
  const allDeposits = data?.transactionHistory?.filter(
    (transaction: any) => transaction.fundingType === "deposits"
  );

  const totalDeposits = allDeposits
    ?.filter((data: {status: string}) => data.status === "Successful")
    .reduce((total: any, transaction: any) => {
      return (total += transaction.amount);
    }, 0);

  // Filter withdrawal transactions
  const allWithdrawals = data?.transactionHistory?.filter(
    (transaction: any) => transaction.fundingType === "withdrawals"
  );

  const totalWithdrawals = allWithdrawals
    ?.filter((data: {status: string}) => data.status === "Successful")
    .reduce((total: any, transaction: any) => {
      return (total += transaction.amount);
    }, 0);

  // Filter deposit transactions with status "pending"
  const pendingDeposits = data?.transactionHistory.filter(
    (transaction: any) =>
      transaction.fundingType === "deposits" && transaction.status === "Pending"
  );

  // Filter withdrawal transactions with status "pending"
  const pendingWithdrawals = data?.transactionHistory?.filter(
    (transaction: any) =>
      transaction.fundingType === "withdrawals" &&
      transaction.status === "Pending"
  );

  // Calculate total cost of pending deposits

  const totalPendingDepositAmount = pendingDeposits?.reduce(
    (total: any, transaction: any) => {
      return (total += transaction.amount);
    },
    0
  );

  // Calculate total cost of pending withdrawals
  const totalPendingWithdrawalAmount = pendingWithdrawals?.reduce(
    (total: any, transaction: any) => {
      return (total += transaction.amount);
    },
    0
  );

  const [receipt, setReceipt] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(false);
  };

  function showReceipt(
    time: any,
    amount: any,
    identifierId: any,
    betId: any,
    status: any,
    type: any,
    momoName: any,
    momoNumber: any,
    withdrawalCode: any
  ) {
    setIsVisible(true);
    setReceipt({
      time,
      amount,
      identifierId,
      betId,
      status,
      type,
      momoName,
      momoNumber,
      withdrawalCode,
    });
  }
  


const user = useSelector((state: any) => state);
const dispatch = useDispatch<any>();
useEffect(() => {
  dispatch(fetchData());
}, [])
console.log(user)
  // <TouchableOpacity onPress={() => dispatch(fetchData())}></TouchableOpacity>;

    
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <ExploreHeader />

      {data ? (
        <View style={styles.container3}>
          <Spinner
            visible={loading}
            textContent={"Loading..."}
            textStyle={{color: "#FFF"}}
          />
        </View>
      ) : (
        <ScrollView
          scrollEnabled={true}
          alwaysBounceVertical={true}
          style={styles.container3}
        >
          <View style={styles.container2}>
            <Text style={styles.xxxx}>Hello,&nbsp; Dike</Text>

            <Image
              source={require("../assets/images/wavingHand.png")}
              style={{width: 24, height: 24}}
            />
          </View>
          <View style={styles.container}>
            <Display
              props={props}
              title='Dépôt'
              term={1}
              style={{
                color: "white",
                color2: "white",
                color3: Colors.default1,
                background: Colors.default1,
                icon: (
                  <MaterialCommunityIcons
                    name='piggy-bank-outline'
                    size={18}
                    color={Colors.primary1}
                  />
                ),
              }}
              
            />
            <Display
              props={props}
              term={2}
              title='Retirer'
              style={{
                color: "white",
                color2: "rgba(256, 256, 256, 0.5)",
                color3: "rgba(256, 256, 256, 1)",
                // background: "rgba(256, 256, 256, .07)",
                background: "rgba(120, 120, 120, 1)",
                icon: (
                  <FontAwesome6
                    name='circle-dollar-to-slot'
                    size={18}
                    color={Colors.primary1}
                  />
                ),
              }}
            />
          </View>
          <View
            style={{
              height: 80,
              display: "flex",
              backgroundColor: "transparent",
              borderWidth: 3,
              borderRadius: 5,
              borderColor: "white",
              marginHorizontal: 10,
            }}
          >
            {/* <TouchableOpacity onPressIn={() => switchConstantValue}>
              <Ionicons name='close-outline' size={70} />
            </TouchableOpacity> */}
            {/* <Link href={"/login"}>Login</Link>
            <Link href={"/signup"}>sign up</Link>
            <Link href={"/(modals)/booking"}>Bookings</Link>
            <Link href={"/listing/1223"}>Listing details</Link> */}
          </View>

          <TransactionTemplate
          props={props}
            navigation={navigation}
            title={{
              name: "Recent Activities",
              icon: (
                <MaterialIcons
                  name='history'
                  size={20}
                  color={Colors.welcomeText}
                />
              ),
            }}
            select={{
              firstSelect: {big: "Voir tout", small: "Tout"},
              secondSelect: {big: "Voir les Dépôts", small: "Dépôts"},
              thirdSelect: {big: "Afficher les Retraits", small: "Retraits"},
            }}
            totalWithdrawals={totalWithdrawals}
            totalDeposits={totalDeposits}
            data={data?.transactionHistory}
            allData={data}
            showReceipt={showReceipt}
          />
        </ScrollView>
      )}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//   gap: 15,
//   padding: 15,
//   border-radius: 20,
//   background: "rgba(0, 0, 0, 0.4)",
//     marginTop : 40
//   },

//   flexDirection: "row",
//     margin: 9,
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
// })

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
    display: "flex",
    gap: 10,
    padding: 10,
    borderRadius: 8,
    marginTop: 25,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
  },
  container3: {
    display: "flex",
    borderRadius: 8,
    flex: 1,
    height: percentageHeight2,
    
  },
  xxxx: {
    fontWeight: "800",
    color: Colors.welcomeText,
    fontSize: 20,
  },
});

export default Home;

//  <Text style={{}}>Home</Text>
//       <Link href={"/(modals)/login"}>login</Link>

//       <Link href={"/listing/37"}>Listing details</Link>
//       <Link href={"/(modals)/booking"}>booking</Link>
//       <Link href={"/(modals)/profile"}>profile</Link>
