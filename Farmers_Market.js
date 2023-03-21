import React, {Component} from 'react'
import {Node} from 'react';

import {
    document,
    Button,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    onPress
} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen';

const RNFundamentals = () => {
   
    
    return (
        <SafeAreaView style={styles.main_view}>
            <View style={styles.company_container}>
                <Text style={styles.title_text}>Farmer's Market of New Haven
                </Text>
            </View>

            <View style={styles.title_container}>
                <Text style={styles.history_heading}>Our History
                </Text>
            </View>

            <CompanyHistory/>

            <View style={styles.button_container}>
               <Button  title="Click for Product List"></Button>
            
          <ProductList />
                
            </View>

        </SafeAreaView>
    );

};
const CompanyHistory = () => {
    return (
        <View style={styles.company_History_Container}>
            <Text style={styles.company_History_Text}>FMNH was founded in 2005. Since then,
                we have attracted many different vendors. Our markets attract many people from
                surrounding cities. We have sponsorships from many different New Haven
                companies.</Text>
            <Image
                style={styles.middle_Image_Container}
                source={require('./assets/farmers_Market_Img.jpg')}></Image>
        </View>
    )
}

const ProductList = () => {

    return (

        <View style={styles.product_List_Container}>
            <Text style={styles.product_List_Text}>Cucumbers ($2/lb)</Text>
            <Text style={styles.product_List_Text}>Tomatoes ($1.40/lb)
            </Text>
            <Text style={styles.product_List_Text}>Spinach ($5/lb)
            </Text>
            <Text style={styles.product_List_Text}>Kale ($3/lb)
            </Text>
            <Text style={styles.product_List_Text}>Corn ($3/lb)
            </Text>
        </View>

    )

}

const styles = StyleSheet.create({
    top_container: {
        margin: 0,
        backgroundColor: '#3A98B9'
    },

    title_container: {
        backgroundColor: '#3A98B9',

    },

    title_text: {
        alignContent: 'space-around',
        color: 'white',
        fontWeight: '500',
        margin: 20,
        textAlign: 'center',
        fontSize: 25

    },

    company_History_Text: {
        color: 'black',
        fontWeight: '500',
        lineHeight: 40,
        textAlign: 'center'
    },

    middle_Image_Container: {

        height: '40%',
        width: 'auto'
    },

    button_container: {
        marginTop: -70
    },
    
   
    company_container: {
        backgroundColor: '#3A98B9',
        width: '100%'
    },
    company_text: {
        fontWeight: '500',
        alignContent: 'space-around',
        textAlign: 'center',
        margin: 20

    },
    company_History_Container: {
        display: 'flex',
        backgroundColor: '#EEEEEE'
    },
   
    company_name: {
        fontWeight: '500',
        alignContent: 'space-around',
        textAlign: 'center',
        margin: 20

    },

    history_heading: {
        color: 'white',
        textAlign: 'center',
        margin: 15,
        fontSize: 20
    },
    product_List_Container: {
        backgroundColor: '#EEEEEE'
    },
    product_List_Text: {
        color: 'black',
        fontWeight: '500',
        marginLeft: '10%',
        lineHeight: 35,
        textAlign: 'center'
    },

    
    main_view: {
        backgroundColor: 'white'
    },

   

    native_module_container: {
        width: '100%',
        backgroundColor: 'blue'
    },

    bolded_text: {
        fontWeight: 'bold'
    }
})

export default RNFundamentals;
