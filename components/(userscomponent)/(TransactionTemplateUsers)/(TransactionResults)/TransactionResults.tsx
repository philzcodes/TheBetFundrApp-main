/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import "./transactionResults.css";
import { TransactionResultsProps } from "@/types";
import formatNumberWithCommasAndDecimal from "../../../(Utils)/formatNumber";
import Colors from "@/constants/Colors";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Moment from "moment";

const TransactionResults = ({  time,
  amount,
  receipt,
  betId,
  status,
  type,
    showReceipt,
       momoName,
      momoNumber,
      withdrawalCode,
       identifierId,
}: any) => {
//  const handleClick = () => {
//     showReceipt(
//       time,
//       amount,
//       identifierId,
//       betId,
//       status,
//       type,
//       momoName,
//       momoNumber,
//       withdrawalCode
//     );
//   };

  return (
    <View
      style={{
        paddingTop: 5,
        paddingBottom: 5,
        gap: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <View
        style={styles.transaction_result}
        // onClick={handleClick}
      >
        {/* <View
          // className='first-span'
          style={{
            backgroundColor: type === "deposits" ? "#658900" : "#0076B8",
            width: "13px !important",
          }}
        ></View> */}
        <View
          style={{
            backgroundColor:
              type === "deposits"
                ? "rgba(73, 166, 106, .2)"
                : "rgba(120, 120, 120, .2)",
            width: 40,
            height: 40,
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingRight: type === "deposits" ? 3.1 : 0,
            paddingLeft: type === "deposits" ? 0 : 4,
          }}
        >
          {type === "deposits" ? (
            <MaterialCommunityIcons
              name='login'
              size={24}
              color='rgba(73, 166, 106, 1)'
            />
          ) : (
            <MaterialCommunityIcons
              name='logout'
              size={24}
              color='rgba(120, 120, 120, 1)'
            />
          )}
        </View>

        <View style={styles.small_device_group}>
          <Text
            style={{
              color: Colors.welcomeText,
              fontWeight: "900",
              fontSize: 13,
            }}
          >
            {type === "deposits" ? "DEPOSIT" : "WITHDRAWAL"} || {betId}
          </Text>

          <Text
            style={{
              color: Colors.welcomeText,
              fontSize: 11,
              fontWeight: "600",
              opacity: 0.6,
              padding: 2.5,
            }}
          >
            {formatDate(time)}
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            gap: 3,
            flexDirection: "column",
            justifyContent: "center",
            // backgroundColor: "red",
          }}
        >
          <View>
            <Text
              style={{
                color: Colors.welcomeText,
                fontWeight: "900",
                fontSize: 13,
              }}
            >
              XOF {formatNumberWithCommasAndDecimal(amount)}
            </Text>
          </View>

          {status === "Pending" ? (
            <View
              style={{
                padding: 2.5,
                borderRadius: 3,
                backgroundColor:
                  status === "Pending"
                    ? "rgba(0, 0, 0, 1)"
                    : status === "Successful"
                      ? "transparent"
                      : "transparent",

                display: "flex",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "900",
                  color:
                    status === "Pending"
                      ? "rgba(256, 256, 256, 1)"
                      : status === "Successful"
                        ? "rgba(0, 186, 0, 1)"
                        : "#FF0000",
                }}
              >
                {status}
              </Text>
            </View>
          ) : (
            <View
              style={{
                padding: 2.5,
                borderRadius: 3,
                backgroundColor:
                  status === "Pending"
                    ? "rgba(0, 0, 0, 1)"
                    : status === "Successful"
                      ? "transparent"
                      : "transparent",

                display: "flex",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "900",
                  color:
                    status === "Pending"
                      ? "rgba(256, 256, 256, 1)"
                      : status === "Successful"
                        ? "rgba(0, 186, 0, 1)"
                        : "#FF0000",
                }}
              >
                {status}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  transaction_result: {
    gap: 8,
    display: "flex",
    height: 45,
    flexDirection: "row",
 alignItems: 'center',
  },
  small_device_group: {
    display: "flex",
    flex: 1,
    gap: 3,
    flexDirection: 'column',
    justifyContent: "center",
    // backgroundColor: "red",
// whiteSpace: 'nowrap'
  },
  small_device_group_text1: {
    color: Colors.welcomeText,
    fontWeight: "900",
  
  },}

);
export default TransactionResults;

const formatDate = (inputDate: any) => {
  // Check if inputDate is a valid date string or object
  if (!inputDate || !(inputDate instanceof Date || !isNaN(Date.parse(inputDate)))) {
    throw new Error('Invalid date format. Please provide a valid date.');
  }

  // Import Moment.js library
  const Moment = require('moment');
  // Ensure correct locale is set
  Moment.locale("en");

  // Create a Moment object from the inputDate
  const momentDate = Moment(inputDate);

  // Format the date and time separately
  const formattedDate = momentDate.format("DD MMM, YYYY");
  const formattedTime = momentDate.format("hh:mm A"); // Use uppercase 'A' for AM/PM

 const formattedDateTime = (
   <Text style={{display: 'flex', alignItems: 'center'}}>
     {formattedDate} <Text style={{fontSize: 10.5}}>&#8226; </Text>
     {formattedTime}
   </Text>
 );

  return formattedDateTime;
};
