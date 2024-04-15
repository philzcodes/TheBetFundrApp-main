/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ExploreHeader from "@/components/ExploreHeader";
import React, {useState} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {Feather, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import Colors from "@/constants/Colors";

import TransactionTemplate from "@/components/(userscomponent)/(TransactionTemplateUsers)/TransactionTemplateHistory";
import Spinner from "react-native-loading-spinner-overlay";
import ExploreHeader3 from "@/components/ExploreHeader3";
import data from "@/components/(userscomponent)/(TransactionTemplateUsers)/data";
<MaterialCommunityIcons name='hand-wave-outline' size={24} color='black' />;
const screenHeight = Dimensions.get("window").height;
// import data1 from "@/components/(userscomponent)/(TransactionTemplateUsers)/data";
// const data = data1[0]
// Calculate the percentage value
const percentageHeight = screenHeight * 0.375;

const Transactions = ({navigation}: any) => {
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   // Simulating a delay or async operation
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);


  // const getUserDetails = async () => {
  //   try {
  //     const res = await axios.get("/api/getUser");
  //     setData(res.data.data);
  //   } catch (error: any) {
  //     if (error.response) {
  //       // Handle token expiration
  //       if (error.response.status === 401) {
  //         toast.error(
  //           "Vous vous êtes connecté ailleurs. Vous devez vous reconnecter ici."
  //         );
  //         router.push("/signin"); // Replace '/login' with your actual login route
  //       } else if (error.response.status === 402) {
  //         toast.error(
  //           "Votre session a expiré. Redirection vers la connexion..."
  //         );
  //         router.push("/signin"); // Replace '/login' with your actual login route
  //       } else if (error.response.status === 404) {
  //         toast.error("Votre compte a été désactivé");
  //         router.push("/signin"); // Replace '/login' with your actual login route
  //       } else {
  //         // Handle other errors
  //         toast.error(
  //           "Une erreur s'est produite. Veuillez réessayer plus tard."
  //         );
  //       }
  //     } else if (error.request) {
  //       // Handle network errors (no connection)
  //       setIsOnline(false);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   // Check network status before making the request
  //   if (isOnline) {
  //     getUserDetails();
  //   } else {
  //     toast.error(
  //       "No network connection. Please check your connection and try again."
  //     );
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isOnline]);

  // useEffect(() => {
  //   // Check initial network status
  //   setIsOnline(window.navigator.onLine);

  //   // Add event listeners for online/offline changes
  //   const handleOnline = () => setIsOnline(true);
  //   const handleOffline = () => setIsOnline(false);

  //   window.addEventListener("online", handleOnline);
  //   window.addEventListener("offline", handleOffline);

  //   // Clean up event listeners on component unmount
  //   return () => {
  //     window.removeEventListener("online", handleOnline);
  //     window.removeEventListener("offline", handleOffline);
  //   };
  // }, []);

  // // Filter deposit transactions
  // const allDeposits = data?.transactionHistory?.filter(
  //   (transaction: any) => transaction.fundingType === "deposits"
  // );

  // const totalDeposits = allDeposits
  //   ?.filter((data: {status: string}) => data.status === "Successful")
  //   .reduce((total: any, transaction: any) => {
  //     return (total += transaction.amount);
  //   }, 0);

  // // Filter withdrawal transactions
  // const allWithdrawals = data?.transactionHistory?.filter(
  //   (transaction: any) => transaction.fundingType === "withdrawals"
  // );

  // const totalWithdrawals = allWithdrawals
  //   ?.filter((data: {status: string}) => data.status === "Successful")
  //   .reduce((total: any, transaction: any) => {
  //     return (total += transaction.amount);
  //   }, 0);

  // // Filter deposit transactions with status "pending"
  // const pendingDeposits = data?.transactionHistory.filter(
  //   (transaction: any) =>
  //     transaction.fundingType === "deposits" && transaction.status === "Pending"
  // );

  // // Filter withdrawal transactions with status "pending"
  // const pendingWithdrawals = data?.transactionHistory?.filter(
  //   (transaction: any) =>
  //     transaction.fundingType === "withdrawals" &&
  //     transaction.status === "Pending"
  // );

  // Calculate total cost of pending deposits

  // const totalPendingDepositAmount = pendingDeposits?.reduce(
  //   (total: any, transaction: any) => {
  //     return (total += transaction.amount);
  //   },
  //   0
  // );

  // // Calculate total cost of pending withdrawals
  // const totalPendingWithdrawalAmount = pendingWithdrawals?.reduce(
  //   (total: any, transaction: any) => {
  //     return (total += transaction.amount);
  //   },
  //   0
  // );

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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
<ExploreHeader3 />

      {!data ? (
        <View style={styles.container3}>
          <Spinner
            visible={loading}
            textContent={"Loading..."}
            textStyle={{color: "#FFF"}}
          />
        </View>
      ) : (
        <View style={styles.container3}>
          <TransactionTemplate
            navigation={navigation}
            title={{
              name: "Transaction History",
              icon: (
                <MaterialIcons
                  name='arrow-back-ios-new'
                  size={21}
                  color={Colors.welcomeText}
                />
              ),
              icon2: (
                <Feather name='filter' size={22} color={Colors.welcomeText} />
              ),
            }}
            select={{
              firstSelect: {big: "Voir tout", small: "Tout"},
              secondSelect: {big: "Voir les Dépôts", small: "Dépôts"},
              thirdSelect: {big: "Afficher les Retraits", small: "Retraits"},
            }}
            // totalWithdrawals={totalWithdrawals}
            // totalDeposits={totalDeposits}
            // // data={data?.transactionHistory}
            // allData={data}
            showReceipt={showReceipt}
          />
        </View>
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
    marginTop: 60,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
  },
  container3: {
    display: "flex",
    borderRadius: 8,
    flex: 1,
    paddingBottom: 13
  },
  xxxx: {
    fontWeight: "800",
    color: Colors.welcomeText,
    fontSize: 20,
  },
});

export default Transactions;

//  <Text style={{}}>Home</Text>
//       <Link href={"/(modals)/login"}>login</Link>

//       <Link href={"/listing/37"}>Listing details</Link>
//       <Link href={"/(modals)/booking"}>booking</Link>
//       <Link href={"/(modals)/profile"}>profile</Link>
