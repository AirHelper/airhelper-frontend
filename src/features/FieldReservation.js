import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class FieldReservation extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text>필드예약</Text>
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