
import axios from 'axios'
import { endpoints } from './../utils/constants/endpoints';
import { apiConstants } from './../utils/constants/apiConstants';
import { showHideLoader } from '../utils/globalFunctions';

const TIMEOUT_DURATION  = 15000;

export const defaultInstance = axios.create({
    baseURL : endpoints.baseUrl,
    timeout : TIMEOUT_DURATION,
    validateStatus : function(status){
        return status>=200 && status<500
    } 
})

defaultInstance.interceptors.request.use(
    requestConfig => {
        console.log('Request Data');
        requestConfig.headers[apiConstants.accept]='application/json, text/plain, */*';
        return requestConfig
    },
    error => {
        console.log('Error', error)
        return Promise.reject(error)
    }
)

defaultInstance.interceptors.response.use(
    response => {
        console.log('Response Data')
        return response
    },
    error => {
        console.log('Error', error)
        return Promise.reject(error)
    }
)

// Request API handles the request with the props received.
const requestAPI = (
dispatch,
url,
start,
end,
successCallBack,
errorCallBack,
exceptionCallBack,
)=>{
    showHideLoader(true,dispatch)
    console.log("Request API")
    let promise = Promise
    promise = defaultInstance.get(`${url}?_start=${start}&_end=${end}`)
    promise.then((response)=>{
        console.log("Response", response)
        showHideLoader(false,dispatch)
        if(response.status === 200)
        {
            if(successCallBack)
            {
                successCallBack(response)
            }
        }else{
            if(errorCallBack){
                errorCallBack(error.errno)
            }
        }
    })
    .catch((ex)=>{
        if(exceptionCallBack){
            exceptionCallBack(ex)
        }
        return ex
    })
}


export const fetchPosts = (
    start,
    end,
    successCallBack,
    errorCallBack,
    exceptionCallBack
) =>{ 
    return (dispatch) => 
    requestAPI(
        dispatch,
        endpoints.posts,
        start,
        end,
        response => {
            successCallBack(response)
        },
        error=>{
            errorCallBack(error)
        },
        exception=>{
            exceptionCallBack(exception)
        }
    )}
