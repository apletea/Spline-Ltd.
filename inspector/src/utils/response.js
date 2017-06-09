'use strict';
let getSuccessResponseJsonObject = (data) => {
    data = typeof data === 'undefined' ? null : data;
    return {
        status: "success",
        data: data
    }
};

let getErrorResponseJsonObject = (errorCode, message) => {
    let result = {
        status: "error",
        error: errorCode
    };

    if (message) {
        result.message = message;
    }

    return result;
};

module.exports = {
    getSuccessResponseJsonObject: getSuccessResponseJsonObject,
    getErrorResponseJsonObject: getErrorResponseJsonObject
};