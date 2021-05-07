import React from 'react';
import { 
  StyleSheet, Text, View, StatusBar, ImageBackground,
  Dimensions
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth
} from 'react-native-responsive-dimensions';

//상태바
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle("white-content");

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <ImageBackground
        style={styles.background_img}
        source={require("./src/images/main-background.jpg")}
        resizeMode="stretch"
        >
        <View style={styles.container}>
          <Text style={styles.main_title}>AIR</Text>
          <Text>HELPER</Text>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    height: responsiveHeight(100),
  },
  background_img: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  main_title: {
    fontSize: responsiveFontSize(10),
    color: 'white',
  }
});
