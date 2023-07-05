import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const BillingSummaryPage = ({ transactions, navigation }) => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Gordita-Bold': require('./assets/fonts/Gordita-Bold.ttf'),
        'Gordita-Regular': require('./assets/fonts/Gordita-Regular.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  const handleFilter = (filterText) => {
    setFilteredTransactions(
      transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(filterText.toLowerCase());
      })
    );
  };

  if (!fontsLoaded) {
    return null; // or render a loading indicator
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={styles.header}>Billing</Text>
      </View>
      <View style={styles.billingDetailsContainer}>
        <Text style={styles.billingDetailsHeader}>Billing Details</Text>
        <Text style={styles.billingDetailsSubtext}>For: Aditya</Text>
      </View>
      <FlatList
        data={filteredTransactions}
        keyExtractor={(transaction) => transaction.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      <TextInput
        placeholder="Filter transactions"
        onChangeText={handleFilter}
        style={styles.filterInput}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    fontFamily: "GorditaBold",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 19,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginStart: -35,
    marginTop: 15,
  },
  billingDetailsContainer: {
    marginBottom: 16,
  },
  billingDetailsHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  billingDetailsSubtext: {
    fontSize: 14,
    marginTop: 4,
  },
  transaction: {
    marginVertical: 8,
  },
  date: {
    fontSize: 16,
    fontFamily: "GorditaBold",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "GorditaBold",
  },
  description: {
    fontSize: 14,
    fontFamily: "GorditaBold",
  },
  filterInput: {
    width: 200,
    marginBottom: 16,
    fontFamily: "GorditaBold",
  },
  backButton: {
    alignSelf: "flex-start",
    padding: 8,
    marginTop: 15,
  },
});

export default BillingSummaryPage;
