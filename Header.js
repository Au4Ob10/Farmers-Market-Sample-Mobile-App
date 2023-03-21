import React from 'react'
import {Node} from 'react';

import {  SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View, 
} from 'react-native'

const Header = () => {
return ( 
    <SafeAreaView>
    <View style={styles.container}>
    <Image style={styles.image_container} source={require('./assets/header_img.png')} />
    <Text style={styles.title}> Fundamentals of Mobile Development</Text>
    </View>
  </SafeAreaView>
);

};
 

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        height: 140,
        marginBottom: 10
    },

    image_container:{ 
      width: 400, 
      height: 100,
      marginTop: 20,
      marginLeft: -14
    
    },
    title:{
      fontSize: 18,
      fontWeight: '700',
      marginBottom: 5,
      marginHorizontal: 16,
    }
})

export default Header;