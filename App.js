import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Modal } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <Ionicons name="arrow-back" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={styles.header}>Billing</Text>
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
        <View style={styles.offersHeaderContainer}>
          <Icon name="handshake-o" size={24} color="black" style={styles.handshakeIcon} />
          <Text style={styles.offersHeaderText}>Offers for New Graduate Students</Text>
        </View>
        <Text style={styles.offerText}>Offer 1: Lorem ipsum dolor sit amet</Text>
        <Text style={styles.offerText}>Offer 2: Consectetur adipiscing elit</Text>
        <Text style={styles.offerText}>Offer 3: Sed do eiusmod tempor incididunt</Text>
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
  offersContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16,
    marginTop: 16,
    borderRadius: 10,
  },
  offersHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  handshakeIcon: {
    marginRight: 8,
  },
  offersHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  offerText: {
    marginBottom: 8,
    fontSize: 14,
  },
});

export default BillingSummaryPage;
