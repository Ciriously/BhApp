import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FeedbackPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="ios-search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="ios-filter" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>Hello user</Text>
          <View style={styles.inlineTextContainer}>
            <Text style={styles.subText}>This is the first text </Text>
            <Text style={[styles.subText, styles.secondSubText]}>with different style.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27282D',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
  iconContainer: {
    padding: 8,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  greetingText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 16,
  },
  inlineTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subText: {
    fontSize: 12,
    color: 'white',
  },
  secondSubText: {
    fontWeight: 'bold',
  },
});

export default FeedbackPage;
