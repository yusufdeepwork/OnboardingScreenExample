import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      // We must'nt go previous page when it is finished.
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Connect to the World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Share your Favorites',
          subtitle: 'Share Your Thoughts with Similar Kind of People',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Become the Star',
          subtitle: 'Let the Spot Light Capture You',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
