import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <View>
        <View>

        </View>
        <Text>
          Now Loading...
        </Text>
      </View>
    );
  }
}

