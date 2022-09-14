export function httpStatusErrorMsg(statusCode) {

    switch(statusCode) {
        case 400 : return "잘못된 요청입니다.";
        case 401 : return "요청이 거부되었습니다.";
        case 403 : return "권한이 없습니다.";
        case 500 : return "서버에러가 발생했습니다.";
    }

}