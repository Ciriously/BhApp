import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

const FeedbackPage = () => {
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

  if (!fontsLoaded) {
    return null; // or render a loading indicator
  }

  const FeedbackSection = ({ issue, date, description, hasReply }) => {
    return (
      <View style={styles.feedbackContainer}>
        <View style={styles.issueContainer}>
          <Image source={require('./assets/smallCircle.png')} style={styles.smallCircleIcon} resizeMode="contain" />
          <Text style={styles.issueText}>{issue}</Text>
          <Text style={styles.dateText}>{date}</Text>
          {hasReply && <View style={styles.yellowIcon} />}
        </View>
        <Text style={styles.loremIpsum}>{description}</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.iconsContainer}>
            <View style={styles.iconTextContainer}>
              <Ionicons name="ios-attach" size={18} color="gray" style={styles.icon} />
              <Text style={styles.iconText}>Payment receipt</Text>
            </View>
            <View style={styles.iconTextContainer}>
              <Ionicons name="ios-videocam" size={18} color="gray" style={styles.icon} />
              <Text style={styles.iconText}>Video</Text>
            </View>
          </View>
          <View style={styles.versionContainer}>
            <Text style={styles.versionText}>V3.2.0</Text>
          </View>
        </View>
        {hasReply && (
          <View style={styles.replyArea}>
            <TextInput style={styles.replyInput} multiline={true} placeholder="Reply...." placeholderTextColor="white" />
          </View>
        )}
        {!hasReply && (
          <View style={styles.replySection}>
            <Image source={require('./assets/heart.png')} style={styles.heartIcon} resizeMode="contain" />
            <Text style={styles.replyAnswer}>
              Hi thank you for your patience we have fixed the issue and you should now be able to view the study room properly. Please log out and log back in after a few minutes and make sure your app is up to date to version 2.3.55. Thanks!
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
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
          <Text style={styles.greetingText}>User Problems - 34</Text>
          <View style={styles.inlineTextContainer}>
            <Text style={styles.subText}>Auditing 12,</Text>
            <Text style={[styles.subText, styles.secondSubText]}>Resolved 22</Text>
          </View>
        </View>
        <FeedbackSection
          issue="Study Material Issue"
          date="July 8, 2023"
          description="I am not able to open the study room section whenever I tap on study room, it throws me out of the app and it's not loading. Please fix this as I need to study for my exam tomorrow."
          hasReply={true}
        />
        <FeedbackSection
          issue="Login Issue"
          date="July 9, 2023"
          description="I am having trouble logging into the app. Every time I enter my credentials, it says 'Invalid username or password.' Please help me resolve this issue."
          hasReply={false}
        />
        <FeedbackSection
          issue="Feature Request"
          date="July 10, 2023"
          description="It would be great if you could add a dark mode feature to the app. Many users, including myself, prefer using dark mode for better readability and reduced eye strain. Thank you!"
          hasReply={true}
        />
      </View>
    </ScrollView>
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
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  textContainer: {
    marginBottom: 16,
  },
  greetingText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Gordita-Bold',
    marginBottom: 8,
    marginTop: -30,
    marginHorizontal: 40,
  },
  inlineTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subText: {
    fontSize: 12,
    color: '#FFB13B',
    fontFamily: 'Gordita-Bold',
    marginRight: -29,
    marginHorizontal: 35,
  },
  secondSubText: {
    color: 'green',
  },
  feedbackContainer: {
    marginBottom: 16,
    padding: 8,
    width: '100%',
    alignItems: 'center',
  },
  issueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  smallCircleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  issueText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Gordita-Bold',
    marginRight: 74,
  },
  dateText: {
    fontSize: 12,
    fontFamily: 'Gordita-Regular',
    paddingRight: 8,
    paddingHorizontal: -28,
    color: 'white',
  },
  loremIpsum: {
    fontSize: 14,
    color: 'white',
    marginTop: 16,
    paddingHorizontal: 16,
    fontFamily: 'Gordita-Regular',
    textAlign: 'left',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    marginRight: 6,
    height: 24,
    width: 24,
  },
  iconText: {
    color: 'gray',
  },
  versionContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  versionText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Gordita-Regular',
  },
  replyArea: {
    paddingHorizontal: 30,
    backgroundColor: '#36393E',
    width: '90%',
    borderRadius: 8,
    marginTop: 16,
    minHeight: 100, // Increased height of reply section box
  },
  replyInput: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Gordita-Regular',
    paddingVertical: 10,
    textAlign: 'left',
  },
  replySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
  },
  answer: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Gordita-Regular',
    flex: 1,
  },
  showAnswer: {
    display: 'flex',
  },
  hideAnswer: {
    display: 'none',
  },
  heartIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
  },
  replyAnswer: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Gordita-Regular',
    flex: 1,
    marginTop: 18,
  },
});

export default FeedbackPage;
