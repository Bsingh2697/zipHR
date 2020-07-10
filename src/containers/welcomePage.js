import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { navigationConstants } from '../utils/constants/navigationConstants'
import { globalStyles } from './../utils/globalStyles';
import { stringConstants } from './../utils/constants/stringConstants';
import { images } from './../utils/constants/assets';

const welcomePage = (props) => {
    return (
        <View style={[globalStyles.body,styles.welcomeBody]}>
            <TouchableOpacity
                style={[globalStyles.buttonStyle,styles.btnStyle]}
                onPress={()=>props.navigation.navigate(navigationConstants.listView)}>
                <Text style = {globalStyles.buttonText}>
                    {stringConstants.gotolist}
                </Text>
                <Image style={styles.iconStyle} source={images.forward}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeBody : {
        justifyContent:'center',
    },
    iconStyle : {
        height:30,
        width:30,
    },
    btnStyle :{
        flexDirection:'row',
        justifyContent:'space-evenly'
    }
})

export default welcomePage
