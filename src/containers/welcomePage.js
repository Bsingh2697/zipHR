import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { navigationConstants } from '../utils/constants/navigationConstants'
import { fetchPosts } from '../network'
import { useDispatch } from 'react-redux';
import { show_loader } from './../redux/action/action';

const welcomePage = (props) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts(0,10,respose=>{
            console.log(respose)
        }))
    },[])

    return (
        <View>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate(navigationConstants.listView)}>
                <Text>
                    Go to list
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default welcomePage
