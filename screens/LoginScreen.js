import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Click Here" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
