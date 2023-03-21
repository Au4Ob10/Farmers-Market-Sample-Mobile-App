import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

import Header from './Header';
import HomeScreen from './HomeScreen';
import Bridging from './Bridging';
import RNFundamentals from './RnFundamentals';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ header: () => <Header /> }}
          component={HomeScreen}
        />
        <Stack.Screen name="Bridging Native Modules" component={Bridging} />
        <Stack.Screen name="React Native Fundamentals" component={RNFundamentals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_container: {
    height: '90%',
    backgroundColor: 'white',
  },
});

export default App;
