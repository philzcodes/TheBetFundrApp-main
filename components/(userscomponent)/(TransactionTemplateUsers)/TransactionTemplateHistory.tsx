/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, {useState, useEffect, useRef} from "react";
import TransactionResults from "@/components/(userscomponent)/(TransactionTemplateUsers)/(TransactionResults)/TransactionResults";
import Colors from "@/constants/Colors";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SectionList,
} from "react-native";
import data1 from "./data.js";
import formatDate from "@/components/(Utils)/formatDate";
import { Ionicons } from "@expo/vector-icons";
const data = data1[0].transactionHistory;
const screenHeight = Dimensions.get("window").height;
const categories = [{name: "All"}, {name: "Completed"}, {name: "Cancelled"}];
// Calculate the percentage value
const percentageHeight = screenHeight * 0.3;



const TransactionTemplate = ({
  navigation,
  title,
  select,
  totalWithdrawals,
  totalDeposits,
  // data,
  allData,
  showReceipt,
}: any) => {
 
 // For table slider header
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const selectCategory = (index: number) => {
    setActiveIndex(index);
  }

  //Restructure transaction data fit sectionList criterias 
 const renderTransactionsByDate = (transactions: any[]) => {
   const transactionsByDate: {[key: string]: any[]} = {};

   transactions.forEach((transaction) => {
     const date = formatDate(transaction.registrationDateTime);
     if (!transactionsByDate[date]) {
       transactionsByDate[date] = [];
     }
     transactionsByDate[date].push(transaction);
   });
 
   const restructuredData = [];
  
   for (const date in transactionsByDate) {
       restructuredData.push({
         date: date,
         data: transactionsByDate[date],
     })
   }

  
   return (
     <SectionList
       keyExtractor={(item, index) => item._id}
       stickySectionHeadersEnabled={true}
       sections={restructuredData}
       renderItem={({item}) => {
         return (
           <TransactionResults
             time={item.registrationDateTime}
             amount={item.amount}
             receipt={item._id}
             betId={item.betId}
             status={item.status}
             type={item.fundingType}
             showReceipt={showReceipt}
             withdrawalCode={item.withdrawalCode}
             momoName={item.momoName}
             momoNumber={item.momoNumber}
             identifierId={item.identifierId}
           />
         );
       }}
       showsVerticalScrollIndicator={false}
       renderSectionHeader={({section}) => (
         <Text
           style={{
             fontWeight: "bold",
             fontSize: 14,
             color: Colors.welcomeText,
             backgroundColor: Colors.background,
             paddingBottom: 10,
             paddingTop: 15,
             marginBottom: 10
           }}
         >
           {section.date}
         </Text>
       )}
       // SectionSeparatorComponent={() => <View style={{height: 16}}></View>}
       ItemSeparatorComponent={() => <View style={{height: 7}}></View>}
     />
   );
 };


 const filterTransactions = (transactions: any[]) => {
 
   if (activeIndex === 0) {
     // "All" category selected
     return transactions;
   } else if (activeIndex === 1) {
     // "Completed" category selected
     return transactions.filter((entry: { status: string; }) => entry.status === "Successful");
   } else if (activeIndex === 2) {
     // "Cancelled" category selected
     return transactions.filter((entry: { status: string; }) => entry.status === "Failed");
   }
 };

const finalData = filterTransactions(data)!;

  return (
    <View style={styles.transaction_template_container}>
      <View style={styles.transaction_template_container_header}>
        <View style={styles.transaction_template_container_header_1}>
          <TouchableOpacity
            onPressIn={() => navigation.goBack()}
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
            {title.icon}
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.welcomeText,
              fontWeight: "600",
              opacity: 0.8,
              fontSize: 18.5,
            }}
          >
            {title.name}
          </Text>
          <View>{title.icon2}</View>
        </View>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 12,
            paddingHorizontal: 16,
            flex: 1,
            marginBottom: 1,
          }}
        >
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={
                activeIndex === index
                  ? styles.categoriesBtnActive
                  : styles.categoriesBtn
              }
              ref={(el) => (itemsRef.current[index] = el)}
              onPress={() => selectCategory(index)}
            >
              <Text
                style={{
                  color: Colors.welcomeText,
                  opacity: activeIndex === index ? 1 : 0.6,
                  fontWeight: "900",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.transaction_template_container_body}>
        {!data ? (
          <View style={styles.transaction_template_container_body1}>
            <Text style={{color: "white"}}>rgeg</Text>
          </View>
        ) : (
          <View style={styles.transaction_template_container_body1}>
            {data?.length > 0 ? (
              renderTransactionsByDate(finalData)
            ) : (
              <View>
                <Text>Aucune donnée à afficher</Text>
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
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    backgroundColor: Colors.transactionTemplateBackground,
    flex: 1,
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
    fontSize: 14,
    fontWeight: "700",
    gap: 12,
    flexDirection: "row",
    marginBottom: 20,
    paddingLeft: 8,
    paddingRight: 8,
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
    gap: 12,
  },
  xxx: {
    color: "white",
  },
  categoriesBtnActive: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.welcomeText,
    display: "flex",
    alignItems: "center",
    paddingBottom: 12,
    flex: 1,
    borderRadius: 4,
  },
  categoriesBtn: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 12,
    flex: 1,
    borderBottomWidth: 3,
    borderBottomColor: "rgba(128, 128, 128, .5)",
    borderRadius: 4,
  },
});

export default TransactionTemplate;
