import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Modal } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from "react-native";
import hatIcon from "./assets/hatIcon.png";

const BillingSummaryPage = ({ transactions, navigation }) => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  if (!fontsLoaded) {
    return null; // or render a loading indicator
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <View style={styles.backButtonCircleOutline}>
            <Ionicons name="arrow-back" size={24} color="gray" style={styles.backIcon} />
          </View>
        </TouchableOpacity>
        <Text style={styles.header}>Billing</Text>
        <View style={styles.smallCircle} />
      </View>
      <View style={styles.billingDetailsContainer}>
        <Text style={styles.billingDetailsHeader}>Billing Details For</Text>
        <Text style={styles.billingDetailsSubtext}>Account: Aditya</Text>
      </View>
      <TouchableOpacity style={styles.monthContainer} onPress={handleOpenModal}>
        <Text style={styles.monthLabel}>{selectedMonth ? selectedMonth : 'Select Month'}</Text>
        <Icon name="caret-down" size={16} color="black" style={styles.dropdownIcon} />
      </TouchableOpacity>

   

<Modal visible={isModalVisible} transparent={true} onRequestClose={handleCloseModal}>
  <TouchableOpacity style={styles.modalBackground} onPress={handleCloseModal} />
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Picker
        style={styles.monthPicker}
        selectedValue={selectedMonth}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
      >
        <Picker.Item label="Select Month" value="" />
        <Picker.Item label="January" value="January" />
        <Picker.Item label="February" value="February" />
        <Picker.Item label="March" value="March" />
        {/* Add more months as needed */}
      </Picker>
      <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
        <Text style={styles.modalCloseButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>



      <View style={styles.offersContainer}>
        <View style={styles.offerSection}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <View style={styles.backButtonCircleOutline}>
              <Image source={hatIcon} style={styles.hatIcon} resizeMode="contain" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.offerSection}>
          <Text style={styles.offersHeaderText}>Rs 799 Lifetime</Text>
        </View>
        <View style={[styles.offerSection, styles.offerContainer]}>
          {/* <Text style={styles.offerText}>799$ Lifetime</Text> */}
          <Text style={styles.offerText}>One Time payment for all materials till you Graduate</Text>
        </View>
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
    fontFamily: "Gordita-Bold",
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
    fontFamily: "Gordita-Regular",
  },
  billingDetailsSubtext: {
    fontSize: 14,
    marginTop: 4,
  },
  monthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  monthLabel: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Gordita-Bold',
    color: '#888888',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    width: '80%',
  },
  monthPicker: {
    fontFamily: 'Gordita-Bold',
  },
  modalCloseButton: {
    marginTop: 16,
    alignSelf: 'flex-end',
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontFamily: 'Gordita-Bold',
    color: 'blue',
  },
  transaction: {
    marginVertical: 8,
  },
  date: {
    fontSize: 16,
    fontFamily: "Gordita-Bold",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Gordita-Bold",
  },
  hatIcon: {
    width: 34,
    height: 34,
  },
  description: {
    fontSize: 14,
    fontFamily: "Gordita-Bold",
  },
  filterInput: {
    width: 200,
    marginBottom: 16,
    fontFamily: "Gordita-Bold",
  },
  backButton: {
    alignSelf: "flex-start",
    padding: 8,
    marginTop: 15,
  },
  backButtonCircleOutline: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    color: 'gray',
  },
  smallCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginLeft: 5,
  },
  offersContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  offerSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  handshakeIcon: {
    marginRight: 16,
  },
  offersHeaderText: {
    fontSize: 16,
    fontFamily: 'Gordita-Bold',
    color: '#6658D3',
    textAlign: 'center',
    display: 'flex',
  },
  offerContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  offerText: {
    fontSize: 12,
    color: 'gray',
    marginRight: 8,
    fontFamily: "Gordita-Bold",
  },
});

export default BillingSummaryPage;
