import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Modal, Image, FlatList } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import hatIcon from "./assets/hatIcon.png";

const BillingSummaryPage = ({ transactions, navigation }) => {
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

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  if (!fontsLoaded) {
    return null; // or render a loading indicator
  }

  const listData = Array.from(Array(9).keys()); // Example list data with 9 items

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <View style={styles.backButtonCircleOutline}>
            <Ionicons name="arrow-back" size={24} color="gray" style={styles.backIcon} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Billing</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.smallCircleButton}>
          <Image source={require('./assets/smallCircle.png')} style={styles.smallCircleIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <View style={styles.billingDetailsContainer}>
        <Text style={styles.billingDetailsHeader}>Billing Details For</Text>
        <Text style={styles.billingDetailsSubtext}>Account: Adityad12@gmail.com</Text>
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
            <View style={styles.hatIcon}>
              <Image source={hatIcon} style={styles.hatIcon} resizeMode="contain" />
            </View>
          </TouchableOpacity>
          <Text style={styles.offersHeaderText}>Rs 799 Lifetime</Text>
        </View>
        <View style={[styles.offerSection, styles.offerContainer]}>
          <Text style={styles.offerText}>One Time payment for all materials till you Graduate</Text>
        </View>
      </View>

      <View style={styles.transactionListContainer}>
        <FlatList
          data={listData}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => (
            <>
              {index > 0 && <View style={styles.separator} />}
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>Item {item + 1}</Text>
                <Text style={styles.listItemRightText}>Additional Info</Text>
              </View>
            </>
          )}
        />
      </View>
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
    justifyContent: "space-between",
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  billingDetailsContainer: {
    marginBottom: 16,
  },
  billingDetailsHeader: {
    fontSize: 12,
    fontFamily: "Gordita-Bold",
    color: "#888888",
  },
  billingDetailsSubtext: {
    fontSize: 18,
    marginTop: 4,
    fontFamily: "Gordita-Bold",
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
    justifyContent: 'center',
  },
  offersHeaderText: {
    fontSize: 16,
    fontFamily: 'Gordita-Bold',
    color: '#6658D3',
    textAlign: 'center',
    flex: 1,
  },
  offerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  smallCircleButton: {
    alignSelf: "flex-end",
    padding: 8,
    marginTop: 15,
  },
  smallCircleIcon: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
  },
  offerText: {
    fontSize: 12,
    color: 'gray',
    marginRight: 8,
    fontFamily: "Gordita-Bold",
  },
  transactionListContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'gray',
    marginBottom: 5,
    
  },
  listItemText: {
    fontSize: 16,
    fontFamily: 'Gordita-Bold',
    color: 'black',
  },
  listItemRightText: {
    fontSize: 12,
    fontFamily: 'Gordita-Regular',
    color: 'gray',
  },
});

export default BillingSummaryPage;
