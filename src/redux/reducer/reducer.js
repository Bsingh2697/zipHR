
import { actionConstants } from './../../utils/constants/actionConstants';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    loader : false,
    bookmarks : []
}

export const reducer = (state = initialState , action) => {
    switch(action.type){
        case actionConstants.SHOW_LOADER : 
            return {
                ...state,
                loader : true
            }
        case actionConstants.HIDE_LOADER : 
            return {
                ...state,
                loader : false
            }
        case actionConstants.ADD_BOOKMARK : 
            console.log("Item Setttttttttttttttttttttttttttttttttttttttttttt")
            AsyncStorage.setItem("bookmarks", JSON.stringify([...state.bookmarks,action.payload]))
            return {
                ...state,
                bookmarks : [...state.bookmarks||[],action.payload]
            }
        case actionConstants.FETCH_BOOKMARK : 
            //CODE for async Storage
            return {
                ...state,
                bookmarks : [...state.bookmarks,...action.payload]
            }

        default : return initialState
    }
}