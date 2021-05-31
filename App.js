import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/loginscreens/LoginScreen';
import TabNavigator from './src/features/BottomTab';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '개인정보 설정',
    // 헤더의 오른쪽에 버튼 만들기
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('App')}
        title="저장"
        color="#000"
      />
    ),
  });

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const Auth = createStackNavigator(
  {
    LoginScreen: LoginScreen,
  },
  {
    headerMode: "none"
  },
  {
    initialRouteName: 'LoginScreen',
  }
);

const AuthSetting = createStackNavigator(
  {
    DetailsScreen: DetailsScreen,
  },
  {
    initialRouteName: 'DetailsScreen',
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      AuthSetting: AuthSetting,
      App: TabNavigator,
    },
    {
      initialRouteName: 'Auth'
    }
  )
);