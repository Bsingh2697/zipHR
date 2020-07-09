import { show_loader } from './../redux/action/action';
import { hide_loader } from "../redux/action/action";

export const showHideLoader = (bool, dispatch) => {
    if(bool)
    {
        dispatch(show_loader)
    }
    else{
        dispatch(hide_loader)
    }
}