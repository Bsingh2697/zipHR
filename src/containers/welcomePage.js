import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { navigationConstants } from '../utils/constants/navigationConstants'
import { globalStyles } from './../utils/globalStyles';
import { stringConstants } from './../utils/constants/stringConstants';

const welcomePage = (props) => {
    return (
        <View style={[globalStyles.body,styles.welcomeBody]}>
            <TouchableOpacity
                style={globalStyles.buttonStyle}
                onPress={()=>props.navigation.navigate(navigationConstants.listView)}>
                <Text style = {globalStyles.buttonText}>
                    {stringConstants.gotolist}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeBody : {
        justifyContent:'center'
    }
})

export default welcomePage
