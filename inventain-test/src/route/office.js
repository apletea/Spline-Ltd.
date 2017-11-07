/**
 * Created by apletea on 18.6.17.
 */
let errorCodes = require('../utils/error').errorCodes,
    responseUtil = require('../utils/response'),
    officeService = require('../services/office_service'),
    checkParams = require('../utils/error').checkRequiredParams;

module.exports = (express) => {
    let router = express.Router();

    router.post('/set', (req,res) => {
        let errObject = checkParams(req.body,["to","from"],errorCodes.ERR_ARGUMENT_MISSED);
        if (errObject){
              res.status(400);
              return errObject;
        }
        let officeTime = {from : req.body.from, to : req.body.to};
        officeService.getOfficeTime().then(office => {
            let operation = "setOfficeTime";
            if (!office){
                operation = "createOfficeTime";
            }
            officeService[operation](officeTime).then(() => {
                res.status(200);
                return res.json(responseUtil.getSuccessResponseJsonObject("office time updated"));
            }).catch(err => {
                res.status(500);
                return res.sjon(responseUtil.getErrorResponseJsonObject(errorCodes.ERR_UNKNOWN,err));
            })
        })
    });



    return router;
};