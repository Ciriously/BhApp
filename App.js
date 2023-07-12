import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';

const BottomSheet = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const bottomSheetHeight = 300;
  const animatedSheetHeight = useState(new Animated.Value(0))[0];
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const toggleSheet = () => {
    const toValue = isSheetOpen ? 0 : bottomSheetHeight;
    Animated.timing(animatedSheetHeight, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsSheetOpen(!isSheetOpen);
  };

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
      <React.Fragment key={index}>
        <TouchableOpacity style={styles.monthItem}>
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
        {index !== months.length - 1 && <View style={styles.monthSeparator} />}
      </React.Fragment>
    ));
  };

  if (!fontsLoaded) {
    // Return a loading state or any other component while the fonts are being loaded
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleSheet}>
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
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
  monthSeparator: {
    height: 10,
  },
});

export default BottomSheet;
