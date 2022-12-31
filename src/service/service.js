import axios from 'axios';
import * as httpStatus from '../util/httpErrorStatusMsgUtil'

let defaultUrl = 'https://unbirthday-api.kr'

export function anyService(requestURL, requestMethod, callbackFunc, param) {
    var axiosBody = {
        headers : {'Accept': '*/*'},
        url : defaultUrl + requestURL,
        // url : requestURL,
        method : requestMethod,
    }

    if(typeof param !== "undefined" || param !== null){
        if(requestMethod.toUpperCase() === "POST" || requestMethod.toUpperCase() === "PATCH" || requestMethod.toUpperCase === "PUT") {
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
            console.log(response);
        }
    })
    .catch( error => {
        console.log(error);
    })
}
