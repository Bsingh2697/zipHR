
import { actionConstants } from './../../utils/constants/actionConstants';

const initialState = {
    loader : false
}

export const reducer = (state = initialState , action) => {
    switch(action.type){
        case actionConstants.SHOW_LOADER : 
            return {
                loader : true
            }
        case actionConstants.HIDE_LOADER : 
            return {
                loader : false
            }

        default : return initialState
    }
}