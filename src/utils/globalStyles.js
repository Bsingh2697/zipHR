
import { colors } from './constants/colors';
import { fonts } from './constants/fonts';
export const globalStyles = {
    body : {
        flex:1,
        alignItems:'center',
        paddingVertical : 20,
        paddingHorizontal : 15,
        backgroundColor : colors.primary_color_blue
    },
    buttonStyle : {
        backgroundColor : colors.primary_color_yellow,
        borderRadius :30,
        height :45,
        width:200,
        alignItems:'center',
        justifyContent : 'center'
    },
    buttonText : {
        fontFamily : fonts.noto_bold,
        fontSize : 15,
        color : colors.primary_color_white
    },
    headingStyleBold18 : {
        fontFamily : fonts.noto_bold,
        fontSize : 18,
        color : colors.primary_color_white,
        textDecorationLine:'underline'
    },
    headingStyleShadow16: {
        fontFamily : fonts.shadown_regular,
        fontSize : 16,
        color : colors.primary_color_yellow
    },
    textMedium14 : {
        fontFamily : fonts.noto_medium,
        fontSize : 14,
        color : colors.primary_color_red,
    },
    textMedium13shadow : {
        fontFamily : fonts.shadown_regular,
        fontSize : 13,
        color : colors.primary_color_white,
    },
    textMedium15shadow : {
        fontFamily : fonts.shadown_regular,
        fontSize : 15,
        color : colors.primary_color_white,
    }
}