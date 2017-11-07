/**
 * Created by apletea on 18.6.17.
 */
let calendarService = require('../services/calendar_service'),
    responseUtil = require('../utils/response'),
    errorUtil = require('../utils/error').errorCodes;

module.exports = (express) => {

    let router  = express.Router();

    router.get('/get', (req,res) => {
        calendarService.getCalendar().then(calendar => {
            res.status(200);
            return res.json(responseUtil.getSuccessResponseJsonObject(calendar));
        }).catch(err =>{
            res.status(500);
            return res.json(responseUtil.getErrorResponseJsonObject(errorUtil.ERR_UNKNOWN,err));
        })
    });

    return router;
};