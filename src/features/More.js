import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class More extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>더보기</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
  });