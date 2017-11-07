'use strict';

let responseUtil = require('./response');

const errorCodes = {
    'ERR_UNKNOWN': 0,
    'ERR_ARGUMENT_MISSED': 10005,
    'ERR_ARGUMENT_INVALID': 10006,
    'ERR_OBJECT_NOT_FOUND': 10011,
    'ERR_OBJECT_ACCESS': 1002,
    'ERR_OBJECT_INVALID': 10013,
    'ERR_OBJECT_EXIST': 10014,
    'ERR_METHOD_DEPRECATED': 10015
};

const errorCodesIntegers = Object.keys(errorCodes).map(function (key) {
    return errorCodes[key];
});

let checkRequiredParams = (req, params, errorCode) => {
    params.forEach(param => {
        if (!req.param) {
            return responseUtil.getErrorResponseJsonObject(errorCode, `Missing ${param}`);
        }
    });
};

module.exports = {
    errorCodes: errorCodes,
    checkRequiredParams: checkRequiredParams,
};