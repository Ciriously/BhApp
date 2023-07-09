import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
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

  const renderFeedbackSection = (isFirstSection, hasReply) => {
    const containerStyles = [
      styles.feedbackContainer,
      styles.centerFeedbackContainer,
    ];
    const issueContainerStyles = [
      styles.issueContainer,
      styles.centerIssueContainer,
    ];
    const smallCircleIconStyles = [styles.smallCircleIcon];
    const issueTextStyles = [styles.issueText];
    const dateTextStyles = [styles.dateText];
    const loremIpsumStyles = [
      styles.loremIpsum,
      styles.removeMarginTop,
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
        </View>
        <Text style={loremIpsumStyles}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus nulla eu pulvinar
          vulputate. Vestibulum pharetra velit id sapien vulputate malesuada. Nam gravida metus ut
          nisi aliquet, id rutrum velit cursus. In luctus lacinia purus, eu molestie tortor
          ultrices non.
        </Text>
        <View style={bottomContainerStyles}>
          <View style={iconsContainerStyles}>
            <View style={iconTextContainerStyles}>
              <Ionicons name="ios-attach" size={18} color="white" style={iconStyles} />
              <Text style={iconTextStyles}>Clip</Text>
            </View>
            <View style={iconTextContainerStyles}>
              <Ionicons name="ios-videocam" size={18} color="white" style={iconStyles} />
              <Text style={iconTextStyles}>Video</Text>
            </View>
          </View>
          <View style={versionContainerStyles}>
            <Text style={versionTextStyles}>Version</Text>
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
      </View>
    );
  };

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
          <Text style={styles.greetingText}>User Problems- 34</Text>
          <View style={styles.inlineTextContainer}>
            <Text style={styles.subText}>Auditing 12,</Text>
            <Text style={[styles.subText, styles.secondSubText]}> Resolved 22</Text>
          </View>
        </View>
        {renderFeedbackSection(true, true)}
        {renderFeedbackSection(false, false)}
        {renderFeedbackSection(false, true)}
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
    top: -50,
    left: 16,
  },
  greetingText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 8,
    fontFamily: 'Gordita-Bold',
  },
  inlineTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  subText: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Gordita-Bold',
    color: 'yellow',
    marginRight: 4,
  },
  secondSubText: {
    fontFamily: 'Gordita-Bold',
    color: 'green',
    fontSize: 12,
  },
  feedbackContainer: {
    marginBottom: 16,
    width: '90%',
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
    marginRight: 6,
  },
  dateText: {
    fontSize: 12,
    color: 'white',
    fontFamily: 'Gordita-Regular',
    marginRight: 4,
  },
  loremIpsum: {
    fontSize: 14,
    color: 'white',
    marginTop: 16,
    paddingHorizontal: 16,
    fontFamily: 'Gordita-Regular',
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  iconsContainer: {
    flexDirection:'row',
    alignItems: 'center',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    marginRight: 4,
    height: 24,
    width: 24,
  },
  iconText: {
    color: 'white',
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
  removeMarginTop: {
    marginTop: 0,
  },
});

export default FeedbackPage;
