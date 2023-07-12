import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
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

  const FeedbackSection = ({ isFirstSection, hasReply }) => {
    const containerStyles = [
      styles.feedbackContainer,
      !isFirstSection && styles.centerFeedbackContainer,
    ];
    const issueContainerStyles = [
      styles.issueContainer,
      !isFirstSection && styles.centerIssueContainer,
    ];
    const smallCircleIconStyles = [styles.smallCircleIcon];
    const issueTextStyles = [styles.issueText];
    const dateTextStyles = [styles.dateText];
    const loremIpsumStyles = [
      styles.loremIpsum,
      isFirstSection && styles.removeMarginTop,
    ];
    const bottomContainerStyles = [styles.bottomContainer];
    const iconsContainerStyles = [styles.iconsContainer];
    const iconTextContainerStyles = [styles.iconTextContainer];
    const iconStyles = [styles.icon];
    const iconTextStyles = [styles.iconText];
    const versionContainerStyles = [styles.versionContainer];
    const versionTextStyles = [styles.versionText];
    const replyAreaStyles = [styles.replyArea];
    const replyInputStyles = [styles.replyInput];
    const replySectionStyles = [styles.replySection];
    const answerStyles = [
      styles.answer,
      isFirstSection && styles.removeMarginTop,
      hasReply ? styles.showAnswer : styles.hideAnswer,
    ];
    const heartIconStyles = [styles.heartIcon];

    return (
      <View style={containerStyles}>
        <View style={issueContainerStyles}>
          <Image
            source={require('./assets/smallCircle.png')}
            style={smallCircleIconStyles}
            resizeMode="contain"
          />
          <Text style={issueTextStyles}>Study Material Issue</Text>
          <Text style={dateTextStyles}>July 8, 2023</Text>
          {!isFirstSection && hasReply && <View style={styles.yellowIcon} />}
        </View>
        <Text style={loremIpsumStyles}>
          I am not able to open the study room section whenever I tap on study
          room its just throwing me out of the app and its not loading please
          fix this I want to study for my exam tomorrow I have my papers
        </Text>
        <View style={bottomContainerStyles}>
          <View style={iconsContainerStyles}>
            <View style={iconTextContainerStyles}>
              <Ionicons
                name="ios-attach"
                size={18}
                color="gray"
                style={iconStyles}
              />
              <Text style={iconTextStyles}>Payment receipt</Text>
            </View>
            <View style={iconTextContainerStyles}>
              <Ionicons
                name="ios-videocam"
                size={18}
                color="gray"
                style={iconStyles}
              />
              <Text style={iconTextStyles}>Video</Text>
            </View>
          </View>
          <View style={versionContainerStyles}>
            <Text style={versionTextStyles}>V3.2.0</Text>
          </View>
        </View>
        {hasReply && (
          <View style={replyAreaStyles}>
            <TextInput
              style={replyInputStyles}
              multiline={true}
              placeholder="Reply...."
              placeholderTextColor="white"
            />
          </View>
        )}
        {!isFirstSection && hasReply && (
          <View style={replySectionStyles}>
            <Image
              source={require('./assets/heart.png')}
              style={heartIconStyles}
              resizeMode="contain"
            />
            <Text style={styles.replyAnswer}>
              Hi thank you for your patience we have fixed the issue and you
              should now be able to view the study room properly. Please log out
              and log back in after a few minutes and make sure your app is up
              to date to version 2.3.55. Thanks!
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
        <FeedbackSection isFirstSection={true} hasReply={true} />
        <FeedbackSection isFirstSection={false} hasReply={false} />
        <FeedbackSection isFirstSection={false} hasReply={true} />
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
    color: 'yellow',
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
  centerFeedbackContainer: {
    alignItems: 'center',
  },
  issueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  centerIssueContainer: {
    justifyContent: 'center',
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
    color: 'white',
  },
  firstSectionDate: {
    color: 'white',
  },
  replyDate: {
    color: 'white',
  },
  colorIcon: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 4,
  },
  firstSectionColorIcon: {
    backgroundColor: 'green',
  },
  replyColorIcon: {
    backgroundColor: 'yellow',
  },
  loremIpsum: {
    fontSize: 14,
    color: 'white',
    marginTop: 16,
    paddingHorizontal: 16,
    fontFamily: 'Gordita-Regular',
    textAlign: 'justify',
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
  },
  replyInput: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Gordita-Regular',
    paddingVertical: 10,
    textAlign: 'center',
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
    marginTop: 8,
  },
});

export default FeedbackPage;
