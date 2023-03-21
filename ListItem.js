import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const ListItem = ({ title, screenName }) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (navigation.isReady) {
      navigation.navigate('Bridging');
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableHighlight onPress={() => {
          navigation.navigate(title, { screen: screenName });
        }}>
          <View style={styles.button}>
            <Text style={styles.button_label}>{title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginBottom: 10,
    marginVertical: 12
  },
  button_label: {
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginHorizontal: 10,
    height: 50,
    borderRadius: 5,
  },
});

export default ListItem;
