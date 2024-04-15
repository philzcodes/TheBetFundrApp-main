/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import TransactionResults from "@/components/(userscomponent)/(TransactionTemplateUsers)/(TransactionResults)/TransactionResults";
import Colors from "@/constants/Colors";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import data1 from "./data.js";
const data = data1[0].transactionHistory
 const screenHeight = Dimensions.get("window").height;

 // Calculate the percentage value
 const percentageHeight = screenHeight * 0.3;
const TransactionTemplate = ({
  props,
  navigation,
  title,
  select,
  totalWithdrawals,
  totalDeposits,
  // data,
  allData,
  showReceipt,
}: any) => {
  const [state, setState] = useState(select.firstSelect.big);
  const [viewMore, setStateViewMore] = useState<boolean>();
  const [height, setHeight] = useState(0);

  function adjustHeight() {
    setHeight((prev): any => {
      if (prev === 0) {
        return "auto";
      } else {
        return 0;
      }
    });
  }
  const state2 = {
    param1: state,
  };

  useEffect(() => {
    // Save state to localStorage whenever it changes
    // localStorage.setItem("transactionTemplateState", JSON.stringify(state));

    if (state === select.firstSelect.big) {
      setStateViewMore(data?.length > 3);
    } else if (state === select.secondSelect.big) {
      setStateViewMore(
        data?.filter(
          (item: {fundingType: string}) => item.fundingType === "deposits"
        ).length > 3
      );
    } else if (state === select.thirdSelect.big) {
      setStateViewMore(
        data?.filter(
          (item: {fundingType: string}) => item.fundingType === "withdrawals"
        ).length > 3
      );
    }
  }, [state, data]);

  return (
    <View style={styles.transaction_template_container}>
      <View style={styles.transaction_template_container_header}>
        <View style={styles.transaction_template_container_header_1}>
          <View style={styles.transaction_template_container_header_1_1}>
            <Text
              style={{
                color: Colors.welcomeText,
                fontWeight: "900",
                opacity: 0.8,
                // marginLeft: 6,
              }}
            >
              {title.name}
            </Text>
            <View>{title.icon}</View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.push("transactions")}
          >
            <Text
              style={{
                color: Colors.welcomeText,
                fontWeight: "400",
                // opacity: 0.8,
                textDecorationColor: "white",
                fontSize: 14,
              }}
            >
              {" "}
              See more
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.transaction_template_container_body}>
        {!data ? (
          <View style={styles.transaction_template_container_body1}>
            <Text style={{color: "white"}}>rgeg</Text>
          </View>
        ) : (
          <View style={styles.transaction_template_container_body1}>
            {data?.length > 0 ? (
              data
                ?.slice()
                .reverse()
                .slice(0, 3)
                .map((data: any, index: any) => (
                  <TransactionResults
                    key={index}
                    time={data.registrationDateTime}
                    amount={data.amount}
                    receipt={data._id}
                    betId={data.betId}
                    status={data.status}
                    type={data.fundingType}
                    showReceipt={showReceipt}
                    withdrawalCode={data.withdrawalCode}
                    momoName={data.momoName}
                    momoNumber={data.momoNumber}
                    identifierId={data.identifierId}
                  />
                ))
            ) : (
              <View
              // className='no-result animate-pop-in'
              // style={{
              //   display: "flex",
              //   width: "100%",
              //   height: "100%",
              //   flex: "1",
              //   alignItems: "center",
              //   justifyContent: "center",
              //   gap: "30px",
              //   flexDirection: "column",
              // }
              >
                {/* <Text>
               
                  <CgTrashEmpty fontSize='80px' />{" "}
                </Text> */}
                <Text style={{color: "white"}}>Aucune donnée à afficher</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transaction_template_container: {
    display: "flex",
    gap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.transactionTemplateBackground,
    height: percentageHeight,
    marginTop: 7,
    alignSelf: "center",
    width: "100%",
    overflow: "hidden",
    // flexDirection: "column",
    // borderRadius: 10,
    // gap: 20,
    // padding: 8,
  },
  transaction_template_container_header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: 10,
    padding: 2,
  },
  transaction_template_container_header_1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "700",
    flexDirection: "row",
  },
  transaction_template_container_header_1_1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    gap: 12,
    flexDirection: "row",
  },
  transaction_template_container_header_2: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    gap: 3,
    justifyContent: "flex-end",
  },
  transaction_template_container_header_2_div: {
    fontWeight: "500",
    fontSize: 11,
    display: "flex",
    alignItems: "center",
    gap: 5,
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  transaction_template_container_header_2_span_1: {
    color: "#648900",
    fontSize: 10,
    fontWeight: "800",
  },
  transaction_template_container_header_2_span_2: {
    color: "#0076B8",
    fontSize: 10,
    fontWeight: "800",
  },
  transaction_template_container_header_2_span_3: {
    color: Colors.primary1,
    fontSize: 10,
  },
  transaction_template_container_body: {
    display: "flex",
    backgroundColor: Colors.transactionTemplateBackgroundinner,
    width: "100%",
    flexDirection: "column",
    // overflow: "hidden",
    flex: 1,
    position: "relative",
  },
  transaction_template_container_body1: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    gap: 5,
    
  },
  xxx: {
    color: "white",
  },
});

export default TransactionTemplate;

