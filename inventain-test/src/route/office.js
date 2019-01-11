/**
 * Created by apletea on 18.6.17.
 */
let errorCodes = require('../utils/error').errorCodes,
    responseUtil = require('../utils/response'),
    officeService = require('../services/office_service'),
    CONTSANTS = require('../constants/office'),
    authHelper = require('../utils/auth'),
    checkParams = require('../utils/error').checkRequiredParams;

module.exports = (express, passport) => {
    let router = express.Router();

    router.post('/set', authHelper.allowForUsers(passport),  (req,res) => {
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

    router.get('/set_auth', authHelper.allowForUsers(passport), (req,res) => {
         let office = req.office;
         res.status(200);
         return res.json(responseUtil.getSuccessResponseJsonObject(office));
    });

    router.get('/get', (req,res) => {
        office = {OFFICE_ID : CONTSANTS.MAIN_OFFICE_ID};
        token = authHelper.getJwtToken(office);
        res.status(200);
        return res.json(responseUtil.getSuccessResponseJsonObject(token));
    });



    return router;
};