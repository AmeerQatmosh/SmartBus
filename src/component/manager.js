import * as React from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default function Manager({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {styles.text}>Manager Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
      fontFamily: 'monospace',
  },

})