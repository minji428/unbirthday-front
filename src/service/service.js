import axios from 'axios';
import * as httpStatus from '../util/httpErrorStatusMsgUtil'
let defaultUrl = 'http://3.37.70.125:8080'

export function anyService(requestURL, requestMethod, callbackFunc, param) {
    console.log(requestURL)
    var axiosBody = {
        url : defaultUrl + requestURL,
        // url : requestURL,
        method : requestMethod,
    }

    if(typeof param !== "undefined" || param !== null){
        if(requestMethod.toUpperCase() === "POST") {
            axiosBody.data = param
        } else {
            axiosBody.params = param
        }
    }

    axios(axiosBody)
    .then( response => {
        if(callbackFunc !== null || typeof callbackFunc !== "undefined") {
            callbackFunc(response)
        } else {
            console.log("성공 결과값 확인")
            console.log(response);
        }
    })
    .catch( error => {
        console.log(error);
    })
}
