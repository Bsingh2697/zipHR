import { actionConstants } from "../../utils/constants/actionConstants"

export const show_loader = () => {
    return {
        type : actionConstants.SHOW_LOADER,
    }
}

export const hide_loader = () => {
    return {
        type : actionConstants.HIDE_LOADER,
    }
}