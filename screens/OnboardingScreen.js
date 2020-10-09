import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Skip = (props) => {
  <Button title="Skip" color="#000000" {...props} />;
};

const Next = (props) => {
  <Button title="Next" color="#000000" {...props} />;
};
const Done = ({props}) => {
  <TouchableOpacity style={{marginHorizontal: 8}} {...props} >

    <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>;
};

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
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
