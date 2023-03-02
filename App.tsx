import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Driver from './src/component/driver';
import Manager from './src/component/manager';
import Passenger from './src/component/passenger';
import HomeScreen from './src/component/home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Driver" component={Driver} />
        <Stack.Screen name="Passenger" component={Passenger} />
        <Stack.Screen name="Manager" component={Manager} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
