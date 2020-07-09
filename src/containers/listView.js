import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { show_loader, hide_loader } from '../redux/action/action';

const listView = () => {
    const load = useSelector(state => state.loader)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log("loadState : ",load)
        dispatch(show_loader())
    })
    return (
        <View>
            <Text>
                LIST VIEW
            </Text>
            <TouchableOpacity onPress={()=>dispatch(hide_loader())}>
                <Text>
                    Loader False
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>dispatch(show_loader())}>
                <Text>
                    Loader true
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default listView
