import * as React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Driver')}>
            <Text style= {styles.text}> Driver Screen</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Passenger')}>
            <Text style= {styles.text}> Passenger Screen</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Manager')}>
            <Text style= {styles.text}> Manager Screen</Text>
        </Pressable>
  
      </View>
    );
  }

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 4,
        elevation: 15,
        margin: 10,
        backgroundColor: '#1183ca',
        width: 300,
        verticalSlign: 'middle',
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'monospace',
    },

})