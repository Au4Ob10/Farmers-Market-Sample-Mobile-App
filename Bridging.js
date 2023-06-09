import React from 'react'
import {Node} from 'react';

import {  SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    onPress
} from 'react-native'

const Bridging = () => {

  return ( 
      <SafeAreaView style={styles.main_view}>
      <View style={styles.container}>
          <Text style={styles.text}>The module below is the Native module you created using kotlin (in Android Studio) or swift (in Xcode). Functionality should be handled in the native code, here we are just "seeeing it"</Text>
      </View>
      <View style={styles.native_module_container}>
          <Text style={styles.text}> --- YOUR NATIVE MODULE GOES HERE --- </Text>
      </View>
    </SafeAreaView>
  );
};
 

const styles = StyleSheet.create({
    main_view:{
      backgroundColor: 'white',
    },
    container: {
      height: 100,
      margin: 20,
      backgroundColor: '#e2e9fd'
    },
    native_module_container: {
        height: '100%',
        margin: 10,
    },
    text:{
      fontWeight: '500',
      alignContent: 'space-around',
      margin: 20,
    },
    bolded_text:{
      fontWeight: 'bold'
    }
})

export default Bridging;