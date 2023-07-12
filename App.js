import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';

const BottomSheet = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const bottomSheetHeight = 300; // Increase the height to display more items
  const animatedSheetHeight = useState(new Animated.Value(0))[0];
  const [selectedMonth, setSelectedMonth] = useState('');

  const toggleSheet = () => {
    const toValue = isSheetOpen ? 0 : bottomSheetHeight;
    Animated.timing(animatedSheetHeight, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsSheetOpen(!isSheetOpen);
  };

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

  const renderMonths = () => {
    const months = [
      { name: 'January', hasDot: false },
      { name: 'February', hasDot: false },
      { name: 'March', hasDot: false },
      { name: 'April', hasDot: false },
      { name: 'May', hasDot: false },
      { name: 'June', hasDot: false },
      { name: 'July', hasDot: false },
      { name: 'August', hasDot: false },
      { name: 'September', hasDot: true },
      { name: 'October', hasDot: false },
      { name: 'November', hasDot: false },
      { name: 'December', hasDot: false },
    ];

    return months.map((month, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.monthItem, index !== months.length - 1 && styles.monthItemSpacing]}
        onPress={() => setSelectedMonth(month.name)}
      >
        <View style={styles.monthTextContainer}>
          <Text style={[styles.monthText, month.name === 'September' && styles.blueText]}>
            {month.name}
          </Text>
          {month.hasDot && (
            <MaterialIcons name="fiber-manual-record" size={8} color="#6658D3" style={styles.dotIcon} />
          )}
        </View>
        <Text style={styles.yearText}>{new Date().getFullYear()}</Text>
      </TouchableOpacity>
    ));
  };

  if (!fontsLoaded) {
    // Return a loading state or any other component while the fonts are being loaded
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.monthSelector} onPress={toggleSheet}>
        <Text style={styles.monthSelectorText}>
          {selectedMonth || 'Select Month'}
        </Text>
        <MaterialIcons name={isSheetOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={24} color="black" />
      </TouchableOpacity>
      <Animated.View style={[styles.bottomSheet, { height: animatedSheetHeight }]}>
        <ScrollView contentContainerStyle={styles.monthsContainer}>
          {renderMonths()}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F4F7F8',
    borderWidth: 1,
    borderColor: '#F4F7F8',
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
  },
  monthSelectorText: {
    fontSize: 16,
    fontFamily: 'Gordita-Bold',
    marginRight: 5,
    color: '#6B6B6B',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  bottomSheet: {
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
  },
  monthsContainer: {
    flexGrow: 1,
  },
  monthItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  monthItemSpacing: {
    marginBottom: 10,
  },
  monthTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 16,
    fontFamily: 'Gordita-Bold',
    marginLeft: 5,
    color: '#8E8E8E',
  },
  blueText: {
    color: '#6658D3',
  },
  dotIcon: {
    marginLeft: 5,
  },
  yearText: {
    fontSize: 16,
    fontFamily: 'Gordita-Regular',
    color: '#CDCDCD',
  },
});

export default BottomSheet;
