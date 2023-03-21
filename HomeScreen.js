import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ListItem from './ListItem';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list_container}>
        <ScrollView>
          <ListItem title="Bridgning Exercise" screenName="Bridging Native Modules" />
          <ListItem title="React Native Fundamentals" screenName="Bridging Native Modules" />
        </ScrollView>
      </View>
    </View>
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

export default HomeScreen;
