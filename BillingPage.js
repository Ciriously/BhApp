import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const BillingPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.profileIcon}>
          <FontAwesomeIcon icon={faUserCircle} size={24} color="#555555" />
        </Text>
      </View>
      <View style={styles.invoice}>
        <Text style={styles.invoiceText}>Invoice Summary</Text>
        {/* Add your invoice details here */}
      </View>
      <View style={styles.totalAmount}>
        <Text style={styles.totalAmountText}>Total Amount: $100.00</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.tab}>Tab 1</Text>
        <Text style={styles.tab}>Tab 2</Text>
        <Text style={styles.tab}>Tab 3</Text>
        <Text style={styles.tab}>Tab 4</Text>
        <Text style={styles.tab}>Tab 5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  profileIcon: {
    marginRight: 10,
  },
  invoice: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingBottom: 10,
    marginBottom: 20,
  },
  invoiceText: {
    fontSize: 24,
    fontFamily: 'Gordita-Bold',
    color: '#333333',
  },
  totalAmount: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalAmountText: {
    fontSize: 18,
    fontFamily: 'Gordita-Bold',
    color: '#333333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  tab: {
    fontSize: 16,
    fontFamily: 'Gordita-Bold',
    color: '#555555',
  },
});

export default BillingPage;
