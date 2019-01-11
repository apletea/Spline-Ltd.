/**
 * Created by apletea on 18.6.17.
 */
let responseUtil = require('../utils/response'),
    errorCodes = require('../utils/error').errorCodes,
    checkParams = require('../utils/error').checkRequiredParams,
    requestService = require('../services/request_service'),
    authHelper = require('../utils/auth'),
    dateUtil = require('../utils/date');


module.exports = (express, passport) => {
    let router = express.Router();

    router.post('/booking', authHelper.allowForUsers(passport), (req,res) => {
        let errObejct = checkParams(req.body,["timeOfSubmission","emp_id","timeBooking","duration"],errorCodes.ERR_ARGUMENT_MISSED);
        if (errObejct){
            res.status(400);
            return res.json(errObejct);
        }
        let booking = {timeOfSubmission : dateUtil.datetimeToTimestamp(req.body.timeOfSubmission), emp_id : +req.body.emp_id.split('P')[1],timeBooking:dateUtil.datetimeToTimestamp(req.body.timeBooking), duration : +req.body.duration};
        console.log(booking);
        requestService.addRequest(booking).then(() => {
            res.status(200);
            return res.json(responseUtil.getSuccessResponseJsonObject("request accepted"))
        }).catch(err => {
            res.status(500);
            return res.json(responseUtil.getErrorResponseJsonObject(errorCodes.ERR_UNKNOWN,err));
        })
    });

    return router;
};
