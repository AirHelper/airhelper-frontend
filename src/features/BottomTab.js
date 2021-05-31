import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Community from './Community';
import FieldReservation from './FieldReservation';
import More from './More';
import RoomAdd from './RoomAdd';
import RoomAttend from './RoomAttend';
import { 
    StyleSheet, Text, View, StatusBar, ImageBackground, Image
} from 'react-native';

//상태바

StatusBar.setBarStyle("dark-content");
const TabNavigator = createBottomTabNavigator(
    {
      필드예약: {
        screen: FieldReservation,
      },
      커뮤니티: {
        screen: Community,
      },
      방생성: {
        screen: RoomAdd,
      },
      방참가: {
        screen: RoomAttend,
      },
      더보기: {
        screen: More,
      },
    },
    {
      defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({horizontal, tintColor}) => {
          const {routeName} = navigation.state;
          let iconName;
          if (routeName === '필드예약') {
            iconName = 'ios-time-outline';
          } else if (routeName === '커뮤니티') {
            iconName = 'ios-chatbubbles-outline';
          } else if (routeName === '방생성') {
            iconName = 'ios-add-circle-outline';
          } else if (routeName === '방참가') {
            iconName = 'ios-game-controller-outline';
          } else if (routeName === '더보기') {
            iconName = 'ios-ellipsis-horizontal-outline';
          } 
          return (
            <Ionicons
              name={iconName}
              size={horizontal ? 20 : 25}
              color={tintColor}
            />
          );
        },
      }),
    },
  );

  export default TabNavigator;