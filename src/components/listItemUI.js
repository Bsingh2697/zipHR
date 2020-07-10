import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from './../utils/globalStyles';

function listItemUI(props) {
    const {item}  = props
    return (
        <View >
            <Text numberOfLines={1} style={[globalStyles.textMedium14,styles.titleStyle]}>{item.title}</Text>
            <Text numberOfLines={2} style={[globalStyles.textMedium13shadow]}>{item.body}</Text>
        </View>
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
