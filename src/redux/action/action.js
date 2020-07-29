import { actionConstants } from "../../utils/constants/actionConstants"

export const show_loader = () => {
    return {
        type : actionConstants.SHOW_LOADER,
    }
}

export const hide_loader = () => {
    console.log("CALLED HIDE LOADER")
    return {
        type : actionConstants.HIDE_LOADER,
    }
}

export const addToBookmark = (value) => {
    return{
        type : actionConstants.ADD_BOOKMARK,
        payload : value
    }
}

// export const storeBookmark = (value) => {
//     return{
//         type : actionConstants.STORE_BOOKMARK

//     }
// }

export const fetchBookmark = () => {
    return{
        type : actionConstants.FETCH_BOOKMARK
    }
}