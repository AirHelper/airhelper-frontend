import React from 'react';
import { 
  StyleSheet, Text, View, StatusBar, ImageBackground, Image
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth
} from 'react-native-responsive-dimensions';
import CustomButton from '../components/CustomButton';


//dfsdf
//상태바
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle("light-content");

export default class LoginScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.background_img}
        source={require("../images/main-background.jpg")}
        resizeMode="stretch"
        >
        <View style={styles.container}>
          <View style={styles.sub_container}>
            <Image source={require('../images/target.png')} resizeMode='contain' style={styles.target}/>
            <Text style={styles.main_title}>AIR</Text>
            <Text style={styles.sub_title}>HELPER</Text>
          </View>
          <View style={styles.sub_container, styles.btn_sort}>
            <CustomButton
              buttonColor={'#FEE500'}
              title={'카카오 계정으로 로그인'}
              titleColor={'black'}
              imgUrl={'https://user-images.githubusercontent.com/38898759/117673991-44374780-b1e6-11eb-8256-0f3e788527b0.jpg'}
              imgSize={40}
              onPress={() => this.props.navigation.navigate('AuthSetting')}/>
            <CustomButton
              buttonColor={'#00C300'}
              title={'네이버 계정으로 로그인'}
              titleColor={'white'}
              imgUrl={'https://user-images.githubusercontent.com/38898759/117673998-45687480-b1e6-11eb-9b61-6a0e7bb01bc2.jpg'}
              imgSize={40}
              onPress={() => this.props.navigation.push('Details')}/>
            <Text style={styles.warning}>
              계속 진행 시, 에어헬퍼 규정 및 개인정보 처리방침을 읽었으며 이에 동의합니다.
            </Text>
          </View>
        </View>

      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight(),
    height: responsiveHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  sub_container: {
    flex: 1, 
    justifyContent: 'flex-end',
    position: 'relative'
  },
  btn_sort: {
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  background_img: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  main_title: {
    fontSize: responsiveFontSize(10),
    color: 'white',
    fontWeight: '100',
    textAlign: 'left',
    alignItems: 'center',
  },
  sub_title: {
    fontSize: responsiveFontSize(5),
    color: 'white',
    fontWeight: '600',
    textAlign: 'left',
    marginTop: -20
  },
  warning: {
    color: 'white',
    fontSize: responsiveFontSize(1.3),
    textAlign: 'center',
    marginBottom: '5%'
  },
  target: {
    opacity: 0.5,
    position: 'absolute',
    left: 60,
    bottom: 90
  }
});