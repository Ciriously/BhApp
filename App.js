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

  const listData = [
    { label: 'Plan Value', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Regular' }, rightText: "₹799", rightTextStyle: { color: 'black', fontFamily: 'Gordita-Bold' , fontSize : 14} },
    { label: 'Discount Applied', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Regular' }, rightText: "₹100", rightTextStyle: { color: 'black', fontFamily: 'Gordita-Bold' } },
    { label: 'Amount paid', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Regular' }, rightText: "₹699", rightTextStyle: { color: '#6658D3', fontFamily: 'Gordita-Bold' } },
    { label: 'Date of Payment', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Regular' }, rightText: "24/4/2022", rightTextStyle: { color: 'black', fontFamily: 'Gordita-Bold' } },
    { label: 'Payee Name', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Regular' }, rightText: "Aditya.D.Mishra", rightTextStyle: { color: '#6658D3', fontFamily: 'Gordita-Bold' } },
    { label: 'Payment ID', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Regular' }, rightText: "BH2021VERSION1", rightTextStyle: { color: 'black', fontFamily: 'Gordita-Bold' } },
    { label: 'Smart Plan', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Regular' }, rightText: "Lifetime-Active", rightTextStyle: { color: '#6658D3', fontFamily: 'Gordita-Bold' } },
    { label: 'Duration', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Regular' }, rightText: "Till Graduate", rightTextStyle: { color: 'black', fontFamily: 'Gordita-Bold' } },
    { label: 'Recurring Pay', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Regular' }, rightText: "No Charges", rightTextStyle: { color: 'black', fontFamily: 'Gordita-Bold' } },
  ];

  const totalPay = { label: 'Total Amount Paid', leftTextStyle: { color: 'black', fontFamily: 'Gordita-Bold' , fontSize : 20 }, rightText: "₹699.00", rightTextStyle: { color: 'black', fontFamily: 'Gordita-Bold' ,fontSize : 20 } };

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
              <Image source={hatIcon} style={styles.hatIconImage} resizeMode="contain" />
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
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={[styles.listItemLeftText, item.leftTextStyle]}>{item.label}</Text>
              <Text style={[styles.listItemRightText, item.rightTextStyle]}>{item.rightText}</Text>
            </View>
          )}
        />
        <View style={styles.totalPayContainer}>
          <Text style={[styles.listItemLeftText, totalPay.leftTextStyle]}>{totalPay.label}</Text>
          <Text style={[styles.listItemRightText, totalPay.rightTextStyle]}>{totalPay.rightText}</Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footerRow}>
          <TouchableOpacity style={styles.footerIconContainer}>
            <Icon name="home" size={24} color="black" style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIconContainer}>
            <Icon name="heart" size={24} color="black" style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIconContainer}>
            <Icon name="bell" size={24} color="black" style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIconContainer}>
            <Icon name="user" size={24} color="black" style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIconContainer}>
            <Icon name="cog" size={24} color="black" style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#F2F2F2',
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
  listItemLeftText: {
    fontSize: 14,
    fontFamily: 'Gordita-Bold',
  },
  listItemRightText: {
    fontSize: 12,
    fontFamily: 'Gordita-Regular',
  },
  totalPayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderTopWidth: 1,
    borderTopColor: 'lightblue',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerIconContainer: {
    alignItems: 'center',
  },
  footerIcon: {
    fontSize: 20,
    marginBottom: 1,
  },
});

export default BillingSummaryPage;
