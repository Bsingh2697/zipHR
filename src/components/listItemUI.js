//  This component is rendering item details received as props from flatlist
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from './../utils/globalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addToBookmark } from '../redux/action/action';

function listItemUI(props) {
    const {item}  = props
    const dispatch = useDispatch()
    return (
        <TouchableOpacity onPress={()=>dispatch(addToBookmark(item))} >
            <Text numberOfLines={1} style={[globalStyles.textMedium14,styles.titleStyle]}>{item.title}</Text>
            <Text numberOfLines={2} style={[globalStyles.textMedium13shadow]}>{item.body}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    titleStyle : {
        paddingEnd:100,
        lineHeight:15,
        marginTop:5,
    },
})

export default listItemUI
